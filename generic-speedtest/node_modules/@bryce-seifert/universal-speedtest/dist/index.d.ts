import { CloudflareResult, Options, SpeedtestResult, SpeedUnits } from "./interfaces";
import { convertUnits } from "./utils";
export declare class UniversalSpeedTest {
    private readonly options;
    constructor(options?: Options);
    /**
     * Performs measurements using speedtest.net
     * @returns Promise
     */
    runSpeedtestTest(): Promise<SpeedtestResult>;
    /**
     * Performs measurements using speed.cloudflare.com
     * @returns Promise
     */
    runCloudflareTest(): Promise<CloudflareResult>;
}
export { SpeedUnits, convertUnits };
