import { SubscriptionHandle } from './handle';
import { Listener } from './listener';
import { Subscribable } from './subscribable';

/**
 * An event that fires its listeners in a synchronous fashion.
 */
export class Event<Parent, Args extends any[] = []> {
	/**
	 * Public Subscribable that can safely be shared with consumers that should
	 * be able to listen for events.
	 */
	public readonly subscribable: Subscribable<Parent, Args>;

	/**
	 * Parent of this handler, used to apply the correct this to event listeners.
	 */
	private readonly parent: Parent;
	/**
	 * Listener(s) that have been attached to this event handler.
	 */
	private registeredListeners?: Listener<Parent, Args> | Listener<Parent, Args>[];

	/**
	 * Monitor that will be notified on any listener change.
	 */
	private monitor?: (event: this) => void;

	/**
	 * Create a new event.
	 *
	 * @param parent
	 *   the parent that will be passed to listener as their `this`
	 */
	constructor(parent: Parent) {
		this.parent = parent;

		const subscribable = (listener: Listener<Parent, Args>) => this.subscribe(listener);
		subscribable.subscribe = subscribable;
		subscribable.unsubscribe = (listener: Listener<Parent, Args>) => this.unsubscribe(listener);
		subscribable.once = () => this.once();

		this.subscribable = subscribable;
	}

	/**
	 * Emit this event. This will invoke all of the listeners with the passed
	 * arguments.
	 *
	 * @param args
	 */
	public emit(...args: Args): void {
		if(Array.isArray(this.registeredListeners)) {
			/*
			 * Array is present, iterate over array and invoke all of the
			 * listeners.
			 */
			for(const listener of this.registeredListeners) {
				listener.apply(this.parent, args);
			}
		} else if(this.registeredListeners) {
			/*
			 * Single listener is present, simply invoke the listener.
			 */
			this.registeredListeners.apply(this.parent, args);
		}
	}

	/**
	 * Subscribe to this event using the given listener. The listener will
	 * be invoked any time the event is emitted. The returned handle can be
	 * used to unsubscribe.
	 *
	 * @param listener
	 */
	public subscribe(listener: Listener<Parent, Args>): SubscriptionHandle {
		if(Array.isArray(this.registeredListeners)) {
			// Listeners is already an array, create a copy with the new listener appended
			this.registeredListeners = [ ...this.registeredListeners, listener ];
		} else if(this.registeredListeners) {
			this.registeredListeners = [ this.registeredListeners, listener ];
		} else {
			this.registeredListeners = listener;
		}

		if(this.monitor) {
			// Trigger the monitor if available
			this.monitor(this);
		}

		const self = this;
		return {
			unsubscribe() {
				return self.unsubscribe(listener);
			}
		};
	}

	/**
	 * Unsubscribe a listener from this handler. The specified listener will
	 * no longer be invoked when the event is emitted.
	 *
	 * @param listener
	 */
	public unsubscribe(listener: Listener<Parent, Args>): boolean {
		if(Array.isArray(this.registeredListeners)) {
			/*
			 * Array has been allocated, find the index of the listener and
			 * then remove it from the array.
			 */
			const idx = this.registeredListeners.indexOf(listener);
			if(idx < 0) return false;

			// Copy-on-write for deletions
			const listeners = [ ...this.registeredListeners ];
			listeners.splice(idx);
			this.registeredListeners = listener;

			/*
			 * If the array is empty, remove it. Otherwise at this point the
			 * array has already been allocated so keep the array in case a
			 * subscription happens again.
			 */
			if(this.registeredListeners.length === 0) {
				this.registeredListeners = undefined;
			}

			if(this.monitor) {
				// Trigger the monitor if available
				this.monitor(this);
			}

			return true;
		} else if(this.registeredListeners === listener) {
			/*
			 * Single listener is present and its the current match. Reset
			 * listeners property.
			 */
			this.registeredListeners = undefined;

			if(this.monitor) {
				// Trigger the monitor if available
				this.monitor(this);
			}

			return true;
		}

		// Listener is not active
		return false;
	}

	/**
	 * Get a promise that will resolve the first time this event is fired
	 * after this call.
	 */
	public once(): Promise<Args> {
		return new Promise((resolve, reject) => {
			const listener = (...args: Args) => {
				this.unsubscribe(listener);

				resolve(args);
			};

			this.subscribe(listener);
		});
	}

	/**
	 * Get if there are any listeners available.
	 */
	get hasListeners() {
		return this.registeredListeners !== undefined;
	}

	/**
	 * Get a copy of the listeners as an array.
	 */
	get listeners() {
		if(Array.isArray(this.registeredListeners)) {
			return this.registeredListeners.slice(0);
		} else {
			return [ this.registeredListeners ];
		}
	}

	/**
	 * Monitor for changes to listeners. Only a single monitor is supported at
	 * a single time. This is intended to be used to react to if listeners are
	 * currently registered. This can be used for things such as only listening
	 * to events from other objects when this event is active.
	 *
	 * @param monitor
	 */
	public monitorListeners(monitor: (event: this) => void): void {
		if(this.monitor) {
			throw new Error('A monitor is already registered, call removeMonitor before registering a new monitor');
		}

		this.monitor = monitor;
	}

	/**
	 * Stop monitoring for listener changes.
	 */
	public removeMonitor() {
		this.monitor = undefined;
	}
}
