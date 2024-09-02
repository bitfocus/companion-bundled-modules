import { HttpClientResponse } from "urllib/src/Response";
export declare class HTTPUploader {
    private readonly request;
    private readonly total;
    /**
     * Constructor for HTTPUploader class
     * @param request - Pre-created urllib request
     * @param total - Array with total sizes of uploaded data
     */
    constructor(request: Promise<HttpClientResponse>, total: number[]);
    /**
     * Runs pre-created urllib request.
     * @returns Promise
     */
    run(): Promise<number>;
}
