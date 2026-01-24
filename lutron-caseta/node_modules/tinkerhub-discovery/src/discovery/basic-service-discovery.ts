import { AbstractServiceDiscovery } from './internal';
import { Service } from '../service';

import isEqual from 'fast-deep-equal';

/**
 * Basic discovery intended for extension. This type of discovery provides
 * functions to update, remove and set services available.
 */
export abstract class BasicServiceDiscovery<S extends Service> extends AbstractServiceDiscovery<S> {
	private serviceMap: Map<string, S>;

	constructor(type: string) {
		super(type);

		this.serviceMap = new Map();
	}

	/**
	 * Get all the available services.
	 */
	get services() {
		return Array.from(this.serviceMap.values());
	}

	public get(id: string): S | null {
		return this.serviceMap.get(id) || null;
	}

	/**
	 * Add or update a service that has been found.
	 *
	 * @param {object} service
	 */
	protected updateService(service: S): S | null {
		if(typeof service !== 'object' || service === null) {
			throw new Error('A service object is required');
		}

		if(! service.id) {
			throw new Error('Services must have an identifier');
		}

		const registration = this.serviceMap.get(service.id);
		if(registration) {
			/*
			 * This service is already available, check if the new registration
			 * has changed.
			 */
			if(isEqual(registration, service)) {
				// Both are the same, do nothing
				return null;
			}

			// The service has been updated, emit an update event
			this.debug('Service with id', service.id, 'has been updated');

			this.serviceMap.set(service.id, service);
			this.updateEvent.emit(service, registration);

			return registration;
		} else {
			// The service is not currently available
			this.debug('Service with id', service.id, 'is now available');

			this.serviceMap.set(service.id, service);
			this.availableEvent.emit(service);

			return null;
		}
	}

	/**
	 * Remove a service that is no longer available.
	 */
	protected removeService(service: S | string): S | null {
		if(typeof service === 'undefined' || service === null) return null;

		const id = typeof service === 'string' ? service : service.id;
		const registration = this.serviceMap.get(id);
		if(registration) {
			/*
			 * Service is currently available, remove it and emit an event.
			 */
			this.debug('Service with id', id, 'is no longer available');

			this.serviceMap.delete(id);
			this.unavailableEvent.emit(registration);

			return registration;
		}

		return null;
	}

	/**
	 * Set the services that should be available.
	 *
	 */
	protected setServices(available: Iterable<S>) {
		const ids = new Set();
		for(const service of available) {
			ids.add(service.id);

			this.updateService(service);
		}

		// Remove all services that are no longer available
		for(const id of this.serviceMap.keys()) {
			if(! ids.has(id)) {
				this.removeService(id);
			}
		}
	}
}
