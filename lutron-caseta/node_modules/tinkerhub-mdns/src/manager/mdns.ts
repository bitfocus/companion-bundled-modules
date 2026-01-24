import { Event, Subscribable } from 'atvik';

import { MDNSResponse } from './response';
import { MDNSQuery } from './query';
import { Manager } from './manager';
import { Record } from './records';

export class MDNS {
	private manager: Manager;

	private queryEvent: Event<this, [ MDNSQuery ]>;
	private responseEvent: Event<this, [ MDNSResponse ]>;
	private errorEvent: Event<this, [ Error ]>;

	constructor(manager: Manager) {
		this.manager = manager;

		this.queryEvent = new Event(this);
		this.responseEvent = new Event(this);
		this.errorEvent = new Event(this);
	}

	get onResponse(): Subscribable<this, [ MDNSResponse ]> {
		return this.responseEvent.subscribable;
	}

	get onQuery(): Subscribable<this, [ MDNSQuery ]> {
		return this.queryEvent.subscribable;
	}

	get onError(): Subscribable<this, [ Error ]> {
		return this.errorEvent.subscribable;
	}

	public query(query: MDNSQuery) {
		return this.manager.query(query);
	}

	public respond(response: MDNSResponse) {
		return this.manager.respond(response);
	}

	public destroy() {
		this.manager.release(this);
	}

	public receiveQuery(query: MDNSQuery ) {
		this.queryEvent.emit(query);
	}

	public receiveResponse(response: MDNSResponse) {
		this.responseEvent.emit(response);
	}

	public receiveError(error: Error) {
		this.errorEvent.emit(error);
	}

	public find(predicate: (record: Record) => boolean) {
		return this.manager.find(predicate);
	}

	public findAll(predicate: (record: Record) => boolean) {
		return this.manager.findAll(predicate);
	}
}
