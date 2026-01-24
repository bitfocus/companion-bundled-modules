import { TimerNode } from './timer-node';
import { TimerHandle } from './handle';

function toPowerOfN(n: number) {
	return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}

const LAYERS = [
	64,
	64,
	32,
	4,
	1
];
const SPANS = [
	toPowerOfN(1000),
	toPowerOfN(60000),
	toPowerOfN(3600000),
	toPowerOfN(86400000),
	LAYERS[3] * toPowerOfN(86400000),
	LAYERS[3] * toPowerOfN(86400000)
];

const SHIFTS = SPANS.slice(0, SPANS.length-1).map(span => 1 + Math.floor(Math.log(span - 1) * Math.LOG2E));

const NO_OP = () => false;

/**
 * A timer wheel for efficiently managing a large amount of time based items.
 *
 * Items can be scheduled to be expired using a certain delay in milliseconds:
 *
 * ```typescript
 * const wheel = new TimerWheel<any>();
 * wheel.schedule('testData', 200);
 * ```
 *
 * The wheel must then be advanced to expire things:
 *
 * ```javascript
 * const expired = wheel.advance();
 * ```
 *
 * This allows users of this class to control when objects are expired. This
 * design allows for implementations of such things as expiring cached items
 * just before a get instead of continuously evaluating.
 *
 * This wheel will schedule items to be expired several times. If you need to
 * reschedule unique items, use `ReschedulingTimerWheel`.
 *
 * Stores items in layers that are circular buffers that represent a time span.
 * This allows for efficiently figuring out what actions need to invoked
 * whenever the wheel is advanced.
 *
 * This implementation takes some extra care to work with Number as they are
 * actually doubles and shifting turns them into 32-bit ints. To represent
 * time we need more than 32-bits so to fully support things this implementation
 * uses a base which is removed from all of the numbers to make them fit into
 * 32-bits.
 *
 * Based on the implementation in the caching library Transitory, which in turn
 * is based on an idea by Ben Manes implemented in Caffeine.
 */
export class TimerWheel<T> {
	private time: number;
	private readonly base: number;
	private readonly layers: TimerNode<T>[][];

	constructor() {
		this.base = Date.now();
		this.layers = LAYERS.map(b => {
			const result = new Array(b);
			for(let i=0; i<b; i++) {
				result[i] = new TimerNode(NO_OP);
			}
			return result;
		});

		this.time = 0;
	}

	/**
	 * Get the local time of this wheel.
	 */
	private get localTime() {
		return Date.now() - this.base;
	}

	private findBucket(node: TimerNode<T>): TimerNode<T> {
		const layers = this.layers;

		const d = node.time - this.time;
		if(d <= 0) return layers[0][0];

		for(let i=0, n=layers.length-1; i<n; i++) {
			if(d >= SPANS[i + 1]) continue;

			const ticks = node.time >>> SHIFTS[i];
			const index = ticks & (layers[i].length - 1);
			return layers[i][index];
		}
		return layers[layers.length - 1][0];
	}

	/**
	 * Advance the wheel, returning all expired items.
	 *
	 * @param localTime
	 *   optional timestamp used for things such as testing. Represents the
	 *   number of milliseconds passed since this wheel was created.
	 */
	public advance(localTime?: number): T[] {
		const previous = this.time;
		const time = localTime || this.localTime;
		this.time = time;

		const layers = this.layers;

		// Holder for expired data
		const expired: T[] = [];

		/*
		 * Go through all of the layers on the wheel, evict things and move
		 * other stuff around.
		 */
		for(let i=0, n=SHIFTS.length; i<n; i++) {
			const previousTicks = previous >>> SHIFTS[i];
			const timeTicks = time >>> SHIFTS[i];

			// At the same tick, no need to keep working down the layers
			if(timeTicks <= previousTicks) break;

			const wheel = layers[i];

			// Figure out the actual buckets to use
			let start;
			let end;
			if(time - previous >= SPANS[i + 1]) {
				start = 0;
				end = wheel.length - 1;
			} else {
				start = previousTicks & (SPANS[i] - 1);
				end = timeTicks & (SPANS[i] - 1);
			}

			// Go through all of the buckets and move stuff around
			for(let j=start; j<=end; j++) {
				const head = wheel[j & (wheel.length - 1)];

				let node = head.next;

				head.previous = head;
				head.next = head;

				while(node !== head) {
					const next = node.next;

					if(node.time <= time) {
						// This node has expired, add it to the queue
						this.expireNode(node);
						expired.push(node.data);
					} else {
						// Find a new bucket to put this node in
						const b = this.findBucket(node);
						node.moveToTail(b);
					}
					node = next;
				}
			}
		}

		return expired;
	}

	/**
	 * Schedule the data to be expired after the given delay.
	 */
	public schedule(data: T, delayInMs: number): TimerHandle {
		const node = new TimerNode(data);
		node.time = this.localTime + delayInMs;

		return this.scheduleNode(node);
	}

	protected scheduleNode(node: TimerNode<T>): TimerHandle {
		const parent = this.findBucket(node);
		node.appendToTail(parent);
		const self = this;
		return {
			remove() {
				self.expireNode(node);
			}
		};
	}

	protected expireNode(node: TimerNode<T>): void {
		node.remove();
	}
}
