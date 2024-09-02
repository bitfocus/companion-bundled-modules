export class LRU {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsTUFBTSxPQUFPLEdBQUc7SUFDTCxJQUFJLENBQVM7SUFDdEIsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNWLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztJQUN2QyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7SUFFeEMsWUFBWSxHQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCx3QkFBd0I7SUFDeEIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQWMsR0FBWSxFQUFFLE9BQXFCO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDL0Isc0NBQXNDO1FBQ3RDLElBQUksR0FBVyxDQUFDO1FBQ2hCLFNBQVMsTUFBTTtZQUNiLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUNELElBQUksSUFBSSxFQUFFLENBQUM7WUFDVCxnQkFBZ0I7WUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLENBQUM7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