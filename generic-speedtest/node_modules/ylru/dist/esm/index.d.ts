export interface YLRUOptions {
    maxAge?: number;
}
interface CacheItem {
    value: unknown;
    expired: number;
}
export declare class LRU {
    #private;
    constructor(max: number);
    /** only for unittest */
    get cache(): Map<unknown, CacheItem>;
    /** only for unittest */
    get _cache(): Map<unknown, CacheItem>;
    get<T = unknown>(key: unknown, options?: YLRUOptions): T | undefined;
    set<T = unknown>(key: unknown, value: T, options?: YLRUOptions): void;
    keys<T = unknown>(): T[];
    reset(): void;
    _update(key: any, item: CacheItem): void;
}
export {};
