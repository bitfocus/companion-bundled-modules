import debug from 'debug';
import { Event } from 'atvik';

import { ServicePublisher } from './service-publisher';

/**
 * Abstract base class to simplify implementation of publishers.
 */
export abstract class AbstractServicePublisher implements ServicePublisher {
	/**
	 * Debugger that can be used to output debug messages for the publisher.
	 */
	protected readonly debug: debug.Debugger;
	/**
	 * Event used to emit errors for this publisher.
	 */
	protected readonly errorEvent: Event<this, [ Error ]>;

	constructor(type: string) {
		this.debug = debug('th:discovery:publisher:' + type);

		this.errorEvent = new Event(this);
	}

	get onError() {
		return this.errorEvent.subscribable;
	}

	/**
	 * Log and emit an error for this discovery.
	 *
	 * @param error
	 */
	protected logAndEmitError(error: Error, message: string = 'An error occurred:') {
		this.debug(message, error);
		this.errorEvent.emit(error);
	}

	/**
	 * Destroy this instance.
	 */
	public abstract destroy(): Promise<void>;
}
