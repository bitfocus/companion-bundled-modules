import { Manager } from './manager';
import { MDNS } from './mdns';

export * from './mdns';
export * from './records';
export * from './query';
export * from './response';

const manager = new Manager();

/**
 * Create a MDNS instance.
 */
export function createMDNS(): MDNS {
	return manager.requestHandle();
}
