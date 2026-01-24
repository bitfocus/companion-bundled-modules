import { Action } from './action';
import { TimerWheel } from './timer-wheel';
import { TimerHandle } from './handle';

/**
 * Variant of TimerWheel that runs actions.
 */
export class ActionTimerWheel {
	private readonly timerWheel: TimerWheel<Action>;

	constructor() {
		this.timerWheel = new TimerWheel();
	}

	/**
	 * Advance the wheel, running all actions whose delay has passed.
	 */
	public advance(): void {
		const expired = this.timerWheel.advance();
		for(const action of expired) {
			action();
		}
	}

	/**
	 * Schedule an action that should be run after a certain delay.
	 *
	 * @param action
	 *   action to run
	 * @param delayInMs
	 *   minimum delay before the action is run
	 */
	public schedule(action: Action, delayInMs: number): TimerHandle {
		return this.timerWheel.schedule(action, delayInMs);
	}
}
