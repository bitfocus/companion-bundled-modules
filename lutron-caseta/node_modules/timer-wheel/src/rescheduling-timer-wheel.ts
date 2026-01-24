import { TimerWheel } from './timer-wheel';
import { TimerNode } from './timer-node';

/**
 * TimerWheel for easier rescheduling of expiration of items. This wheel only
 * will not schedule the same item for expiration more than once, instead it
 * will reschedule the expiration when a duplicate item is added.
 *
 * ```javascript
 * const dataToSchedule = 'test';
 *
 * // Schedule dataToSchedule to expire in 1000 ms
 * wheel.schedule(dataToSchedule, 1000);
 *
 * // Reschedule so dataToSchedule expires in 5000 ms
 * wheel.schedule(dataToSchedule, 5000);
 * ```
 */
export class ReschedulingTimerWheel<T> extends TimerWheel<T> {
	private readonly items: Map<T, TimerNode<T>>;

	constructor() {
		super();

		this.items = new Map();
	}

	/**
	 * Unschedule an item that has been previously scheduled.
	 *
	 * @param data
	 */
	public unschedule(data: T): boolean {
		const current = this.items.get(data);
		if(current) {
			current.remove();

			this.items.delete(data);

			return true;
		}

		return false;
	}

	protected expireNode(node: TimerNode<T>) {
		this.items.delete(node.data);

		super.expireNode(node);
	}

	protected scheduleNode(node: TimerNode<T>) {
		const current = this.items.get(node.data);
		if(current) {
			// Remove the currently scheduled expiration
			current.remove();
		}

		this.items.set(node.data, node);
		return super.scheduleNode(node);
	}
}
