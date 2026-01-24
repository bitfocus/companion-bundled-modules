import { MultiAddressService } from 'tinkerhub-discovery';
import { Protocol } from './protocol';

export interface MDNSService extends MultiAddressService {
	/**
	 * Local name of the service.
	 */
	name: string;

	/**
	 * Type of the service.
	 */
	type: string;

	/**
	 * Protocol of the service.
	 */
	protocol: Protocol;

	/**
	 * Subtypes of the service.
	 */
	subtypes: string[];

	/**
	 * Data associated with this service.
	 */
	data: Map<string, string | boolean>;

	/**
	 * Data associated with this service, but in buffer form.
	 */
	binaryData: Buffer[];
}
