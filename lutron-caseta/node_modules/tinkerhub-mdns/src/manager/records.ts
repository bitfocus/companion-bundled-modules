import { Event, Subscribable } from 'atvik';

import fastDeepEqual from 'fast-deep-equal';
import { decodeTXT } from './txt';

export interface RecordData {
	name: string;

	class?: string;

	flush?: boolean;

	ttl?: number;
}

export abstract class Record {
	public abstract readonly type: string;

	private readonly expireEvent: Event<Record>;
	private readonly refreshEvent: Event<Record>;

	public readonly name: string;
	public readonly class: string;
	public readonly flush: boolean;

	public lastRefresh: number;
	public ttl?: number;

	constructor(data: RecordData) {
		this.name = data.name || '';
		this.class = data.class || 'IN';
		this.flush = data.flush || false;
		this.ttl = data.ttl;
		this.lastRefresh = Date.now();

		this.expireEvent = new Event<Record>(this);
		this.refreshEvent = new Event<Record>(this);
	}

	public destroy() {
		this.expireEvent.emit();
	}

	public refresh(ttl: number) {
		this.ttl = ttl;
		this.lastRefresh = Date.now();

		this.refreshEvent.emit();
	}

	get remainingTTL() {
		if(! this.ttl) return undefined;

		const passedTTL = Math.floor((Date.now() - this.lastRefresh) / 1000);
		return this.ttl - passedTTL;
	}

	get onExpire(): Subscribable<Record> {
		return this.expireEvent.subscribable;
	}

	get onRefresh(): Subscribable<Record> {
		return this.refreshEvent.subscribable;
	}

	public isEqual(other: Record) {
		if(other.type !== this.type) {
			return false;
		}

		if(other.name !== this.name) {
			return false;
		}

		return this.isDataEqual(other as this);
	}

	protected abstract isDataEqual(other: this): boolean;
}

export class ARecord extends Record {
	public readonly type = 'A';

	public readonly ip: string;

	constructor(record: RecordData & { ip: string }) {
		super(record);

		this.ip = record.ip;
	}

	protected isDataEqual(other: this) {
		return this.ip === other.ip;
	}
}

export class AAAARecord extends Record {
	public readonly type = 'AAAA';

	public readonly ip: string;

	constructor(data: RecordData & { ip: string }) {
		super(data);

		this.ip = data.ip;
	}

	protected isDataEqual(other: this) {
		return this.ip === other.ip;
	}
}

export class SRVRecord extends Record {
	public readonly type = 'SRV';

	public readonly target: string;
	public readonly port: number;

	constructor(data: RecordData & { target: string, port: number }) {
		super(data);

		this.target = data.target;
		this.port = data.port;
	}

	protected isDataEqual(other: this) {
		return this.target === other.target && this.port === other.port;
	}
}

export class PTRRecord extends Record {
	public readonly type = 'PTR';

	public readonly hostname: string;

	constructor(data: RecordData & { hostname: string }) {
		super(data);

		this.hostname = data.hostname;
	}

	protected isDataEqual(other: this) {
		return this.hostname === other.hostname;
	}

	protected toData() {
		return this.hostname;
	}
}

export class TXTRecord extends Record {
	public readonly type = 'TXT';

	public readonly data: Map<string, string | boolean>;
	public readonly binaryData: Buffer[];

	constructor(data: RecordData & { data: Buffer[], decode: boolean }) {
		super(data);

		this.binaryData = data.data;
		this.data = new Map();
		if(data.decode) {
			for(const b of this.binaryData) {
				const decoded = decodeTXT(b);
				if(decoded) {
					this.data.set(decoded.key, decoded.value);
				}
			}
		}
	}

	protected isDataEqual(other: this) {
		return fastDeepEqual(this.binaryData, this.binaryData);
	}

	protected toData() {
		return this.binaryData;
	}
}

export class UnknownRecord extends Record {
	public readonly type: string;
	public readonly data: any;

	constructor(data: RecordData & { type: string, data: any }) {
		super(data);

		this.type = data.type;
		this.data = data.data;
	}

	protected isDataEqual(other: this) {
		return fastDeepEqual(this.data, other.data);
	}

	protected toData() {
		return this.data;
	}
}
