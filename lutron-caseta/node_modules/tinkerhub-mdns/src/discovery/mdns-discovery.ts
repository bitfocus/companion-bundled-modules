import { HostAndPort, BasicServiceDiscovery } from 'tinkerhub-discovery';

import { stringify, parse } from 'multicast-dns-service-types';

import { MDNSService } from '../service';
import { Protocol } from '../protocol';

import { createMDNS, MDNS, MDNSResponse, PTRRecord, SRVRecord, ARecord, AAAARecord, TXTRecord, MDNSQuery, Record } from '../manager';
import { ServiceData } from './service-data';
import { RecordHandle } from './record-handle';
import { RecordArray } from './record-array';
import { TTLRefreshHelper } from './ttl-refresh-helper';

// Minimum delay in ms before starting another search
const SEARCH_MIN_DELAY = 1000;
// Maximum delay in ms between searches
const SEARCH_MAX_DELAY = 60 * 60 * 1000;
// Factor to multiply delay with after every search
const SEARCH_DELAY_FACTOR = 3;

/** Internal type used to merge A and AAAA records */
type RecordWithIP = ARecord | AAAARecord;

/**
 * Options available for the discovery.
 */
export interface MDNSDiscoveryOptions {
	/**
	 * The type of service to look for.
	 */
	type: string;

	/**
	 * The protocol of the service.
	 */
	protocol?: Protocol;
}

/**
 * Discovery that finds services exposed over Multicast DNS on the local
 * network.
 */
// TODO: Expose type, protocol and subtypes?
export class MDNSServiceDiscovery extends BasicServiceDiscovery<MDNSService> {
	private readonly searchName: string;
	private readonly normalizedSearchName: string;

	private readonly mdns: MDNS;
	private readonly serviceData: Map<string, ServiceData>;

	private searchTimeout: any;
	private searchTime: number;
	private searchLastInvoke: number;

	private readonly ttlRefreshHelper: TTLRefreshHelper;
	private readonly queuedRefreshes: Set<string>;

	constructor(
		options: MDNSDiscoveryOptions
	) {
		super('mdns');

		this.serviceData = new Map();
		this.queuedRefreshes = new Set();
		this.ttlRefreshHelper = new TTLRefreshHelper(() => this.search(false));

		this.searchName = stringify(options.type, options.protocol || 'tcp') + '.local';
		this.normalizedSearchName = normalizeName(this.searchName);

		this.mdns = createMDNS();
		this.mdns.onResponse(this.handleResponse.bind(this));
		this.mdns.onQuery(this.handleQuery.bind(this));

		// Select an initial search delay between 20 and 120 ms
		const initialDelay = 20 + Math.random() * 100;

		// Queue the initial search
		this.searchTime = 0;
		this.searchLastInvoke = 0;
		this.searchTimeout = setTimeout(() => this.search(true), initialDelay);
	}

	public async destroy(): Promise<void> {
		clearTimeout(this.searchTimeout);

		this.ttlRefreshHelper.destroy();
		this.mdns.destroy();

		await super.destroy();
	}

	/**
	 * Perform a search for services on the network. This function will send
	 * a query out which will cause responders to send back their records.
	 *
	 * Search is called:
	 * 1) Periodically, with increasing query times, up to an hour of delay
	 * 2) When records are nearing expiration
	 */
	private search(periodical: boolean) {
		const now = Date.now();

		if(periodical) {
			this.debug('Searching for services on schedule');
		} else {
			// Check that we're not performing a non-periodical search too quickly
			if(now - this.searchLastInvoke < SEARCH_MIN_DELAY) return;

			this.debug('Searching for services due to near-end TTL');
		}

		this.searchLastInvoke = now;

		const query = new MDNSQuery([
			{
				type: 'PTR',
				name: this.searchName
			}
		]);

		this.mdns.query(query)
			.catch(err => this.logAndEmitError(err, 'Caught error during search'));

		if(periodical) {
			// Periodical searches increase the delay time

			if(this.searchTime === 0) {
				// Next search is for the minimum delay
				this.searchTime = SEARCH_MIN_DELAY;
			} else {
				// Increase the delay until max is reached
				this.searchTime = Math.min(this.searchTime * SEARCH_DELAY_FACTOR, SEARCH_MAX_DELAY);
			}
		}

		// Reschedule searching
		this.rescheduleSearch();
	}

