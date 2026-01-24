import { SubscriptionHandle } from 'atvik';

import { Service } from '../service';

import { ServiceDiscovery } from './service-discovery';
import { ReleaseableServiceDiscovery } from './releaseable-service-discovery';

import { BasicServiceDiscovery } from './internal';

interface ServiceData<S extends Service> {
	services: S[];
	discoveries: ServiceDiscovery<S>[];
}

interface Instance<S extends Service> {
	discovery: ServiceDiscovery<S>;

	handles: SubscriptionHandle[];
}

/**
 * Merge services from several discoveries.
 */
export class MergedServiceDiscovery<S extends Service>
	extends BasicServiceDiscovery<S>
	implements ReleaseableServiceDiscovery<S>
{
	private instances: Instance<S>[];
	private combinedServiceData: Map<string, ServiceData<S>>;

	constructor(discoveries: ServiceDiscovery<S>[]) {
		super('combined');

		this.combinedServiceData = new Map();

		this.instances = [];
		for(const discovery of discoveries) {
			const handleAvailableOrUpdate = (service: S) => this.handleAvailableOrUpdate(discovery, service);
			const handleUnavailable = (service: S) => this.handleUnavailable(discovery, service);

			// Create the instance and register the events
			const instance = {
				discovery: discovery,

				handles: [
					discovery.onAvailable(handleAvailableOrUpdate),
					discovery.onUpdate(handleAvailableOrUpdate),
					discovery.onUnavailable(handleUnavailable),
					discovery.onError(this.handleError)
				]
			};

			this.instances.push(instance);
		}
	}

	public async release(): Promise<void> {
		if(! this.destroyed) {
			// Release all of the events for every instance
			for(const instance of this.instances) {
				for(const handle of instance.handles) {
					handle.unsubscribe();
				}
			}
		}

		await super.destroy();
	}

	public async destroy(): Promise<void> {
		if(! this.destroyed) {
			// Destroy all of the instances
			for(const instance of this.instances) {
				await instance.discovery.destroy();
			}
		}

		await this.release();
	}

	private handleError(error: Error) {
		super.logAndEmitError(error);
	}

	private handleAvailableOrUpdate(discovery: ServiceDiscovery<S>, service: S) {
		let data = this.combinedServiceData.get(service.id);
		if(data) {
			// A service with this identifier is currently available
			const discoveryIndex = data.discoveries.indexOf(discovery);
			if(discoveryIndex < 0) {
				// Service is new for this discovery
				data.services.push(service);
				data.discoveries.push(discovery);
			} else {
				// Update the current service for the discovery
				data.services[discoveryIndex] = service;
			}

			if(discoveryIndex === 0 || data.discoveries.length === 1) {
				// If the service is either new or was the first service, update it
				this.updateService(service);
			}
		} else {
			// New service, create data and register it
			data = {
				services: [ service ],
				discoveries: [ discovery ]
			};

			this.combinedServiceData.set(service.id, data);

			// Register this as the service
			this.updateService(service);
		}
	}

	private handleUnavailable(discovery: ServiceDiscovery<S>, service: S) {
		const data = this.combinedServiceData.get(service.id);
		if(! data) {
			// No services registered for the id
			return;
		}

		const discoveryIndex = data.discoveries.indexOf(discovery);
		if(discoveryIndex < 0) {
			// Discovery does not actually have a service registered
			return;
		}

		data.discoveries.splice(discoveryIndex, 1);
		data.services.splice(discoveryIndex, 1);

		if(discoveryIndex !== 0) {
			// This was not the first service, no need to update service
			return;
		}

		if(data.discoveries.length === 0) {
			// Remove the service as it is no longer available
			this.removeService(service);
			this.combinedServiceData.delete(service.id);
		} else {
			// Update to the service that is now the first available
			this.updateService(data.services[0]);
		}
	}
}
