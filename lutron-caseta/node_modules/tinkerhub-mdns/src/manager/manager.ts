import { ReschedulingTimerWheel } from 'timer-wheel';

import { AbstractTransport } from './transport/abstract-transport';
import { createTransport } from './transport';

import { MDNS } from './mdns';
import { MDNSResponse } from './response';
import { MDNSQuery } from './query';
import { Record } from './records';

import debugFactory from 'debug';
const debug = debugFactory('th:mdns:manager');

/**
 * Basic manager for mDNS. Manages creation of the main instance that actually
 * listens for the mDNS broadcasts.
 */
export class Manager {
	private transport?: AbstractTransport;
	private instances: MDNS[];

	private records: Record[];
	private recordExpirer: ReschedulingTimerWheel<Record>;
	private recordExpirerInterval: any;

	constructor() {
		this.instances = [];

		this.records = [];
		this.recordExpirer = new ReschedulingTimerWheel();

		this.mapRecord = this.mapRecord.bind(this);
	}

	/**
	 * Remove a previously seen record.
	 *
	 * @param record
	 */
	private removeRecord(record: Record) {
		const idx = this.records.findIndex(item => item === record);
		if(idx >= 0) {
			this.recordExpirer.unschedule(record);
			this.records.splice(idx, 1);
			record.destroy();
			debug('REMOVED', record.type, record.name, ' total=', this.records.length);
		}
	}

	private mapRecord(record: Record): Record {
		if(record.flush) {
			/*
			* Flush indicates that the cache should flush records with the
			* same type, class and name that are older than a second.
			*/
			let count = 0;

			const oneSecondAgo = Date.now() - 1000;
			for(const item of this.records) {
				if(item.type === record.type
					&& item.class === record.class
					&& item.name === record.name
					&& item.lastRefresh < oneSecondAgo)
				{
					this.scheduleRemoval(item, 0);

					count++;
				}
			}

			debug('FLUSH', record.type, record.class, record.name, 'records=', count);
		}

		if(typeof record.ttl !== 'number') return record;

		const previous = this.records.find(item => item.isEqual(record));
		if(previous) {
			// Already have a previous record with this data, refresh the TTL
			previous.refresh(record.ttl);
			this.scheduleRemoval(previous, record.ttl);

			debug('REFRESH', record.type, record.class, record.name, 'ttl=', record.ttl, 'total=', this.records.length);

			return previous;
		}

		// Register the new record
		this.records.push(record);
		this.scheduleRemoval(record, record.ttl);

		// Output some useful debug information
		debug('ADDED', record.type, record.class, record.name, 'ttl=', record.ttl, 'total=', this.records.length);

		return record;
	}

	private scheduleRemoval(record: Record, ttl: number) {
		return this.recordExpirer.schedule(record, ttl * 1000);
	}

	private advanceAndExpire() {
		for(const expired of this.recordExpirer.advance()) {
			this.removeRecord(expired);
		}
	}

	private createMulticastDNS() {
		this.transport = createTransport({
			mapRecord: record => this.mapRecord(record),

			onError: err => {
				for(const instance of this.instances) {
					instance.receiveError(err);
				}
			},

			onQuery: query => {
				for(const instance of this.instances) {
					instance.receiveQuery(query);
				}
			},

			onResponse: response => {
				for(const instance of this.instances) {
					instance.receiveResponse(response);
				}
			}
		});

		this.recordExpirerInterval = setInterval(() => this.advanceAndExpire(), 1000);
	}

	public requestHandle(): MDNS {
		if(this.instances.length === 0) {
			this.createMulticastDNS();
		}

		const result = new MDNS(this);
		this.instances.push(result);
		return result;
	}

	public release(instance: MDNS) {
		const idx = this.instances.indexOf(instance);
		if(idx < 0) return;

		this.instances.splice(idx, 1);
		if(this.instances.length === 0 && this.transport) {
			this.transport.destroy();
			this.transport = undefined;

			clearInterval(this.recordExpirerInterval);
		}
	}

	public async query(query: MDNSQuery): Promise<void> {
		if(! this.transport) {
			throw new Error('No mDNS transport instance available');
		}

		return await this.transport.query(query);
	}

	public async respond(response: MDNSResponse): Promise<void> {
		if(! this.transport) {
			throw new Error('No mDNS transport instance available');
		}

		return this.transport.respond(response);
	}

	public find(predicate: (record: Record) => boolean): Record | undefined {
		this.advanceAndExpire();

		for(const item of this.records) {
			if(predicate(item)) {
				return item;
			}
		}
	}

	public findAll(predicate: (record: Record) => boolean): Record[] {
		this.advanceAndExpire();

		const result = [];

		for(const item of this.records) {
			if(predicate(item)) {
				result.push(item);
			}
		}

		return result;
	}
}
