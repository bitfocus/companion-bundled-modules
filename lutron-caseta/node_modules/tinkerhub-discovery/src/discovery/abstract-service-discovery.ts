import debug from 'debug';
import { Event } from 'atvik';

import { Service } from '../service';
import { ServicePredicate } from '../predicate';
import { AdvancedMapper, Mapper, isAdvancedMapper } from '../mapper';

import { ServiceDiscovery } from './service-discovery';

import { FilteredServiceDiscovery, MappedDiscovery, MergedServiceDiscovery } from './internal';

/**
 * Abstract service discovery implementation.
 */
export abstract class AbstractServiceDiscovery<S extends Service> implements ServiceDiscovery<S> {
	/**
	 * Debugger that can be used to output debug messages for the discovery.
	 */
	protected readonly debug: debug.Debugger;
	/**
	 * Event used to emit errors for this discovery.
	 */
	private readonly errorEvent: Event<this, [ Error ]>;

	/**
	 * Event used to emit when a service is available.
	 */
	protected readonly availableEvent: Event<this, [ S ]>;
	/**
	 * Event used to emit when a service is no longer available.
	 */
	protected readonly unavailableEvent: Event<this, [ S ]>;
	/**
	 * Event used to emit when a service has been updated.
	 */
	protected readonly updateEvent: Event<this, [ S, S ]>;

	/**
	 * Services that are available from this discovery.
	 */
	public abstract services: S[];

	/**
	 * Get if this discovery has been destroyed.
	 */
	private _destroyed: boolean;
	/**
	 * Event used to emit when this discovery is destroyed.
	 */
	private readonly destroyEvent: Event<this>;

	constructor(type: string) {
		this.debug = debug('th:discovery:' + type);
		this.errorEvent = new Event(this);

		this.availableEvent = new Event(this);
		this.unavailableEvent = new Event(this);
		this.updateEvent = new Event(this);

		this._destroyed = false;
		this.destroyEvent = new Event(this);
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

	get onAvailable() {
		return this.availableEvent.subscribable;
	}

	get onUnavailable() {
		return this.unavailableEvent.subscribable;
	}

	get onUpdate() {
		return this.updateEvent.subscribable;
	}

	public abstract get(id: string): S | null;

	public find(predicate: ServicePredicate<S>): S | null {
		for(const service of this.services) {
			if(predicate(service)) {
				return service;
			}
		}

		return null;
	}

	public findAll(predicate: ServicePredicate<S>): S[] {
		const result = [];
		for(const service of this.services) {
			if(predicate(service)) {
				result.push(service);
			}
		}

		return result;
	}

	public filter(predicate: ServicePredicate<S>): ServiceDiscovery<S> {
		return new FilteredServiceDiscovery(this, predicate);
	}

	public map<O extends Service>(mapper: AdvancedMapper<S, O> | Mapper<S, O>): ServiceDiscovery<O> {
		if(isAdvancedMapper<S, O>(mapper)) {
			// If called using an advanced mapper create directly
			return new MappedDiscovery(this, mapper);
		}

		// Create an advanced mapper from the mapping function
		return new MappedDiscovery(this, {
			create: mapper
		});
	}

	public and<O extends Service>(other: ServiceDiscovery<O>): ServiceDiscovery<S | O> {
		throw new MergedServiceDiscovery<S | O>([ this, other ]);
	}

	public destroy(): Promise<void> {
		if(this.destroyed) return Promise.resolve();

		this._destroyed = true;
		this.destroyEvent.emit();

		return Promise.resolve();
	}

	get destroyed() {
		return this._destroyed;
	}

	get onDestroy() {
		return this.destroyEvent.subscribable;
	}
}
