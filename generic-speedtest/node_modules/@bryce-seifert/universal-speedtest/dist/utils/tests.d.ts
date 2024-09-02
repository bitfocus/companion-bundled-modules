import { SpeedUnits } from "../interfaces";
/**
 * Converts degrees to radians.
 * @param degrees - number of degrees
 * @returns number
 */
export declare function radians(degrees: number): number;
/**
 * Obtains the distance of the server.
 * @param clientLat - client latitude
 * @param clientLon - client longitude
 * @param serverLat - server latitude
 * @param serverLon - server longitude
 * @private
 * @returns number
 */
export declare function getDistance(clientLat: number, clientLon: number, serverLat: number, serverLon: number): number;
/**
 * Calculates the average value.
 * @param values - an array of values from which to average the value
 */
export declare function avg(values: number[]): number;
/**
 * Calculates the jitter.
 * @param values - an array of values from which to calculate jitter
 */
export declare function jitter(values: number[]): number;
/**
 * Calculates the overall xth percentile.
 * @param tests - all completed tests
 * @param percentile - xth percentile
 */
export declare function getQuartile(tests: number[], percentile: number): number;
/**
 * Returns the sum of all the elements in an array.
 * @param arr - The array to be summed
 * @returns number
 */
export declare function sum(arr: number[]): number;
/**
 * Converts a unit to another unit.
 * @param actualUnit The unit returned by the speed test
 * @param newUnit The new unit to which you want to convert speed
 * @param speed Current network speed
 * @returns number - new speed
 */
export declare function convertUnits(actualUnit: SpeedUnits, newUnit: SpeedUnits, speed: number): number;
