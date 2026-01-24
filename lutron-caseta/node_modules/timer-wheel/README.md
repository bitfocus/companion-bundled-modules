# Timer Wheel

[![npm version](https://badge.fury.io/js/timer-wheel.svg)](https://badge.fury.io/js/timer-wheel)
[![Build Status](https://travis-ci.org/aholstenson/timer-wheel.svg?branch=master)](https://travis-ci.org/aholstenson/timer-wheel)
[![Coverage Status](https://coveralls.io/repos/aholstenson/timer-wheel/badge.svg)](https://coveralls.io/github/aholstenson/timer-wheel)
[![Dependencies](https://david-dm.org/aholstenson/timer-wheel.svg)](https://david-dm.org/aholstenson/timer-wheel)

`timer-wheel` is a library for JavaScript and TypeScript for efficiently
managing the expiration of a large amount of items. It allows you to schedule
items to be expired after a certain delay and then control when to advance and
handle the expired items.

This implementation is designed for larger delays and has a minimum delay of
1000 ms.

```typescript
import { TimerWheel } from 'timer-wheel';

const wheel = new TimerWheel<any>();
wheel.schedule('data', 1500 /* ms */)

// Call `advance()` to advance the wheel and run actions
setInterval(() => {
  const expired = wheel.advance();
  for(const data of expired) {
    // Do something with the expired data
  }
}, 1000);
```

This library is useful for things like expiring caches with lazy expiration,
instead of checking if every cache item should be expired use a wheel to queue
removal actions and call `advance` before every get/set. This is how
[Transitory](https://github.com/aholstenson/transitory) implements expiring
caches.

## Rescheduling

By default `TimerWheel` will schedule the same object to expired more than once.
This will schedule `obj` to be expired both after 1 and 5 seconds:

```javascript
const wheel = new TimerWheel();
const obj = {};

// Schedule to be expired after 1 seconds
wheel.schedule(obj, 1000);

// Schedule to also be expired after 5 seconds
wheel.schedule(obj, 5000);
```

If you want to be able to reschedule when an item expires use
`ReschedulingTimerWheel`:

```javascript
import { ReschedulingTimerWheel } from 'timer-wheel';

const wheel = new ReschedulingTimerWheel();

const obj = {};

// First schedule at 1 second
wheel.schedule(obj, 1000);

// Replace first scheduling with a new one after 5 seconds
wheel.schedule(obj, 5000);
```

## Running actions

There's a wheel designed to run actions available:

```javascript
import { ActionTimerWheel } from 'timer-wheel';

const wheel = new ActionTimerWheel();

wheel.schedule(() => {
  /* do something here */
}, 8000);

// Advance the wheel to run expired actions
wheel.advance();
```
