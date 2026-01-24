
declare module 'multicast-dns' {
	import { AddressInfo } from 'dgram';

	export default function create(options?: MulticastDNSOptions): MulticastDNS;

	export interface MulticastDNSOptions {
		multicast?: boolean;
		interface?: string;
		port?: number;
		ip?: string;
		ttl?: number;
		loopback?: boolean;
		reuseAddr?: boolean;
	}

	export interface MulticastDNS {
		on(event: 'error', listener: (err: Error) => void): void;
		on(event: 'query', listener: (packet: Packet, rinfo: AddressInfo) => void): void;
		on(event: 'response', listener: (packet: Packet, rinfo: AddressInfo) => void): void;

		query(packet: Packet): void;
		query(packet: Packet, rinfo: AddressInfo): void;
		query(packet: Packet, rinfo: AddressInfo, callback: (err: Error) => void): void;
		query(packet: Packet, callback: (err: Error) => void): void;

		respond(packet: Packet): void;
		respond(packet: Packet, rinfo: AddressInfo): void;
		respond(packet: Packet, rinfo: AddressInfo, callback: (err: Error) => void): void;
		respond(packet: Packet, callback: (err: Error) => void): void;

		destroy(): void;
	}

	export interface Packet {
		type?: 'query' | 'response';
		questions?: Question[];
		answers?: Answer[];
		additionals?: Answer[];
		authorities?: Answer[];
	}

	export interface Question {
		name: string;
		type: string;
		class?: string;
	}

	export interface Answer {
		name: string;
		type: string;
		class: string;
		ttl?: number;
		flush: boolean;
		data: any;
	}
}
