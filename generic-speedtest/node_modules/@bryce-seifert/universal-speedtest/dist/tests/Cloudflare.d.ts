import { CloudflareResult, Options } from "../interfaces";
export declare class Cloudflare {
    private readonly options;
    private readonly result;
    private testConfig;
    private closestServer;
    /**
     * Constructor for Cloudflare class
     * @param options - CloudflareOptions (available options for this test)
     */
    constructor(options: Options);
    /**
     * Performs the entire measurement.
     * @returns Promise
     */
    run(): Promise<CloudflareResult>;
    /**
     * Retrieves client data from speed.cloudflare.com
     * @private
     * @returns Promise
     */
    private getMetaData;
    /**
     * Retrieves a list of speed.cloudflare.com servers.
     * @private
     * @returns Promise
     */
    private getServersList;
    /**
     * Gets client latency.
     * @private
     */
    private getLatency;
    /**
     * Creates urllib request with specific amount of bytes for download.
     * @param bytes - How many bytes to download
     * @private
     */
    private doDownload;
    /**
     * Measures the download speed.
     * @private
     * @returns Promise
     */
    private testDownloadSpeed;
    /**
     * Creates urllib request with specific amount of bytes for upload.
     * @param bytes - How many bytes to download
     * @private
     */
    private doUpload;
    /**
     * Measures the upload speed.
     * @private
     * @returns Promise
     */
    private testUploadSpeed;
}
