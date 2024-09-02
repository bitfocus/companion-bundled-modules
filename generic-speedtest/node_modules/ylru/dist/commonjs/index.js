"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRU = void 0;
class LRU {
    #max;
    #size = 0;
    #cache = new Map();
    #_cache = new Map();
    constructor(max) {
        this.#max = max;
    }
    /** only for unittest */
    get cache() {
        return this.#cache;
    }
    /** only for unittest */
    get _cache() {
        return this.#_cache;
    }
    get(key, options) {
        let item = this.#cache.get(key);
        const maxAge = options?.maxAge;
        // only call Date.now() when necessary
        let now;
        function getNow() {
            now = now || Date.now();
            return now;
        }
        if (item) {
            // check expired
            if (item.expired && getNow() > item.expired) {
                item.expired = 0;
                item.value = undefined;
            }
            else {
                // update expired in get
                if (maxAge !== undefined) {
                    const expired = maxAge ? getNow() + maxAge : 0;
                    item.expired = expired;
                }
            }
            return item.value;
        }
        // try to read from _cache
        item = this.#_cache.get(key);
        if (item) {
            // check expired
            if (item.expired && getNow() > item.expired) {
                item.expired = 0;
                item.value = undefined;
            }
            else {
                // not expired, save to cache
                this._update(key, item);
                // update expired in get
                if (maxAge !== undefined) {
                    const expired = maxAge ? getNow() + maxAge : 0;
                    item.expired = expired;
                }
            }
            return item.value;
        }
    }
    set(key, value, options) {
        const maxAge = options?.maxAge;
        const expired = maxAge ? Date.now() + maxAge : 0;
        let item = this.#cache.get(key);
        if (item) {
            item.expired = expired;
            item.value = value;
        }
        else {
            item = {
                value,
                expired,
            };
            this._update(key, item);
        }
    }
    keys() {
        const cacheKeys = new Set();
        const now = Date.now();
        for (const [key, item] of this.#cache.entries()) {
            checkEntry(key, item);
        }
        for (const [key, item] of this.#_cache.entries()) {
            checkEntry(key, item);
        }
        function checkEntry(key, item) {
            if (item.value && (!item.expired) || item.expired >= now) {
                cacheKeys.add(key);
            }
        }
        return Array.from(cacheKeys);
    }
    reset() {
        this.#size = 0;
        this.#cache.clear();
        this.#_cache.clear();
    }
    _update(key, item) {
        this.#cache.set(key, item);
        this.#size++;
        if (this.#size >= this.#max) {
            this.#size = 0;
            this.#_cache = this.#cache;
            this.#cache = new Map();
        }
    }
}
exports.LRU = LRU;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBU0EsTUFBYSxHQUFHO0lBQ0wsSUFBSSxDQUFTO0lBQ3RCLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7SUFDdkMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFzQixDQUFDO0lBRXhDLFlBQVksR0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0Qsd0JBQXdCO0lBQ3hCLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsR0FBRyxDQUFjLEdBQVksRUFBRSxPQUFxQjtRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQy9CLHNDQUFzQztRQUN0QyxJQUFJLEdBQVcsQ0FBQztRQUNoQixTQUFTLE1BQU07WUFDYixHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN4QixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDRCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsZ0JBQWdCO1lBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixDQUFDO2lC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