import { IncomingHttpHeaders } from "http";
import { RequestOptions } from "urllib/src/Request";
import { HttpClientResponse } from "urllib/src/Response";
/**
 * Creates an urllib request for speedtest.net
 * @param url - URL address
 * @param headers - optional request headers
 * @param body - data to be sent
 * @param cacheBump - cache override bump
 * @param timeout - request timeout
 * @param options - custom request options
 */
export declare function createRequest(url: string, headers: IncomingHttpHeaders, body: string, cacheBump: string, timeout: number, options: RequestOptions): Promise<HttpClientResponse>;
/**
 * Parses XML string to JSON object.
 * @param xml - XML string to be parsed
 * @param callback - callback to which the JSON object will be returned
 */
export declare function parseXML(xml: string, callback: any): void;
