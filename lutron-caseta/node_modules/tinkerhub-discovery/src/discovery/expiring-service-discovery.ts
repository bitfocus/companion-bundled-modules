import { ReschedulingTimerWheel } from 'timer-wheel';

import { BasicServiceDiscovery } from './internal';
import { Service } from '../service';

/**
 * Options available when creating an expiring discovery.
 */
export interface ExpiringDiscoveryOptions {
	/**
	 * The number of milliseconds a service remains discovered without any
	 * updates.
	 */
	expirationTime: number;
}

/**
 * Discovery implementation that supports expiring services after a certain
 * amount of time.
 */
export abstract class ExpiringServiceDiscovery<S extends Service> extends BasicServiceDiscovery<S> {
	public readonly expirationTime: number;

	private readonly expirationWheel: ReschedulingTimerWheel<string>;
	private expirationTimer: any;

	constructor(type: string, options: ExpiringDiscoveryOptions) {
		if(! options) {
			throw new Error('options must be specified');
		}

		if(! options.expirationTime || options.expirationTime <= 0) {
			throw new Error('expirationTime option is required and needs to be a positive number');
		}

		super(type);

		this.expirationTime = options.expirationTime;
		this.expirationWheel = new ReschedulingTimerWheel();
		this.expirationTimer = setInterval(this.removeExpiredServices.bind(this), 1000);
	}

	protected updateService(service: S, expirationTime?: number) {
		const result = super.updateService(service);

		// Schedule or reschedule the expiration of this service
		this.expirationWheel.schedule(service.id, expirationTime || this.expirationTime);

		return result;
	}

	protected removeService(service: S | string) {
		const result = super.removeService(service);

		if(result) {
			// Remove from the expiration wheel
			this.expirationWheel.unschedule(result.id);
		}

		return result;
	}

	protected removeExpiredServices(timePassed?: number) {
		const expiredServices = this.expirationWheel.advance(timePassed);
		for(const serviceId of expiredServices) {
			this.removeService(serviceId);
		}
	}

	public async destroy(): Promise<void> {
		clearInterval(this.expirationTimer);

		this.expirationTimer = undefined;

		await super.destroy();
	}
}
