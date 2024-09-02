"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const helpers_1 = require("../helpers");
const utils_1 = require("../utils");
const { request, wait, startTime, timeout, urllibOptions } = worker_threads_1.workerData;
if (wait || (((Date.now() - startTime) / 1000) <= timeout)) {
    const thread = new helpers_1.HTTPUploader((0, utils_1.createRequest)(request.url, request.headers, request.body, request.cacheBump, request.timeout, urllibOptions), request.totalData);
    thread.run().then(result => {
        worker_threads_1.parentPort.postMessage(result);
    });
}
else
    worker_threads_1.parentPort.postMessage(0);
