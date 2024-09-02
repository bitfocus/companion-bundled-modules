import { Options, SpeedtestResult } from "../interfaces";
export declare class Speedtest {
    private readonly options;
    private readonly result;
    private testConfig;
    private readonly uploadSizes;
    private servers;
    private fastestServer;
    /**
     * Constructor for Speedtest class
     * @param options - UniversalSpeedTest options object
     */
    constructor(options: Options);
    /**
     * Performs the entire measurement.
     * @returns Promise
     */
    run(): Promise<SpeedtestResult>;
    /**
     * Retrieves configuration for speedtest.net test.
     * @private
     * @returns Promise
     */
    private getConfig;
    /**
     * Retrieves a list of speedtest.net servers.
     * @private
     * @returns Promise
     */
    private getServersList;
    /**
     * Returns the server with the shortest average response time.
     * @private
     * @returns Promise
     */
    private getBestServer;
    private readonly delay;
    /**
     * Measures the download speed.
     * @private
     * @returns Promise
     */
    private testDownloadSpeed;
    /**
     * Measures the upload speed.
     * @private
     * @returns Promise
     */
    private testUploadSpeed;
}
