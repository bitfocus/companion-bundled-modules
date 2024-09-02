"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPUploaderData = void 0;
class HTTPUploaderData {
    length;
    _data;
    _total;
    /**
     * Constructor for HTTPUploaderData class
     * @param length - length of bytes
     */
    constructor(length) {
        this.length = length;
        this._data = null;
        this._total = [0];
    }
    /**
     * Creates buffer bytes from string.
     */
    preAllocate() {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const multiplier = Number((Math.round(Number(this.length.toFixed()) / 36.0)).toFixed());
        const repeatedChars = chars.repeat(multiplier);
        this._data = "content1=" + Buffer.from(repeatedChars.slice(0, Number(this.length.toFixed()) - 9));
    }
    /**
     * Returns data.
     */
    get data() {
        return this._data;
    }
    /**
     * Returns total.
     */
    get total() {
        return this._total;
    }
    /**
     * Reads chunks.
     * @param n - size
     */
    read(n = 10240) {
        const chunk = this.data.slice(0, n);
        this._total.push(chunk.length);
        return chunk;
    }
}
exports.HTTPUploaderData = HTTPUploaderData;