	/**
	 * Reschedule when the search is next performed.
	 */
	private rescheduleSearch() {
		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => this.search(true), this.searchTime);
	}

	/**
	 * Handle incoming queries. Used to reschedule searches if another client
	 * on the network is seen querying for the same service as us.
	 *
	 * @param query
	 */
	private handleQuery(query: MDNSQuery) {
		if(this.isSameQuery(query)) {
			/*
			 * This query is the same we would send, reschedule our next
			 * search if our last search was more than 500 ms ago. This
			 * avoid us rescheduling after our own query.
			 */
			if(Date.now() - this.searchLastInvoke > 500) {
				this.debug('Rescheduling search due to incoming query');
				this.rescheduleSearch();
			}
		}
	}

	private isSameQuery(query: MDNSQuery): boolean {
		for(const q of query.questions) {
			if(q.type === 'PTR' && normalizeName(q.name) === this.normalizedSearchName) {
				// Check that all the answers have been seen by us
				if(query.answers) {
					for(const answer of query.answers) {
						const record = this.mdns.find(item => item.isEqual(answer));
						if(! record) {
							// This is a record we haven't seen
							return false;
						}
					}
				}

				return true;
			}
		}

		return false;
	}

	private isMatching(PTR: PTRRecord) {
		const normalizedRecordName = normalizeName(PTR.name);
		return normalizedRecordName === this.normalizedSearchName;
	}

	private handleResponse(response: MDNSResponse) {
		for(const record of response.mergedRecords) {
			if(record instanceof PTRRecord && this.isMatching(record)) {
				/*
				* This PTR is what we're looking for. Queue a refresh of the
				* service.
				*/
				if(this.queuedRefreshes.has(record.hostname)) {
					continue;
				}

				this.queuedRefreshes.add(record.hostname);
				setTimeout(() => this.refreshService(record.hostname), 500);
			}
		}
	}

	private refreshService(name: string) {
		this.debug('Refreshing service', name);

		// Remove from the refresh queue
		this.queuedRefreshes.delete(name);

		let data = this.serviceData.get(name);
		const PTR = this.mdns.find(record => record instanceof PTRRecord && record.hostname === name) as PTRRecord;

		if(! data) {
			if(! PTR) {
				this.debug('Requested refresh of non-existent service', name, 'without an initial PTR record');
				return;
			}

			const refreshThis = () => {
				if(this.queuedRefreshes.has(name)) return;

				this.queuedRefreshes.add(name);
				setTimeout(() => this.refreshService(name), 500);
			};

			const onSet = (record: Record) => {
				/*
				 * When a record becomes active, listen for it being expired
				 * and add it to the refresh helper.
				 */
				record.onExpire(refreshThis);
				this.ttlRefreshHelper.add(record);
			};

			const onRemove = (record: Record) => {
				// Remove old records from refresh listeners
				record.onExpire.unsubscribe(refreshThis);
				this.ttlRefreshHelper.remove(record);
			};

			data = {
				PTR: new RecordHandle<PTRRecord>(onSet, onRemove),
				SRV: new RecordHandle<SRVRecord>(onSet, onRemove),
				addressRecords: new RecordArray(refreshThis),
				txtRecords: new RecordArray(refreshThis)
			};

			data.PTR.update(PTR);

			// Store the service data for next refresh
			this.serviceData.set(name, data);
		} else if(PTR) {
			if(data.PTR.record !== PTR) {
				// The PTR record has changed
				this.debug('Updating', name, 'with new PTR');
				data.PTR.update(PTR);
			}
		} else {
			// PTR has expired
			this.debug('Removing', name, 'due to no PTR');
			this.invalidateService(name, data);
			return;
		}

		const SRV = this.mdns.find(record => record instanceof SRVRecord && record.name === name) as SRVRecord;
		if(SRV) {
			if(data.SRV.record !== SRV) {
				// This is a new SRV record - update our record
				this.debug('Updating', name, 'with new SRV');
				data.SRV.update(SRV);
			}
		} else {
			// No SRV - invalidate the service
			this.debug('Removing', name, 'due to no SRV');
			this.invalidateService(name, data);
			return;
		}

		// Collect all of the addresses the service can be reached at
		const port = SRV.port;
		const host = SRV.target;

		const records = this.mdns.findAll(record =>
			(record instanceof ARecord || record instanceof AAAARecord)
			&& record.name === host) as RecordWithIP[];
		data.addressRecords.items = records;

		if(records.length === 0) {
			this.debug('Removing', name, 'due to no addresses available');
			this.invalidateService(name, data);
			return;
		}

		const addresses = records
			.map(record => new HostAndPort(record.ip, port))
			.sort(HostAndPort.compare);

		// Map TXT records into data
		const txtData = new Map<string, string | boolean>();
		const binaryData: Buffer[] = [];

		const txtRecords = this.mdns.findAll(record => record instanceof TXTRecord && record.name === name) as TXTRecord[];

		for(const record of txtRecords) {
			for(const [ key, value ] of record.data.entries()) {
				txtData.set(key, value);
			}

			for(const buffer of record.binaryData) {
				binaryData.push(buffer);
			}
		}

		// Extract the local name and parse the service
		// TODO: Replace multicast-dns-service-types at some point
		const idx = name.indexOf('.');
		const localName = name.substring(0, idx);
		const parsedService = parse(name.substring(idx + 1, name.length - 6));

		// Map the final service data and add/update service
		const service: MDNSService = {
			id: name,

			name: localName,

			type: parsedService.name || 'unknown',

			protocol: parsedService.protocol as Protocol,

			subtypes: parsedService.subtypes || [],

			addresses: addresses,

			data: txtData,

			binaryData: binaryData
		};

		this.updateService(service);
	}

	private invalidateService(name: string, data: ServiceData) {
		data.PTR.update(null);
		data.SRV.update(null);

		this.removeService(name);
		this.serviceData.delete(name);
	}
}

function normalizeName(n: string) {
	return n ? n.toLowerCase() : n;
}
