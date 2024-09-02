import { HttpClientResponse } from "urllib/src/Response";
export declare class HTTPDownloader {
    private readonly request;
    /**
     * Constructor for HTTPDownloader class
     * @param request - Pre-created urllib request
     */
    constructor(request: Promise<HttpClientResponse>);
    /**
     * Runs pre-created urllib request.
     * @returns Promise
     */
    run(): Promise<number[]>;
}
