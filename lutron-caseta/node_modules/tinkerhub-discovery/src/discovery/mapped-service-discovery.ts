import { Service } from '../service';
import { ServiceDiscovery } from './service-discovery';

import { LayeredServiceDiscovery } from './internal';
import { AdvancedMapper } from '../mapper';

/**
 * Information about a mapping. Used to keep track of the actually mapped
 * service and any promise used to map or update a service.
 */
interface MappedService<S> {
	service?: S;

	promise?: Promise<void>;
}

/**
 * Provides mapping of any discovery instance.
 */
export class MappedDiscovery<I extends Service, S extends Service> extends LayeredServiceDiscovery<S, I> {
	private readonly mappedServices: Map<string, MappedService<S>>;
	private readonly mapper: AdvancedMapper<I, S>;

	constructor(parent: ServiceDiscovery<I>, mapper: AdvancedMapper<I, S>) {
		super('mapped', parent);

		this.mappedServices = new Map();
		this.mapper = mapper;
	}

	protected handleParentServiceAvailable(service: I) {
		const current = this.mappedServices.get(service.id);
		if(current) {
			/*
			 * This service is currently registered. As available events are
			 * only emitted after an unavailable event has occurred this is
			 * an invalid state. Log and then skip handling the event.
			 */
			this.debug('Warning: Received available event for already existing service', service.id);
			return;
		}

		const promise = Promise.resolve(this.mapper.create(service))
			.then(mappedService => {
				/*
				 * The service has been mapped, check that the registration is
				 * still valid and in that case register it.
				 */
				const reg = this.mappedServices.get(service.id);
				if(! reg || reg.promise !== promise) return;

				// Reset the promise to allow it to be garbage collected
				reg.promise = undefined;

				if(mappedService) {
					// Mapping returned an instance, make the service available
					reg.service = mappedService;
					this.updateService(mappedService);
				}
			})
			.catch(err => {
				this.logAndEmitError(err, 'An error occurred during mapping of ' + service.id + ':');
			});

		this.mappedServices.set(service.id, {
			promise: promise
		});
	}

	protected handleParentServiceUnavailable(service: I) {
		const current = this.mappedServices.get(service.id);
		if(! current) return;

		// Delete the registration
		this.mappedServices.delete(service.id);

		if(current.service) {
			const mappedId = current.service.id;

			// If the service was available remove it
			this.removeService(mappedId);
		}
	}

	protected handleParentServiceUpdate(service: I, previousService: I) {
		const current = this.mappedServices.get(service.id);
		if(! current) {
			// No current registration, emit a warning and return
			this.debug('Warning: Received an update for a service that was not available:', service.id);
			return;
		}

		if(current.service && this.mapper.update) {
			// Service is available and mapper supports updates
			if(current.promise) {
				// This service is currently being mapped somehow
				this.debug('Update received for', service.id, ' while service was being updated, replacing with new update');
			}

			const mappedId = current.service.id;
			const promise = Promise.resolve(this.mapper.update({
				service: service,
				previousService: previousService,
				previousMappedService: current.service
			}))
				.then(mappedService => {
					/*
					* The service has been updated, check that the registration
					* is still valid and in that case perform the update.
					*/
					const reg = this.mappedServices.get(service.id);
					if(! reg || reg.promise !== promise) return;

					// Reset the promise to allow it to be garbage collected
					reg.promise = undefined;

					if(mappedService && mappedService) {
						// Mapping returned an instance, update or make the service available
						reg.service = mappedService;

						if(mappedService.id !== mappedId) {
							// The identifier has changed, remove the old service
							this.removeService(mappedId);
						}

						this.updateService(mappedService);
					} else {
						// No instance returned, so the service should no longer be available
						reg.service = undefined;
						this.removeService(mappedId);
					}
				})
				.catch(err => {
					this.logAndEmitError(err, 'An error occurred during update of ' + service.id + ':');
				});

			current.promise = promise;
		} else if(! current.service) {
			// No service is available, perform a regular mapping
			const promise = Promise.resolve(this.mapper.create(service))
				.then(mappedService => {
					/*
					* The service has been mapped, check that the registration is
					* still valid and in that case register it.
					*/
					const reg = this.mappedServices.get(service.id);
					if(! reg || reg.promise !== promise) return;

					// Reset the promise to allow it to be garbage collected
					reg.promise = undefined;

					if(mappedService) {
						// Mapping returned an instance, make the service available
						reg.service = mappedService;
						this.updateService(mappedService);
					}
				})
				.catch(err => {
					this.logAndEmitError(err, 'An error occurred during mapping of ' + service.id + ':');
				});

			current.promise = promise;
		}
	}

	protected updateService(service: S): S | null {
		const updated = super.updateService(service);
		if(updated) {
			this.destroyService(updated);
		}
		return updated;
	}

	protected removeService(service: S | string): S | null {
		const removed = super.removeService(service);
		if(removed) {
			this.destroyService(removed);
		}
		return removed;
	}

	private destroyService(service: S) {
		if(! this.mapper.destroy) return;

		// If the mapper supports destruction call it and log any errors
		const id = service.id;
		Promise.resolve(this.mapper.destroy(service))
			.catch(err => {
				this.logAndEmitError(err, 'An error occurred during destruction of mapped service with id ' + id + ':');
			});
	}
}
