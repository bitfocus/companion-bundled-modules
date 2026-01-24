import { MDNSQuery } from '../query';
import { MDNSResponse } from '../response';
import { Record } from '../records';

/**
 * Options passed to a transport when created.
 */
export interface TransportOptions {
	/**
	 * Map a record, used by the manager to either cache or return a cached
	 * record. Transports should call this when creating responses but not
	 * when creating queries.
	 */
	mapRecord(record: Record): Record;

	/**
	 * Function called whenever a query is received.
	 */
	onQuery: (query: MDNSQuery) => void;

	/**
	 * Function called whenever a response is received.
	 */
	onResponse: (response: MDNSResponse) => void;

	/**
	 * Function called whenever an error occurs for the transport.
	 */
	onError: (error: Error) => void;
}

/**
 * Abstract implementation of a transport. Transports are used to isolate the
 * actual Multicast DNS code. It also provides a way to make things testable
 * by replacing the transport implementation.
 */
export abstract class AbstractTransport {
	protected readonly mapRecord: (record: Record) => Record;
	protected readonly onQuery: (query: MDNSQuery) => void;
	protected readonly onResponse: (response: MDNSResponse) => void;
	protected readonly onError: (error: Error) => void;

	constructor(options: TransportOptions) {
		this.mapRecord = options.mapRecord;
		this.onQuery = options.onQuery;
		this.onResponse = options.onResponse;
		this.onError = options.onError;
	}

	/**
	 * Send a query over the network.
	 *
	 * @param query
	 */
	public abstract query(query: MDNSQuery): Promise<void>;

	/**
	 * Send a response over the network.
	 *
	 * @param response
	 */
	public abstract respond(response: MDNSResponse): Promise<void>;

	/**
	 * Destroy this transport.
	 */
	public abstract destroy(): void;
}
