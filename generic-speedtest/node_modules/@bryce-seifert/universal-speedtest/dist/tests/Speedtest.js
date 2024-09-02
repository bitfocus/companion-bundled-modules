"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speedtest = void 0;
const path = __importStar(require("path"));
const worker_threads_1 = require("worker_threads");
const helpers_1 = require("../helpers");
const interfaces_1 = require("../interfaces");
const utils_1 = require("../utils");
class Speedtest {
    options;
    result = {};
    testConfig;
    uploadSizes = [32768, 65536, 131072, 262144, 524288, 1048576, 7340032];
    servers;
    fastestServer;
    /**
     * Constructor for Speedtest class
     * @param options - UniversalSpeedTest options object
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * Performs the entire measurement.
     * @returns Promise
     */
    async run() {
        const start = Date.now();
        // Get test config
        await this.getConfig();
        this.result.client = {
            ip: this.testConfig.client.ip,
            lat: this.testConfig.client.lat,
            lon: this.testConfig.client.lon,
            isp: this.testConfig.client.isp,
            ispRating: this.testConfig.client.isprating
        };
        if (this.options.debug) {
            console.debug("speedtest.net config was obtained");
            console.debug(`Client - ${this.result.client.isp} (${this.result.client.ip})`);
        }
        // Get test server and fastest server
        await this.getServersList();
        await this.getBestServer();
        this.result.ping = this.fastestServer.latency;
        this.result.jitter = Number(this.fastestServer.jitter.toFixed(3));
        this.result.server = {
            sponsor: this.fastestServer.sponsor,
            city: this.fastestServer.name,
            country: this.fastestServer.country,
            countryCode: this.fastestServer.cc,
            distance: Number(this.fastestServer.distance.toFixed(2))
        };
        if (this.options.debug)
            console.debug(`Server: ${this.fastestServer.sponsor} (${this.fastestServer.name} - ${this.fastestServer.country}), ${this.fastestServer.distance.toFixed(2)} km, ${this.fastestServer.latency.toFixed(3)} ms`);
        // Test download speed
        if (this.options.measureDownload) {
            const downloadSpeed = await this.testDownloadSpeed();
            this.result.downloadSpeed = downloadSpeed;
            if (this.options.debug)
                console.debug(`Download: ${downloadSpeed} ${this.options.downloadUnit}`);
        }
        // Test upload speed
        if (this.options.measureUpload) {
            const uploadSpeed = await this.testUploadSpeed();
            this.result.uploadSpeed = uploadSpeed;
            if (this.options.debug)
                console.debug(`Upload: ${uploadSpeed} ${this.options.uploadUnit}`);
        }
        const end = Date.now();
        if (this.options.debug)
            console.debug(`Test performed in ${((end - start) / 1000).toFixed(1)} seconds`);
        this.result.totalTime = Number(((end - start) / 1000).toFixed(1));
        return this.result;
    }
    /**
     * Retrieves configuration for speedtest.net test.
     * @private
     * @returns Promise
     */
    async getConfig() {
        try {
            const { data } = await (0, utils_1.createRequest)("https://www.speedtest.net/speedtest-config.php", {}, null, null, this.options.timeout, this.options.urllibOptions);
            (0, utils_1.parseXML)(data.toString(), (response) => {
                const client = response.settings.client[0].$;
                const serverConfig = response.settings["server-config"][0].$;
                const download = response.settings.download[0].$;
                const upload = response.settings.upload[0].$;
                const uploadRatio = Number(upload.ratio);
                const uploadMax = Number(upload.maxchunkcount);
                const sizes = {
                    "upload": this.uploadSizes.slice(uploadRatio - 1, this.uploadSizes.length),
                    "download": [350, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000]
                };
                const uploadSizeCount = sizes["upload"].length;
                const uploadCount = Math.ceil(uploadMax / uploadSizeCount);
                const counts = {
                    "upload": uploadCount,
                    "download": Number(download.threadsperurl)
                };
                const threads = {
                    "upload": Number(upload.threads),
                    "download": Number(serverConfig.threadcount) * 2
                };
                const length = {
                    "upload": Number(upload.testlength),
                    "download": Number(download.testlength)
                };
                this.testConfig = {
                    "client": client,
                    "sizes": sizes,
                    "counts": counts,
                    "threads": threads,
                    "length": length,
                    "uploadMax": uploadCount * uploadSizeCount
                };
            });
        }
        catch {
            throw new Error("An error occurred while retrieving test configuration from speedtest.net.");
        }
    }
    /**
     * Retrieves a list of speedtest.net servers.
     * @private
     * @returns Promise
     */
    async getServersList(limit = 5) {
        const serversUrl = `https://www.speedtest.net/api/js/servers?engine=js&limit=${limit}`;
        try {
            const { data } = await (0, utils_1.createRequest)(serversUrl, {}, null, null, this.options.timeout, this.options.urllibOptions);
            const servers = JSON.parse(data);
            servers.forEach(server => server.distance = server.distance * 1.609344);
            this.servers = servers;
        }
        catch {
            throw new Error("An error occurred while retrieving the server list from speedtest.net.");
        }
    }
    /**
     * Returns the server with the shortest average response time.
     * @private
     * @returns Promise
     */
    async getBestServer() {
        try {
            for (const server of this.servers) {
                const totalTimes = [];
                const url = `${path.dirname(server.url)}/latency.txt`;
                for (let i = 0; i < 3; i++) {
                    const start = Date.now();
                    const { statusCode, data } = await (0, utils_1.createRequest)(url, {}, null, null, this.options.timeout, this.options.urllibOptions);
                    const total = (Date.now() - start);
                    if (statusCode === 200 && data.toString().trim() === "test=test")
                        totalTimes.push(total / 1000);
                    else
                        totalTimes.push(3600);
                }
                server.latency = Number((((0, utils_1.sum)(totalTimes) / 6) * 1000.0).toFixed(3));
                server.jitter = (0, utils_1.jitter)(totalTimes) * 1000;
            }
            this.fastestServer = this.servers.sort((serverA, serverB) => serverA.latency - serverB.latency).at(0);
        }
        catch {
            throw new Error("An error occurred while measuring the latency to select the best server.");
        }
    }
    delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    /**
     * Measures the download speed.
     * @private
     * @returns Promise
     */
    async testDownloadSpeed() {
        const urls = [];
        try {
            for (const size of this.testConfig.sizes.download) {
                for (let i = 0; i < this.testConfig.counts.download; i++)
                    urls.push(path.dirname(this.fastestServer.url) + "/random" + size + "x" + size + ".jpg");
            }
            const requestCount = urls.length;
            const requests = [];
            urls.forEach((url, i) => {
                requests.push({
                    url: url,
                    headers: {},
                    body: null,
                    cacheBump: i.toString(),
                    timeout: (this.options.wait) ? this.options.timeout : this.testConfig.length.download,
                    totalData: null
                });
            });
            const maxThreads = this.testConfig.threads.download;
            const inFlight = { "threads": 0 };
            const finished = [];
            const start = Date.now();
            for (const request of requests) {
                while (inFlight.threads >= maxThreads)
                    await this.delay(0.001);
                const worker = new worker_threads_1.Worker(__dirname + "/../thread_workers/download_worker.js", {
                    workerData: {
                        path: "./download_worker.ts",
                        request,
                        wait: this.options.wait,
                        startTime: start,
                        timeout: this.testConfig.length.download,
                        urllibOptions: this.options.urllibOptions
                    }
                });
                worker.on("message", (result) => {
                    inFlight.threads--;
                    finished.push((0, utils_1.sum)(result));
                });
                inFlight.threads++;
            }
            while (finished.length < requestCount)
                await this.delay(0.001);
            const end = Date.now();
            const bytesReceived = (0, utils_1.sum)(finished);
            let download = ((bytesReceived / ((end - start) / 1000)) * 8.0);
            if (download > 100000)
                this.testConfig.threads.upload = 8;
            download = Number((download / 1000.0 / 1000.0).toFixed(2));
            if (this.options.downloadUnit !== interfaces_1.SpeedUnits.Mbps)
                return (0, utils_1.convertUnits)(interfaces_1.SpeedUnits.Mbps, this.options.downloadUnit, download);
            else
                return download;
        }
        catch {
            throw new Error("An error occurred while measuring the download speed.");
        }
    }
    /**
     * Measures the upload speed.
     * @private
     * @returns Promise
     */
    async testUploadSpeed() {
        const sizes = [];
        try {
            for (const size of this.testConfig.sizes.upload) {
                for (let i = 0; i < this.testConfig.counts.upload; i++)
                    sizes.push(size);
            }
            const requestCount = this.testConfig.uploadMax;
            const requests = [];
            sizes.slice(0, requestCount).forEach((size, i) => {
                const headers = {};
                headers["content-length"] = size;
                const data = new helpers_1.HTTPUploaderData(size);
                data.preAllocate();
                requests.push({
                    url: this.fastestServer.url,
                    headers: headers,
                    body: data.read(size),
                    cacheBump: i.toString(),
                    timeout: (this.options.wait) ? this.options.timeout : this.testConfig.length.upload,
                    totalData: data.total
                });
            });
            const maxThreads = this.testConfig.threads.upload;
            const inFlight = { "threads": 0 };
            const finished = [];
            const start = Date.now();
            for (const request of requests) {
                while (inFlight.threads >= maxThreads)
                    await this.delay(0.001);
                const worker = new worker_threads_1.Worker(__dirname + "/../thread_workers/upload_worker.js", {
                    workerData: {
                        path: "./upload_worker.ts",
                        request,
                        wait: this.options.wait,
                        startTime: start,
                        timeout: this.testConfig.length.upload,
                        urllibOptions: this.options.urllibOptions
                    }
                });
                worker.on("message", (result) => {
                    inFlight.threads--;
                    finished.push(result);
                });
                inFlight.threads++;
            }
            while (finished.length < requestCount)
                await this.delay(0.001);
            const end = Date.now();
            const bytesSent = (0, utils_1.sum)(finished);
            const upload = Number((((bytesSent / ((end - start) / 1000)) * 8.0) / 1000.0 / 1000.0).toFixed(2));
            if (this.options.uploadUnit !== interfaces_1.SpeedUnits.Mbps)
                return (0, utils_1.convertUnits)(interfaces_1.SpeedUnits.Mbps, this.options.uploadUnit, upload);
            else
                return upload;
        }
        catch {
            throw new Error("An error occurred while measuring the upload speed.");
        }
    }
}
exports.Speedtest = Speedtest;
