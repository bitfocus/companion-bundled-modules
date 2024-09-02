interface STMeasurementServer {
    /**
     * Server url.
     */
    url: string;
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
     * Server name.
     */
    name: string;
    /**
     * Server country.
     */
    country: string;
    /**
     * Server country code.
     */
    cc: string;
    /**
     * Server sponsor.
     */
    sponsor: string;
    /**
     * Server ID.
     */
    id: number;
    /**
     * Server preferred.
     */
    preferred: boolean;
    /**
     * Server HTTPS functional.
     */
    https_functional: boolean;
    /**
     * Server host URI.
     */
    host: string;
    /**
     * Server latency.
     */
    latency: number;
    /**
     * Server jitter.
     */
    jitter: number;
}
interface SpeedtestResult {
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
    /**
     * Client ISP rating.
     */
    ispRating: number;
}
interface Server {
    /** Server name. */
    sponsor: string;
    /** Server city. */
    city: string;
    /** Server country. */
    country: string;
    /** Server country code. */
    countryCode: string;
    /** Server distance. */
    distance: number;
}
export { STMeasurementServer, SpeedtestResult };
