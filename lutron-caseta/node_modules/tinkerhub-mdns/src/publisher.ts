import { hostname, networkInterfaces } from 'os';

import { AbstractServicePublisher } from 'tinkerhub-discovery';
import { stringify } from 'multicast-dns-service-types';

import { createMDNS, MDNS, Record, PTRRecord, SRVRecord, ARecord, AAAARecord, MDNSQuery, MDNSResponse } from './manager';
import { Protocol } from './protocol';
import { randomId } from './id';

/**
 * Options that can be used when publishing a service over Multicast DNS.
 */
export interface MDNSServicePublisherOptions {
	/**
	 * The name of the service. If this is not specified a randomly generated
	 * name will be used.
	 */
	name?: string;

	/**
	 * Port number of service. This is the port number than a consumer can use
	 * to connect to this service.
	 */
	port: number;

	/**
	 * Type of the service.
	 */
	type: string;

	/**
	 * Protocol used by the service.
	 */
	protocol?: Protocol;

	/**
	 * Sub-types of the service.
	 */
	subtypes?: [];

	/**
	 * Extra data to expose for the service. Useful to expose information about
	 * the service, such as a human readable name or a unique identifier.
	 */
	data?: Map<string, string | boolean>;

	/**
	 * The number of seconds this service should be assumed to be available.
	 * Defaults to 75 minutes.
	 */
	ttl?: number;

}

// Minimum delay in ms before broadcasting again
const BROADCAST_MIN_DELAY = 1000;
// Maximum number of broadcasts to send
const BROADCAST_MAX = 8;
// Factor to multiply delay with after every broadcast
const BROADCAST_DELAY_FACTOR = 3;

const LOCAL = '.local';
const ANY_TYPE = '_services._dns-sd._udp.local';

/**
 * A service published using Multicast DNS.
 */
export class MDNSServicePublisher extends AbstractServicePublisher {
	private mdns: MDNS;

	public readonly qualifiedName: string;

	public readonly name: string;
	public readonly port: number;
	public readonly type: string;

	public readonly ttl: number;

	private broadcastTimeout: any;
	private broadcastTime: number;
	private broadcastNumber: number;

	constructor(options: MDNSServicePublisherOptions) {
		super('mdns');

		this.name = options.name || randomId();
		this.port = options.port;
		this.type = stringify(options.type, options.protocol || 'tcp', options.subtypes) + LOCAL;

		this.qualifiedName = this.name + '.' + this.type;

		this.ttl = options.ttl || 4500;

		this.mdns = createMDNS();
		this.mdns.onQuery(q => this.handleQuery(q));

		const initialDelay = 20 + Math.random() * 100;
		this.broadcastTime = 0;
		this.broadcastNumber = 0;
		this.broadcastTimeout = setTimeout(() => this.broadcast(), initialDelay);
	}

	protected handleQuery(query: MDNSQuery) {
		for(const question of query.questions) {
			// We only reply to PTR queries
			if(question.type !== 'PTR') continue;

			if(question.name === ANY_TYPE) {
				if(! this.hasService(query.answers)) {
					this.announce(true);
				}
			} else if(question.name === this.type) {
				if(! this.hasService(query.answers)) {
					this.announce(false);
				}
			}
		}
	}

	/**
	 * Go through known services and check if the querier knows about this
	 * service.
	 *
	 * The following must match:
	 * 1) The record must be a PTR
	 * 2) The name of the record must match our type
	 * 3) The hostname must match our qualified name
	 * 4) The TTL must be more than half the original value
	 *
	 * @param answers
	 */
	private hasService(answers: Record[]) {
		for(const answer of answers) {
			if(answer instanceof PTRRecord
				&& answer.name === this.type
				&& answer.hostname === this.qualifiedName
				&& (answer.ttl && answer.ttl > this.ttl / 2)
			) {
				return true;
			}
		}

		return false;
	}

	public broadcast() {
		this.announce(false);

		if(++this.broadcastNumber >= BROADCAST_MAX) {
			// Reached the max number of broadcasts to perform
			return;
		}

		if(this.broadcastTime === 0) {
			// Next broadcast is for the minimum delay
			this.broadcastTime = BROADCAST_MIN_DELAY;
		} else {
			// Increase the delay
			this.broadcastTime = this.broadcastTime * BROADCAST_DELAY_FACTOR;
		}

		this.broadcastTimeout = setTimeout(() => this.broadcast(), this.broadcastTime);
	}

	private announce(isAny: boolean) {
		if(isAny) {
			this.debug('Responding to query for any services', this.qualifiedName);
		} else {
			this.debug('Announcing availability of service', this.qualifiedName);
		}

		const answers: Record[] = [
			new PTRRecord({
				name: isAny ? ANY_TYPE : this.type,
				ttl: this.ttl,
				flush: false,

				hostname: this.qualifiedName
			})
		];

		const host = hostname() + LOCAL;
		const additionals: Record[] = [
			new SRVRecord({
				name: this.qualifiedName,
				ttl: this.ttl,
				flush: true,

				target: host,
				port: this.port
			})
		];

		// Collect A and AAAA by going through network interfaces
		const ifs = networkInterfaces();
		for(const key of Object.keys(ifs)) {
			for(const address of ifs[key]) {
				if(address.internal) continue;

				switch(address.family) {
					case 'IPv4':
						additionals.push(new ARecord({
							name: host,
							ttl: this.ttl,
							flush: true,

							ip: address.address
						}));
						break;
					case 'IPv6':
						additionals.push(new AAAARecord({
							name: host,
							ttl: this.ttl,
							flush: true,

							ip: address.address
						}));
						break;
				}
			}
		}

		this.mdns.respond(new MDNSResponse(answers, additionals));
	}

	public async destroy(): Promise<void> {
		clearTimeout(this.broadcastTimeout);

		await this.sendGoodbye();

		return await new Promise((resolve, reject) => {
			// Send the goodbye again in 250 ms
			setTimeout(() => this.sendGoodbye().catch(reject), 250);

			// Destroy our mDNS instance
			setTimeout(() => {
				try {
					this.mdns.destroy();

					resolve();
				}
				catch (err) {
					reject(err);
				}
			}, 500);
		});
	}

	private sendGoodbye() {
		return this.mdns.respond(new MDNSResponse([
			new PTRRecord({
				name: this.type,
				ttl: 0,

				hostname: this.qualifiedName
			})
		]));
	}
}
