import { BasicServiceDiscovery } from './internal';
import { Service } from '../service';

/**
 * Discovery implementation for manually adding or removing available services.
 */
export class ManualDiscovery<S extends Service> extends BasicServiceDiscovery<S> {

	constructor(type='manual') {
		super(type);
	}

	/**
	 * Add a service that should be available.
	 *
	 * @param service
	 */
	public add(service: S) {
		return this.updateService(service);
	}

	/**
	 * Remove a service so that it is no longer available.
	 *
	 * @param service
	 */
	public remove(service: S | string) {
		return this.removeService(service);
	}

	/**
	 *
	 * @param services
	 */
	public set(services: Iterable<S>) {
		return this.setServices(services);
	}
}
