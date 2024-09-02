"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest = createRequest;
exports.parseXML = parseXML;
const urllib_1 = require("urllib");
const fast_xml_parser_1 = require("fast-xml-parser");
const xml2js_1 = require("xml2js");
/**
 * Creates an urllib request for speedtest.net
 * @param url - URL address
 * @param headers - optional request headers
 * @param body - data to be sent
 * @param cacheBump - cache override bump
 * @param timeout - request timeout
 * @param options - custom request options
 */
function createRequest(url, headers, body, cacheBump = null, timeout = 10, options) {
    headers["user-agent"] = "Mozilla/5.0 (" + process.platform + "; U; " + process.arch + "; en-us) TypeScript/" + process.version + " (KHTML, like Gecko) UniversalSpeedTest/3.0.0";
    headers["cache-control"] = "no-cache";
    return (0, urllib_1.request)(url + ((cacheBump !== null) ? ((url.includes("?") ? "&" : "?") + "x=" + Date.now() + cacheBump) : ""), {
        method: (body !== null) ? "POST" : "GET",
        timeout: timeout * 1000,
        ...options,
        headers: {
            ...headers,
            ...options?.headers
        },
        data: body
    });
}
/**
 * Parses XML string to JSON object.
 * @param xml - XML string to be parsed
 * @param callback - callback to which the JSON object will be returned
 */
function parseXML(xml, callback) {
    if (fast_xml_parser_1.XMLValidator.validate(xml) === true)
        (0, xml2js_1.parseString)(xml, (error, result) => {
            return callback(result);
        });
    else
        throw new Error("Error parsing xml");
}
