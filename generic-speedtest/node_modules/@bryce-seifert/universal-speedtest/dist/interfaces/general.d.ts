import { IncomingHttpHeaders } from "http";
import { RequestOptions } from "urllib/src/Request";
declare enum SpeedUnits {
    Bps = "Bps",
    KBps = "KBps",
    MBps = "MBps",
    GBps = "GBps",
    bps = "bps",
    Kbps = "Kbps",
    Mbps = "Mbps",
    Gbps = "Gbps"
}
interface Options {
    /** Display debug messages. */
    debug?: boolean;
    /** Single request timeout (in seconds). */
    timeout?: number;
    /** Measure the download speed. */
    measureDownload?: boolean;
    /** Measure the upload speed. */
    measureUpload?: boolean;
    /** Complete test without skipping (if timeout reached). */
    wait?: boolean;
    /** The number of URL addresses, ie the number of tests performed. */
    urlCount?: number;
    /** The resulting unit of download speed. */
    downloadUnit?: SpeedUnits;
    /** The resulting unit of upload speed. */
    uploadUnit?: SpeedUnits;
    /** Payload used by Cloudflare test (download). */
    downloadPayload?: number[][];
    /** Payload used by Cloudflare test (upload). */
    uploadPayload?: number[][];
    /** Custom request options to urllib. */
    urllibOptions?: RequestOptions;
}
interface Request {
    /**
     * Request url.
     */
    url: string;
    /**
     * Request headers.
     */
    headers: IncomingHttpHeaders;
    /**
     * Request body.
     */
    body: string;
    /**
     * Request cache override.
     */
    cacheBump: string;
    /**
     * Request timeout.
     */
    timeout: number;
    /**
     * Request total data.
     */
    totalData: number[];
}
interface WorkerData {
    /**
     * Worker request.
     */
    request: Request;
    /**
     * Wait for test completion.
     */
    wait: boolean;
    /**
     * Worker start time.
     */
    startTime: number;
    /**
     * Request timeout.
     */
    timeout: number;
    /**
     * Urllib options.
     */
    urllibOptions: RequestOptions;
}
export { SpeedUnits, Options, Request, WorkerData };
