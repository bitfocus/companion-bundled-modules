# Atvik

[![npm version](https://badge.fury.io/js/atvik.svg)](https://badge.fury.io/js/atvik)
[![Build Status](https://travis-ci.org/aholstenson/atvik.svg?branch=master)](https://travis-ci.org/aholstenson/atvik)
[![Coverage Status](https://coveralls.io/repos/aholstenson/atvik/badge.svg)](https://coveralls.io/github/aholstenson/atvik)
[![Dependencies](https://david-dm.org/aholstenson/atvik.svg)](https://david-dm.org/aholstenson/atvik)

Atvik is an event emitter for JavaScript and TypeScript. This library
provides emitters for individual events that work well with types and
inheritance.

```javascript
import { Event } from 'atvik';

// Create an event
const event = new Event(thisValueForListeners);

// Subscribe to the event
const handle = event.subscribe((arg1) => /* do stuff here */);

// Emit the event, triggering all listeners
event.emit('first argument');

// Unsubscribe from the event
handle.unsubscribe();
```

## Use with classes

Events come with a public API for use with classes so that users of a class can
only subscribe to events and not emit them.

```javascript
class Counter {
  constructor() {
    this.countUpdatedEvent = new Event(this);
    this.count = 0;
  }

  get onCountUpdated() {
    /*
     * Return the subscribable of the event - which is a function that can be
     * used to listen to the event.
     */
    return this.countUpdatedEvent.subscribable;
  }

  increment() {
    this.count++;
    this.countUpdatedEvent.emit(this.count);
  }
}

const counter = new Counter();

// Subscribe to the event with a listener
counter.onCountUpdated(currentCount => console.log(currentCount));

// Increment and trigger the countUpdated event
counter.increment();
```

## Types with TypeScript

Atvik is compatible with TypeScript and provides a type-safe interface to
listen to and emit events:

```typescript
import { Event } from 'atvik';

const parent = {};

// Create an event without any expected arguments
const noArgEvent = new Event<object>(parent);

// Subscribing will be checked so it takes in zero arguments
noArgEvent.subscribe(() => /* do stuff here */);

// Emitting the event can only be done without any parameters
noArgEvent.emit();
```

Events can have arguments that will be checked in the listeners and when
emitting:

```typescript
// Pass a second type in array form to specify the expected arguments
const argEvent = new Event<object, [ number ]>(parent);

// Subscribe will now check that the arguments are compatible
argEvent.subscribe((count) => /* do stuff here */);

// Emitting the event now requires arguments to be passed
argEvent.emit(10);
```

## Listening to something once

Listening for a single event can be done via promises:

```javascript
// Wait for the event to be emitted
const args = await event.once();
```

## Monitoring for listener changes

For some use cases it is necessary to monitor if an event has any listeners,
for this library provides the `monitorListeners` function. If a monitor is
registered it will be invoked for any change in listeners, so subscribing or
unsubscribing will always trigger the monitor.

Example with a fictional service being started and stopped:

```javascript
event.monitorListeners(theEvent => {
  if(theEvent.hasListeners) {
    // The event has at least one active listener
    if(! service.started) {
      service.start();
    }
  } else {
    // No active listeners
    if(service.started) {
      service.stop();
    }
  }
});
```

Only a single monitor may be active at a time and the active monitor can be
removed via `removeMonitor()`.
