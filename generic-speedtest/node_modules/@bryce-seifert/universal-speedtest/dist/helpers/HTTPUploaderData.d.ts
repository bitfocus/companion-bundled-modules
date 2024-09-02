export declare class HTTPUploaderData {
    private readonly length;
    private _data;
    private readonly _total;
    /**
     * Constructor for HTTPUploaderData class
     * @param length - length of bytes
     */
    constructor(length: number);
    /**
     * Creates buffer bytes from string.
     */
    preAllocate(): void;
    /**
     * Returns data.
     */
    get data(): string;
    /**
     * Returns total.
     */
    get total(): number[];
    /**
     * Reads chunks.
     * @param n - size
     */
    read(n?: number): string;
}
