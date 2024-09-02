"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloudflare = void 0;
const interfaces_1 = require("../interfaces");
const utils_1 = require("../utils");
class Cloudflare {
    options;
    result = {};
    testConfig;
    closestServer;
    /**
     * Constructor for Cloudflare class
     * @param options - CloudflareOptions (available options for this test)
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
        await this.getMetaData();
        this.result.client = {
            ip: this.testConfig.clientIp,
            isp: this.testConfig.asOrganization,
            city: this.testConfig.city,
            lat: this.testConfig.latitude,
            lon: this.testConfig.longitude,
            countryCode: this.testConfig.country
        };
        if (this.options.debug) {
            console.debug("speed.cloudflare.com data were obtained");
            console.debug(`Client - ${this.result.client.ip} (${this.result.client.countryCode})`);
        }
        // Get test server and fastest server
        await this.getServersList();
        this.result.server = {
            city: this.closestServer.city,
            region: this.closestServer.region,
            countryCode: this.closestServer.cca2,
            distance: Number(this.closestServer.distance.toFixed(2))
        };
        const latency = await this.getLatency();
        this.result.ping = latency[0];
        this.result.jitter = latency[1];
        if (this.options.debug)
            console.debug(`Server: ${this.closestServer.iata} (${this.closestServer.city} - ${this.closestServer.region}), ${this.closestServer.distance.toFixed(2)} km, ${this.result.ping} ms`);
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
     * Retrieves client data from speed.cloudflare.com
     * @private
     * @returns Promise
     */
    async getMetaData() {
        try {
            const { data } = await (0, utils_1.createRequest)("https://speed.cloudflare.com/meta", {}, null, null, this.options.timeout, this.options.urllibOptions);
            this.testConfig = JSON.parse(data);
        }
        catch {
            throw new Error("An error occurred while retrieving metadata from the Cloudflare measuring station.");
        }
    }
    /**
     * Retrieves a list of speed.cloudflare.com servers.
     * @private
     * @returns Promise
     */
    async getServersList() {
        try {
            const { data } = await (0, utils_1.createRequest)("https://speed.cloudflare.com/locations", {}, null, null, this.options.timeout, this.options.urllibOptions);
            const servers = JSON.parse(data);
            servers.forEach((server) => server.distance = (0, utils_1.getDistance)(this.testConfig.latitude, this.testConfig.longitude, server.lat, server.lon));
            this.closestServer = servers.sort((serverA, serverB) => serverA.distance - serverB.distance).at(0);
        }
        catch {
            throw new Error("An error occurred while retrieving the server list from the Cloudflare metering station.");
        }
    }
    /**
     * Gets client latency.
     * @private
     */
    async getLatency() {
        try {
            const times = [];
            for (let i = 0; i < 20; i++) {
                const start = Date.now();
                const { statusCode } = await this.doDownload(1000);
                const total = (Date.now() - start);
                if (statusCode === 200)
                    times.push(total);
            }
            return [Number((0, utils_1.avg)(times).toFixed(3)), Number((0, utils_1.jitter)(times).toFixed(3))];
        }
        catch {
            throw new Error("An error occurred while measuring latency.");
        }
    }
    /**
     * Creates urllib request with specific amount of bytes for download.
     * @param bytes - How many bytes to download
     * @private
     */
    doDownload(bytes) {
        return (0, utils_1.createRequest)(`https://speed.cloudflare.com/__down?bytes=${bytes}`, {}, null, null, this.options.timeout, this.options.urllibOptions);
    }
    /**
     * Measures the download speed.
     * @private
     * @returns Promise
     */
    async testDownloadSpeed() {
        const completedTests = [];
        try {
            for (const test of this.options.downloadPayload) {
                const singleTest = [];
                for (let i = 0; i < test[1]; i++) {
                    try {
                        const start = Date.now();
                        await this.doDownload(test[0]);
                        const total = (Date.now() - start);
                        singleTest.push((test[0] / (total / 1000)) * 8.0 / 1000 / 1000);
                    }
                    catch {
                        // do nothing
                    }
                }
                completedTests.push(...singleTest);
            }
            const download = Number((0, utils_1.getQuartile)(completedTests, 0.9).toFixed(2));
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
     * Creates urllib request with specific amount of bytes for upload.
     * @param bytes - How many bytes to download
     * @private
     */
    doUpload(bytes) {
        const bytesData = "0".repeat(bytes);
        const headers = {};
        headers["content-length"] = `${Buffer.byteLength(bytesData)}`;
        return (0, utils_1.createRequest)(`https://speed.cloudflare.com/__up`, headers, bytesData, null, this.options.timeout, this.options.urllibOptions);
    }
    /**
     * Measures the upload speed.
     * @private
     * @returns Promise
     */
    async testUploadSpeed() {
        const completedTests = [];
        try {
            for (const test of this.options.uploadPayload) {
                const singleTest = [];
                for (let i = 0; i < test[1]; i++) {
                    try {
                        const { headers } = await this.doUpload(test[0]);
                        const duration = parseFloat(headers["server-timing"][0].slice(22));
                        singleTest.push((test[0] * 8) / (duration / 1000) / 1e6);
                    }
                    catch {
                        // do nothing
                    }
                }
                completedTests.push(...singleTest);
            }
            const upload = Number((0, utils_1.getQuartile)(completedTests, 0.9).toFixed(2));
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
exports.Cloudflare = Cloudflare;
