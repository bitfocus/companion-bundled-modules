"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radians = radians;
exports.getDistance = getDistance;
exports.avg = avg;
exports.jitter = jitter;
exports.getQuartile = getQuartile;
exports.sum = sum;
exports.convertUnits = convertUnits;
const convert_1 = require("convert");
/**
 * Converts degrees to radians.
 * @param degrees - number of degrees
 * @returns number
 */
function radians(degrees) {
    return degrees * Math.PI / 180;
}
/**
 * Obtains the distance of the server.
 * @param clientLat - client latitude
 * @param clientLon - client longitude
 * @param serverLat - server latitude
 * @param serverLon - server longitude
 * @private
 * @returns number
 */
function getDistance(clientLat, clientLon, serverLat, serverLon) {
    const radius = 6371;
    const dLat = radians(serverLat - clientLat);
    const dLon = radians(serverLon - clientLon);
    const a = (Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(radians(clientLat)) *
            Math.cos(radians(serverLat)) * Math.sin(dLon / 2) *
            Math.sin(dLon / 2));
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radius * c;
}
/**
 * Calculates the average value.
 * @param values - an array of values from which to average the value
 */
function avg(values) {
    return (values.reduce((a, b) => a + b) / values.length / 6);
}
/**
 * Calculates the jitter.
 * @param values - an array of values from which to calculate jitter
 */
function jitter(values) {
    const jitters = [];
    for (let i = 0; i < values.length - 1; i++)
        jitters.push(Math.abs(values[i] - values[i + 1]));
    return avg(jitters);
}
/**
 * Calculates the overall xth percentile.
 * @param tests - all completed tests
 * @param percentile - xth percentile
 */
function getQuartile(tests, percentile) {
    tests.sort((a, b) => a - b);
    const pos = (tests.length - 1) * percentile;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (tests[base + 1] !== undefined)
        return tests[base] + rest * (tests[base + 1] - tests[base]);
    return tests[base];
}
/**
 * Returns the sum of all the elements in an array.
 * @param arr - The array to be summed
 * @returns number
 */
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
/**
 * Converts a unit to another unit.
 * @param actualUnit The unit returned by the speed test
 * @param newUnit The new unit to which you want to convert speed
 * @param speed Current network speed
 * @returns number - new speed
 */
function convertUnits(actualUnit, newUnit, speed) {
    try {
        const actualUnitData = actualUnit.slice(0, -2);
        const newUnitData = newUnit.slice(0, -2);
        return (0, convert_1.convert)(speed, actualUnitData).to(newUnitData);
    }
    catch {
        throw new Error("There was an error in converting the units. Did you enter the correct input units?");
    }
}
