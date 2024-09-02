"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPDownloader = void 0;
class HTTPDownloader {
    request;
    /**
     * Constructor for HTTPDownloader class
     * @param request - Pre-created urllib request
     */
    constructor(request) {
        this.request = request;
    }
    /**
     * Runs pre-created urllib request.
     * @returns Promise
     */
    async run() {
        const results = [];
        try {
            const { data } = await this.request;
            let i = 0;
            while (i < data.length) {
                results.push(data.slice(i, i + 10240).length);
                i += 10240;
            }
        }
        catch {
            results.push(0);
        }
        return results;
    }
}
exports.HTTPDownloader = HTTPDownloader;
