import multicastDns, {
	MulticastDNS,
	Packet,
	Answer as MRecord,
	Question as MQuestion
} from 'multicast-dns';

import { AbstractTransport, TransportOptions } from './abstract-transport';
import { Record, ARecord, AAAARecord, TXTRecord, PTRRecord, UnknownRecord, SRVRecord } from '../records';
import { MDNSQuery, Question } from '../query';
import { MDNSResponse } from '../response';

export class MulticastDNSTransport extends AbstractTransport {
	private mdns: MulticastDNS;

	constructor(options: TransportOptions) {
		super(options);

		this.mdns = multicastDns();
		this.mdns.on('error', err => {
			this.onError(err);
		});
		this.mdns.on('response', (packet, rinfo) => {
			const response = new MDNSResponse(
				this.fromTransportsRecords(packet.answers || []),
				this.fromTransportsRecords(packet.additionals || [])
			);

			this.onResponse(response);
		});
		this.mdns.on('query', (packet, rinfo) => {
			const response = new MDNSQuery(
				packet.questions || [],
				this.fromTransportsRecords(packet.answers || []),
				this.fromTransportsRecords(packet.additionals || [])
			);

			this.onQuery(response);
		});
	}

	private fromTransportsRecords(records: MRecord[]): Record[] {
		const result = [];
		for(const r of records) {
			result.push(this.mapRecord(fromTransportRecord(r)));
		}
		return result;
	}

	public query(query: MDNSQuery): Promise<void> {
		const packet: Packet = {
			questions: query.questions.map(q => ({
				name: q.name,
				type: q.type,
				class: q.class
			})),

			answers: query.answers.map(toTransportRecord),
			additionals: query.additionals.map(toTransportRecord),
		};

		return new Promise((resolve, reject) =>
			this.mdns.query(packet, (err) => {
				if(err) {
					reject(err);
				}

				resolve();
			})
		);
	}

	public respond(response: MDNSResponse): Promise<void> {
		const packet: Packet = {
			answers: response.answers.map(toTransportRecord),
			additionals: response.additionals.map(toTransportRecord),
		};

		return new Promise((resolve, reject) =>
			this.mdns.respond(packet, (err) => {
				if(err) {
					reject(err);
				}

				resolve();
			})
		);
	}

	public destroy() {
		this.mdns.destroy();
	}
}

function toTransportRecord(record: Record): MRecord {
	let data;
	if(record instanceof ARecord) {
		data = record.ip;
	} else if(record instanceof AAAARecord) {
		data = record.ip;
	} else if(record instanceof TXTRecord) {
		data = record.binaryData;
	} else if(record instanceof PTRRecord) {
		data = record.hostname;
	} else if(record instanceof SRVRecord) {
		data = {
			target: record.target,
			port: record.port
		};
	} else if(record instanceof UnknownRecord) {
		data = record.data;
	} else {
		data = undefined;
	}

	return {
		type: record.type,
		name: record.name,
		ttl: record.ttl,
		class: record.class,
		flush: record.flush,
		data: data
	};
}

export function fromTransportRecord(answer: MRecord): Record {
	switch(answer.type) {
		case 'A':
			return new ARecord(Object.assign(answer, {
				ip: answer.data
			}));
		case 'AAAA':
			return new AAAARecord(Object.assign(answer, {
				ip: answer.data
			}));
		case 'TXT':
			return new TXTRecord(Object.assign(answer, {
				data: answer.data,
				decode: true
			}));
		case 'SRV':
			return new SRVRecord(Object.assign(answer, {
				target: answer.data.target,
				port: answer.data.port
			}));
		case 'PTR':
			return new PTRRecord(Object.assign(answer, {
				hostname: answer.data
			}));
		default:
			return new UnknownRecord(answer);
	}
}
