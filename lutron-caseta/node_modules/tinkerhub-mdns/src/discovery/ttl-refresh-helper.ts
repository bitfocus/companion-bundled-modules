import { ReschedulingTimerWheel } from 'timer-wheel';
import { Record } from '../manager';

/**
 * Helper for keeping track of when to send out a refresh query based on TTLs
 * of records.
 */
export class TTLRefreshHelper {
	private readonly query: () => void;

	private readonly records: ReschedulingTimerWheel<Record>;
	private readonly listener: (this: Record) => void;
	private readonly interval: any;

	constructor(query: () => void) {
		this.query = query;

		this.records = new ReschedulingTimerWheel();
		this.interval = setInterval(() => this.check(), 1000);

		const self = this;
		this.listener = function(this: Record) {
			self.scheduleRefresh(this);
		};
	}

	public destroy() {
		clearInterval(this.interval);
	}

	public add(record: Record) {
		record.onRefresh.unsubscribe(this.listener);
		record.onRefresh.subscribe(this.listener);

		this.scheduleRefresh(record);
	}

	public remove(record: Record) {
		record.onRefresh.unsubscribe(this.listener);

		this.records.unschedule(record);
	}

	private check() {
		const expired = this.records.advance();
		const now = Date.now();
		for(const record of expired) {
			if(! record.ttl) continue;

			// Calculate how much of the TTL has been used  up
			const passedTTL = (now - record.lastRefresh) / 1000;
			const remainingTTL = record.ttl - passedTTL;
			if(remainingTTL <= 0) continue;

			// Calculate the ratio and increase it, skip scheduling too close to expiration
			const ratio = (record.ttl - remainingTTL) / record.ttl;
			const nextRatio = ratio + 0.05;
			if(nextRatio > 0.97) return;

			// Schedule the record again
			const delay = nextRatio * record.ttl - passedTTL;
			this.records.schedule(record, delay * 1000);
		}

		if(expired.length > 0) {
			this.query();
		}
	}

	private scheduleRefresh(record: Record) {
		if(! record.ttl) return;

		// Schedule the first TTL check at 80% + a random delay
		const ratio = 0.8 + Math.random() * 0.02;
		this.records.schedule(record, record.ttl * ratio * 1000);
	}
}
