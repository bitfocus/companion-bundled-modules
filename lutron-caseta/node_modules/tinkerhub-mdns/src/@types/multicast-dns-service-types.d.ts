declare module 'multicast-dns-service-types' {
	export function parse(input: string): ServiceType;

	export function stringify(type: ServiceType): string;

	export function stringify(name: string, protocol: string, subtypes?: string[]): string;

	export function tcp(name: string, subtypes: string[]): ServiceType;

	export function udp(name: string, subtypes: string[]): ServiceType;

	export interface ServiceType {
		name?: string;

		protocol: 'tcp' | 'udp';

		subtypes?: string[];
	}
}
