/**
 * Predicate used to filter a service. Return `true` to match a service and
 * `false` to not match.
 */
export type ServicePredicate<S> = (service: S) => boolean;
