# Threaded class
[![Lint and Test](https://github.com/nytamin/threadedClass/actions/workflows/lint-and-test.yml/badge.svg)](https://github.com/nytamin/threadedClass/actions/workflows/lint-and-test.yml)
[![codecov](https://codecov.io/gh/nytamin/threadedClass/branch/master/graph/badge.svg)](https://codecov.io/gh/nytamin/threadedClass)

Fork instances of classes (while keeping typings) with one line of code.

## Getting started

```
npm install threadedclass
```
Let's say you have a class that has several computational-heavy methods:
```typescript
// Normal, single-threaded way:
import { Professor } from './professor'

function getStory() {
  let mrSmith = new Professor('maths', 'greek')
  let story = mrSmith.talkAboutAncientGreece() // takes a loong time
  return story
}
```
`Threaded-class` helps you create an asynchronous version of the instance of that class.
The instance will have _almost_ the same typings-API as the original (all methods return promises instead), but will run in a separate thread.
```typescript
// Multi-threaded, asynchronous way:
import { threadedClass} from 'threadedclass'
import { Professor } from './professor'

async function getStory() {
  let mrSmith = await threadedClass<Professor>('./professor.js', 'Professor', ['maths', 'greek'])
  let story = await mrSmith.talkAboutAncientGreece() // still takes a loong time, but now runs in a separate thread
  return story
}
```
The instance returned by `threadedClass()` has methods equivalent to the original, but all properties and methods will be asynchronous (return Promises).

## API
[API reference](https://nytamin.github.io/threadedClass)
### NodeJS: Typescript example
```typescript
import { threadedClass} from  'threadedclass'
import { Professor } from './professor'

const mrSmith = await threadedClass<Professor>(
   './professor.js',     // Path to imported module (this should be the same path as is in require('XX') or import {class} from 'XX'} )
   'Professor' ,        // The export name for the class to be forked
   ['maths', 'greek'], // Array of arguments to be fed into the class constructor
   {} // Config (see below)
)
const story = await mrSmith.talkAboutAncientGreece() // All methods returns a Promise now
console.log(story)

```
### NodeJS: Javascript example
```javascript
var threadedClass = require('threadedclass').threadedClass
var Professor = require('./professor')

const mrSmith = await threadedClass('./professor.js', Professor, ['maths', 'greek'])

const story = await mrSmith.talkAboutAncientGreece() // All methods returns a Promise now
console.log(story)

```
### Browser: Javascript example
[Example](https://nytamin.github.io/threadedClass/examples/browser.html)
```html
<script type="text/javascript" src="lib/threadedClass.js"></script>
<script type="text/javascript" src="professor.js"></script>
<script type="text/javascript">
   var threadedClass = ThreadedClass.threadedClass

   threadedClass('../professor.js', Professor, ['maths', 'greek'], { // path to module is relative to threadedClass.js
      pathToWorker: 'lib/threadedclass-worker.js' // in browser, a path to the worker-scrip must also be provided
   })
   .then(async (mrSmith) => {
      const story = await mrSmith.talkAboutAncientGreece() // All methods returns a Promise now
      console.log(story)
   })
</script>
```
### Options
An optional options object can be passed to threadedClass() with the following properties:

| Option | Type | Description |
|--|--|--|
| `threadUsage` | number | A number between 0 - 1, how large part of a thread the instance takes up. For example; if set to 0.1, a thread will be re-used for up to 10 instances. |
| `threadId` | string | Set to an arbitrary id to put the instance in a specific thread. Instances with the same threadIds will be put in the same thread. |
| `autoRestart` | boolean | If the process crashes or freezes it's automatically restarted. (ThreadedClassManager will emit the "restarted" event upon restart) |
| `restartTimeout` | number | (milliseconds), if the process needs to restart, how long to wait for it to initalize, before failing. (default is 1000ms, 0 disables this timeout) |
| `autoRestartRetryCount` | number | If an autoRestart fails and this is set, ThreadedClass will continue to try to restart the thread. (defaults is 1, 0 means continue to restart indefinitely) |
| `autoRestartRetryDelay` | number | (milliseconds), how long to wait before retrying to restart the thread after autoRestart fails. (default is 1000 ms) |
| `killTimeout` | number | (milliseconds), if the process is being killed, how long to wait for it to terminate, before failing. (default is 1000ms, 0 disables this timeout)  |
| `disableMultithreading` | boolean | Set to true to disable multi-threading, this might be useful when you want to disable multi-threading but keep the interface unchanged. |
| `pathToWorker` | string | Set path to worker, used in browser |
| `freezeLimit` | number | (milliseconds), how long to wait before considering the child to be unresponsive. (default is 1000 ms, 0 disables this timeout) |
| `instanceName` | string | Optional: Set a custom name of the instance (used for debugging). Defaults to the class name |

### ThreadedClassManager API

```typescript
import { ThreadedClassManager } from 'threadedclass'

 // Debug mode, will log stuff to console
ThreadedClassManager.debug = true

// Enable strict mode.
// When strict mode is enabled, checks will be done to ensure that best-practices are followed (such as listening to the proper events, etc).
// Warnings will be output to the console if strict mode is enabled.
ThreadedClassManager.strict = true

// Whether ThreadedClass will register exit handlers. If not, then the application should ensure the threads are aborted on process exit
ThreadedClassManager.handleExit = RegisterExitHandlers.AUTO // Default, checks if exit handlers have been set up by user before first threadedClass() call.
ThreadedClassManager.handleExit = RegisterExitHandlers.YES // Will set up exit handlers to ensure child processes are killed on exit signal.
ThreadedClassManager.handleExit = RegisterExitHandlers.NO // Don't set up any exit handlers (depending on your environment and Node version, children might need to be manually killed).

// Destroy a proxy instance
await ThreadedClassManager.destroy(mrSmith)

// Destroys all proxy instances and closes all threads
await ThreadedClassManager.destroyAll()

// Returns the number of threads / child processes
ThreadedClassManager.getThreadCount()

// Returns memory usage for each thread
const memUsage = await ThreadedClassManager.getThreadsMemoryUsage()

// Set up an event listener for an instance
ThreadedClassManager.onEvent(mrSmith, 'thread_closed', () => {}) // This event is fired if a thread has closed. If autoRestart is set, an attempt to auto-restart the thread will be made after this
ThreadedClassManager.onEvent(mrSmith, 'restarted', () => {}) // This event is fired after an instance has been successfully restarted
ThreadedClassManager.onEvent(mrSmith, 'error', (error) => {}) // This event is fired if there is an unhandled error in the thread

// Restart the thread of the proxy instance, useful if you don't use autoRestart and want to handle restarts manually.
await ThreadedClassManager.restart(mrSmith)

// Returns how the threads are implemented ( not_supported, web_worker, worker_threads, child_process )
const mode = ThreadedClassManager.getThreadMode()

```

### Recommended usage

To avoid bugs and unexpected behaviours, it is recommended that you follow the pattern below:

```typescript
import { threadedClass} from  'threadedclass'
import { Professor } from './professor'


ThreadedClassManager.strict = true // This activates a few checks that the events are listened to, etc..

const mrSmith = await threadedClass<Professor>('./professor.js', 'Professor', ['maths', 'greek'], {
   threadUsage: 1, // Optional, set this to 1 if there should only be 1 instance per thread (and 0.1 will allow up to 10 instances per thread)
   autoRestart: true, // Set this to true to auto-restart the class upon a process crash. You'll be notified with the "restarted" event after an auto-restart.
})
await mrSmith.loadInitialData() // An example of an asyncronous initializing procedure

ThreadedClassManager.onEvent(mrSmith, 'thread_closed', () => {
   // This event is fired if a thread has closed.
   // If autoRestart is set, an attempt to auto-restart the thread will be made after this
})
ThreadedClassManager.onEvent(mrSmith, 'restarted', () => {
   // This event is fired after an instance has been successfully restarted

   // If applicable, you might want to re-initialize the instance at this point:
   await mrSmith.loadInitialData()
})
ThreadedClassManager.onEvent(mrSmith, 'error', (error) => {
   // This event is fired if there is an unhandled error in the thread
   console.error(error)
})

await mrSmith.talkAboutAncientGreece() // All methods returns a Promise


function onShutdown() {
   // If ThreadedClassManager.handleExit is set to RegisterExitHandlers.NO
   // You should call this when shutting down, to ensure that any child processes are closed properly:
   await ThreadedClassManager.destroyAll()
}

```

## Features

### Supported imports
* Classes imported from _your own modules_. `import { MyClass } from './myModule'`
* Classes imported from _external dependencies_. `import { DatClass } from 'dat-library'`
* Classes importted from _native Node modules_. `import { StringDecoder } from 'string_decoder'`

### Supported methods, arguments / parameters & return values
When calling a method of your threaded instance (`threaded.myMethod()`), there are some limitations to what data-types are allowed to be provided and returned.

#### Supported data types
* All JSON-serializable types; numbers, strings, arrays, objects etc..
* Buffers
* Functions (such as callbacks or returned functions)

#### Unsupported data types
* Non-JSON-encodable types, such as objects with *cyclic references* (except when in worker_threads, then it's fine).
* Instances of classes (the instance will be serialized as JSON and piped through, but its methods will not).

### Using with electron
Electron does not properly support asar files with worker_threads. When loading a file to execute, it must reside on disk and not inside of the asar file containing all of your application code.

ThreadedClass can workaround this, by using a small preloader that is loaded from disk by the parent, and evaled by the worker_thread. The default electron loader utilises the [asar-node](https://www.npmjs.com/package/asar-node) package to provide support for reading from the asar to the new thread. This preloader is only used for electron when it is detected that the code to load is inside an asar file, and if a custom loader is not specified.

The loader can be overridden by defining the `THREADEDCLASS_WORKERTHREAD_LOADER` environment variable containing an absolute path to the desired loader. This can be done inside node before the thread is created. This file can reside inside an asar, or anywhere else the parent can load via `fs.readFileSync`. It is recommended to bundle this file with browserify or webpack. See [asar-loader.ts](/src/asar-loader.ts) as an example

## Known limitations
* The to-be-threaded class must not be referencing any global variables, as the class is run in its own sandbox.
* **No garbage-collection of callback-functions**
    Currently, if you give a callback to a method (like so: `threaded.myMethod(() => {})`) a reference to the method will be stored indefinitely, because we cannot determine if the reference is valid in the child process.
* There is a noticable delay when spawning a new thread, and since each thread is its own Node-process it uses up a few Megabytes of memory. If you intend to spawn many instances of a class, consider using the _threadUsage_ option (for example `threadUsage: 0.1` will put 10 instances in a thread before spawning a new).

## Under the hood
### Used API:s
Different API:s will be used for threading, depending on the platform:

| Platform | API used   |
| --- | -- |
| [Browser](https://caniuse.com/#feat=webworkers) | Web-workers |
| NodeJS <10.x | Child process |
| NodeJS 10.x - 11.7 | Worker-threads (if `node --experimental-worker` flag is enabled) |
| NodeJS >11.8 | Worker-threads |

### Notes on performance
Doing method-calls to threads is slower than when running in a single thread. The greatest benefit comes when there is heavy computations to be made.

This table shows measured round-trip times of [just calling a method](https://github.com/nytamin/threadedClass/blob/master/performance-test/index.js):

| Platform | API used | Avg. time per call |
|--|--|--|
| NodeJS 8.17    | Single-thread mode   |   0.000200 ms per call   |
| NodeJS 8.17    | Child process        | **0.090000** ms per call |
| NodeJS 10.15   | Single-thread mode   |   0.000078 ms per call   |
| NodeJS 10.15   | Child process        | **0.076000** ms per call |
| NodeJS 10.15   | Worker-threads       | **0.045000** ms per call |
| NodeJS 12.22   | Single-thread mode   |   0.000064 ms per call   |
| NodeJS 12.22   | Worker-threads       | **0.053000** ms per call |
| NodeJS 14.18   | Single-thread mode   |   0.000069 ms per call   |
| NodeJS 14.18   | Worker-threads       | **0.055000** ms per call |
| NodeJS 16.14   | Single-thread mode   |   0.000072 ms per call   |
| NodeJS 16.14   | Worker-threads       | **0.052000** ms per call |
| Browser (Chrome 99) | Single-thread mode   |   0.002500 ms per call   |
| Browser (Chrome 99) | Web-workers          | **0.094202** ms per call |
