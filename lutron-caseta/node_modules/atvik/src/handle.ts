/**
 * Handle that points to a previously subscribed listener. This handle is
 * returned when a subscription occurs and can be used to remove the
 * subscription.
 */
export interface SubscriptionHandle {
	/**
	 * Unsubscribe, the listener will no longer receive events.
	 */
	unsubscribe(): void;
}
