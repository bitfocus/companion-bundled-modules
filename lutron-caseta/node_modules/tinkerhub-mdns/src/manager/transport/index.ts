import { TransportOptions, AbstractTransport } from './abstract-transport';
import { MulticastDNSTransport } from './multicast-dns-transport';

export * from './abstract-transport';

type Factory = (options: TransportOptions) => AbstractTransport;
let transportFactory: Factory = options => new MulticastDNSTransport(options);

export function createTransport(options: TransportOptions): AbstractTransport {
	return transportFactory(options);
}
