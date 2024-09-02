"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUnits = exports.SpeedUnits = exports.UniversalSpeedTest = void 0;
const interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "SpeedUnits", { enumerable: true, get: function () { return interfaces_1.SpeedUnits; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "convertUnits", { enumerable: true, get: function () { return utils_1.convertUnits; } });
const tests_1 = require("./tests");
class UniversalSpeedTest {
    options;
    constructor(options) {
        this.options = {
            debug: false,
            timeout: 60,
            measureDownload: true,
            measureUpload: false,
            wait: true,
            urlCount: 5,
            downloadUnit: interfaces_1.SpeedUnits.Mbps,
            uploadUnit: interfaces_1.SpeedUnits.Mbps,
            downloadPayload: [
                [101000, 10],
                [1001000, 8],
                [10001000, 6],
                [25001000, 4],
                [100001000, 1]
            ],
            uploadPayload: [
                [11000, 10],
                [101000, 10],
                [1001000, 8]
            ],
            ...options
        };
    }
    /**
     * Performs measurements using speedtest.net
     * @returns Promise
     */
    runSpeedtestTest() {
        const speedTest = new tests_1.Speedtest(this.options);
        return speedTest.run();
    }
    /**
     * Performs measurements using speed.cloudflare.com
     * @returns Promise
     */
    runCloudflareTest() {
        const speedTest = new tests_1.Cloudflare(this.options);
        return speedTest.run();
    }
}
exports.UniversalSpeedTest = UniversalSpeedTest;
