"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPUploader = void 0;
const utils_1 = require("../utils");
class HTTPUploader {
    request;
    total;
    /**
     * Constructor for HTTPUploader class
     * @param request - Pre-created urllib request
     * @param total - Array with total sizes of uploaded data
     */
    constructor(request, total) {
        this.request = request;
        this.total = total;
    }
    /**
     * Runs pre-created urllib request.
     * @returns Promise
     */
    async run() {
        try {
            await this.request;
            return (0, utils_1.sum)(this.total);
        }
        catch {
            return 0;
        }
    }
}
exports.HTTPUploader = HTTPUploader;
