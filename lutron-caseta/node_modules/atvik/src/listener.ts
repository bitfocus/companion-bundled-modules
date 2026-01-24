/**
 * Listener type. Defines the function signature that a listener is expected
 * to have.
 */
export type Listener<This, Args extends any[]> = (this: This, ...args: Args) => void;
