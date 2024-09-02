interface CFTestConfig {
    /**
     * Test hostname.
     */
    hostname: string;
    /**
     * Client IP address.
     */
    clientIp: string;
    /**
     * Server HTTP protocol.
     */
    httpProtocol: string;
    /**
     * Server/ISP ASN.
     */
    asn: number;
    /**
     * ISP name.
     */
    asOrganization: string;
    /**
     * Server location code.
     */
    colo: string;
    /**
     * ISP country code.
     */
    country: string;
    /**
     * ISP city.
     */
    city: string;
    /**
     * ISP region.
     */
    region: string;
    /**
     * ISP postal code.
     */
    postalCode: string;
    /**
     * Client latitude.
     */
    latitude: number;
    /**
     * Client longitude.
     */
    longitude: number;
}
interface CFMeasurementServer {
    /**
     * Server location code (IATA).
     */
    iata: string;
    /**
     * Server latitude.
     */
    lat: number;
    /**
     * Server longitude.
     */
    lon: number;
    /**
     * Server distance (km).
     */
    distance: number;
    /**
     * Server cca2.
     */
    cca2: string;
    /**
     * Server region.
     */
    region: string;
    /**
     * Server city.
     */
    city: string;
    /**
     * Server latency.
     */
    latency: number;
    /**
     * Server jitter.
     */
    jitter: number;
}
interface CloudflareResult {
    /** Client information. */
    client: Client;
    /** Network ping. */
    ping: number;
    /** Network jitter. */
    jitter: number;
    /** Network download speed. */
    downloadSpeed?: number;
    /** Network upload speed. */
    uploadSpeed?: number;
    /** Server information. */
    server: Server;
    /** The time the test lasted in seconds. */
    totalTime: number;
}
interface Client {
    /** Client IP address. */
    ip: string;
    /** Client city. */
    city: string;
    /** Client country code. */
    countryCode: string;
    /**
     * Client latitude.
     */
    lat: number;
    /**
     * Client longitude.
     */
    lon: number;
    /** Client ISP. */
    isp: string;
}
interface Server {
    /** Server city. */
    city: string;
    /** Server country. */
    region: string;
    /** Server country code. */
    countryCode: string;
    /** Server distance. */
    distance: number;
}
export { CFTestConfig, CFMeasurementServer, CloudflareResult };
