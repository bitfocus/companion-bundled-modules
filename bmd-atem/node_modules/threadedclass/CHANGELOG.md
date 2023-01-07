# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.2.1](https://github.com/nytamin/threadedClass/compare/1.2.0...1.2.1) (2022-12-07)


### Bug Fixes

* linting errors ([c3fedd5](https://github.com/nytamin/threadedClass/commit/c3fedd50b0b6d4872d2fa7d8a6e54a36345b2d48))
* only apply custom loader for electron < 17.3 ([1e063a1](https://github.com/nytamin/threadedClass/commit/1e063a1c9f2b9ad0c0a105e054cbc7eb2696a031))

## [1.2.0](https://github.com/nytamin/threadedClass/compare/1.1.2...1.2.0) (2022-11-23)


### Features

* add autoRestart retry options ([52e4591](https://github.com/nytamin/threadedClass/commit/52e45913d7b68e4bf6d713da32f14dcb8eb35a83))
* add strict mode ([75c4d4d](https://github.com/nytamin/threadedClass/commit/75c4d4dc72a2f0943bb87f6d1f7abe2a60c8d227))
* allow disabling timeouts and add error types ([5616a1a](https://github.com/nytamin/threadedClass/commit/5616a1a105948b28391ca62759c138686d91b0a3))


### Bug Fixes

* promise returned from `restartChild` ([7b025f7](https://github.com/nytamin/threadedClass/commit/7b025f75db89be3930565bb8272ff53e71bbca61))
* refactor and fix an issue with autoRestartFailCount ([e32dd03](https://github.com/nytamin/threadedClass/commit/e32dd0343235e33982b5b34fa031f89ea20ead4f))
* test failing inconsistently, and lint ([5760962](https://github.com/nytamin/threadedClass/commit/576096228267c6236c0ba1fd2c6b59188c385f36))

### [1.1.2](https://github.com/nytamin/threadedClass/compare/1.1.0...1.1.2) (2022-11-02)


### Bug Fixes

* bug fix: it wasn't possible to call ThreadedClassManager.restart multiple times for the same instance ([e93e5c5](https://github.com/nytamin/threadedClass/commit/e93e5c5688b851656d3f573c4dec0a768d078aee))

### [1.1.1](https://github.com/nytamin/threadedClass/compare/1.1.0...1.1.1) (2022-09-23)


### Bug Fixes

* fatal error in stripSack ([e9c568e](https://github.com/nytamin/threadedClass/commit/e9c568efd66fe81961fd427aa9e3f662b5476bfa))

## [1.1.0](https://github.com/nytamin/threadedClass/compare/1.0.2...1.1.0) (2022-08-11)


### Features

* add custom killTimeout option ([ff9847c](https://github.com/nytamin/threadedClass/commit/ff9847c4fbb035bc005877b5a2d8115a11566cf7))
* add event to allow listening to side-effect errors ([4ce09c9](https://github.com/nytamin/threadedClass/commit/4ce09c90ee3ff6d58fc6bb5cd93fe85059fda2a0))
* allow changing restart timeout ([73057ac](https://github.com/nytamin/threadedClass/commit/73057ac65d1aaed28db1f19706b47cc0b4559ec2))


### Bug Fixes

* crash/failed test after restarted child ([cbb37a1](https://github.com/nytamin/threadedClass/commit/cbb37a1cce4e3c7fa45395358bc97a75fae450d4))
* forward errors from WorkerThreads to consumers ([9a36299](https://github.com/nytamin/threadedClass/commit/9a36299382345489f1c1cdd02ae9f61ebf526bed))
* forward errors upwards so that they can be caught ([75685ae](https://github.com/nytamin/threadedClass/commit/75685ae2d7b2f80cce9eca3d0dc896252e56177b))
* improve logging for when rejecting all methods ([34a5fd2](https://github.com/nytamin/threadedClass/commit/34a5fd27cdc658cce3c60448afd6585d8b32a96f))
* kill children if they crash during init ([16c0427](https://github.com/nytamin/threadedClass/commit/16c04277d42e480eb3dfa1280b415e012d0ace6e))
* move restartTimeout to class options ([dd5703e](https://github.com/nytamin/threadedClass/commit/dd5703eea37396dba75fdbe73728a9de652fbf7e))
* verify that restarted event is emitted correctly ([64dac40](https://github.com/nytamin/threadedClass/commit/64dac4009a4de8fe8919039812dd69c576670984))
* when emitting or throwing errors, only do additional writes to console when the debug is enabled ([4df8586](https://github.com/nytamin/threadedClass/commit/4df858687aaca4caf8d8dd63720402a07568f1c4))

### [1.0.2](https://github.com/nytamin/threadedClass/compare/1.0.1...1.0.2) (2022-04-08)


### Bug Fixes

* check argument types in threadedClass() ([68ee9ce](https://github.com/nytamin/threadedClass/commit/68ee9cec7e64e71f4e551656ba2d4fbbada49501))
* improve error handling, by appending the original stack traces to the errors thrown. ([14116da](https://github.com/nytamin/threadedClass/commit/14116dab194b33c36bfe2a9e248f3413de65acdb))
* update types to handle a special case of eventEmitters. ([7ebc71f](https://github.com/nytamin/threadedClass/commit/7ebc71f51887f24e31527d4f414ded77072dfc88))

### [1.0.1](https://github.com/nytamin/threadedClass/compare/1.0.0...1.0.1) (2022-01-13)


### Bug Fixes

* only resolve error stack when needed. ([5afb47b](https://github.com/nytamin/threadedClass/commit/5afb47b9ad378e87c8f61c00b7da6f899990f629))

## [1.0.0](https://github.com/nytamin/threadedClass/compare/0.9.0...1.0.0) (2021-09-14)


### Bug Fixes

* fix error in setter ([25b87cf](https://github.com/nytamin/threadedClass/commit/25b87cf8d1310dab75f52bc79804bbc2cf20c738))
* reuse callbacks where possible ([ba8e5b1](https://github.com/nytamin/threadedClass/commit/ba8e5b1b45bf0b6178fd8f9c642df5889a089321))

## [0.9.0](https://github.com/nytamin/threadedClass/compare/0.8.3...0.9.0) (2021-04-22)


### Features

* add environemnt variable to use a worker_thread loader script ([#42](https://github.com/nytamin/threadedClass/issues/42)) ([e931372](https://github.com/nytamin/threadedClass/commit/e931372585770acfe960495726e6bbbb167e8d5c))
* make exit handlers opt-in [#45](https://github.com/nytamin/threadedClass/issues/45) ([#47](https://github.com/nytamin/threadedClass/issues/47)) ([5c4bb34](https://github.com/nytamin/threadedClass/commit/5c4bb344d10d520f2193a9ab072961ecb4e794d1))

### [0.8.3](https://github.com/nytamin/threadedClass/compare/0.8.2...0.8.3) (2020-12-09)


### Bug Fixes

* debug logging to troubleshoot restart issues ([7ed20e2](https://github.com/nytamin/threadedClass/commit/7ed20e2c93ff1915c14a72db8d26915137728170))
* expose dontHandleExit property ([eca698f](https://github.com/nytamin/threadedClass/commit/eca698f3e175c173fdfa13f3469622fb2261e41b))

### [0.8.2](https://github.com/nytamin/threadedClass/compare/0.8.1...0.8.2) (2020-11-16)


### Features

* add getMemUsage function ([e19d3a0](https://github.com/nytamin/threadedClass/commit/e19d3a02332935c0ed710f366e68b20626965840))
* add support for sending messages directly to the Child process ([b8517a3](https://github.com/nytamin/threadedClass/commit/b8517a3262d07a41a998a178de38dcc889ad054d))


### Bug Fixes

* add .description to MemUsageReport ([0bbe357](https://github.com/nytamin/threadedClass/commit/0bbe357ed47266d3a61a6f7117dff1c478f3e205))
* refactor internal type definitions in sharedApi.ts, to clarify message directions, senders & receivers by grouping types in namespaces ([1e1c460](https://github.com/nytamin/threadedClass/commit/1e1c46070f50985201d0d83688a67fa50c31283c))

### [0.8.1](https://github.com/nytamin/threadedClass/compare/0.8.0...0.8.1) (2020-10-27)


### Bug Fixes

* be more verbose when describing child processes. Default instanceName to the name of the Export. ([830cfbd](https://github.com/nytamin/threadedClass/commit/830cfbdb9d91906280a71a6ebf16383541d3abd7))
* on exit handlers: made the on exit/signal handlers be more verbose ([a050c3b](https://github.com/nytamin/threadedClass/commit/a050c3b295fe0fd00859f8f035014859a30caa08))

## [0.8.0](https://github.com/nytamin/threadedClass/compare/0.7.0...0.8.0) (2020-08-17)


### ⚠ BREAKING CHANGES

* drop node 8 support
* remove class constructor from main function. When single-threaded it gets loaded the same way as multithreaded would
* drop node 8 support
* remove class constructor from main function. When single-threaded it gets loaded the same way as multithreaded would

### Features

* add support for exports not named the same as the class ([1cce227](https://github.com/nytamin/threadedClass/commit/1cce2271c567e232ce612e784432dec07cb3ac38))
* add support for exports not named the same as the class ([1cce227](https://github.com/nytamin/threadedClass/commit/1cce2271c567e232ce612e784432dec07cb3ac38))
* drop node 8 support ([a4e3c49](https://github.com/nytamin/threadedClass/commit/a4e3c49e46f1c525ac2d544c0c3dbc7e3e95e0b9))
* drop node 8 support ([a4e3c49](https://github.com/nytamin/threadedClass/commit/a4e3c49e46f1c525ac2d544c0c3dbc7e3e95e0b9))
* monitor parent pid for orphan check ([#33](https://github.com/nytamin/threadedClass/issues/33)) ([597bdf9](https://github.com/nytamin/threadedClass/commit/597bdf9d514019f7b32aa53574c886756a146067))
* monitor parent pid for orphan check ([#33](https://github.com/nytamin/threadedClass/issues/33)) ([597bdf9](https://github.com/nytamin/threadedClass/commit/597bdf9d514019f7b32aa53574c886756a146067))
* refactor workers for better types ([c6aabb0](https://github.com/nytamin/threadedClass/commit/c6aabb008959cf252a0a307a24fb6a1a9d859c44))
* refactor workers for better types ([c6aabb0](https://github.com/nytamin/threadedClass/commit/c6aabb008959cf252a0a307a24fb6a1a9d859c44))
* remove class constructor from main function. When single-threaded it gets loaded the same way as multithreaded would ([f0c0e3f](https://github.com/nytamin/threadedClass/commit/f0c0e3f2c244b50f4a25c61cf8914b142101013d))
* **ci:** prerelease flow & optionally skip audit [skip ci] ([adf1927](https://github.com/nytamin/threadedClass/commit/adf1927f20ddc1308295ff27604692dfc583eac8))
* remove class constructor from main function. When single-threaded it gets loaded the same way as multithreaded would ([f0c0e3f](https://github.com/nytamin/threadedClass/commit/f0c0e3f2c244b50f4a25c61cf8914b142101013d))
* **ci:** prerelease flow & optionally skip audit [skip ci] ([adf1927](https://github.com/nytamin/threadedClass/commit/adf1927f20ddc1308295ff27604692dfc583eac8))


### Bug Fixes

* indentation ([5355f3e](https://github.com/nytamin/threadedClass/commit/5355f3e01e6e0ff3d210dd9ff14c567e6ca6fdff))
* indentation ([5355f3e](https://github.com/nytamin/threadedClass/commit/5355f3e01e6e0ff3d210dd9ff14c567e6ca6fdff))
* use worker_threads typings from @types/node, and don't pass callback to worker.terminate ([34a1614](https://github.com/nytamin/threadedClass/commit/34a16145abf686a9fa9008b07cc0b1d6c5cc0d05))
* use worker_threads typings from @types/node, and don't pass callback to worker.terminate ([34a1614](https://github.com/nytamin/threadedClass/commit/34a16145abf686a9fa9008b07cc0b1d6c5cc0d05))

## [0.7.0](https://github.com/nytamin/threadedClass/compare/0.6.8...0.7.0) (2019-12-12)


### Features

* stricter typings for constructor ([708f9e4](https://github.com/nytamin/threadedClass/commit/708f9e48dc11db890948d710ceef3ad21616a92b))
* update ci to run for node 8,10,12 ([e65d0e0](https://github.com/nytamin/threadedClass/commit/e65d0e076c6704ac8d6ceed6d181b14f4bf02680))


### Bug Fixes

* build before running tests ([d88d28f](https://github.com/nytamin/threadedClass/commit/d88d28fee31fe03125ffc092fe3cd9fade8cecf9))
* build before test during release script ([33df104](https://github.com/nytamin/threadedClass/commit/33df10482e9c8a35a29e4e029740d47213684d88))
* disable broken tests ([9102550](https://github.com/nytamin/threadedClass/commit/9102550eab8f5050a0f22f50e08d0c5eacf38a4d))
* encode/decode constructor arguments ([29eadf8](https://github.com/nytamin/threadedClass/commit/29eadf82e3973ba4d4b7443d3655041c6484cf32))
* functions often undefined ([#23](https://github.com/nytamin/threadedClass/issues/23)) ([312f08c](https://github.com/nytamin/threadedClass/commit/312f08cb70c3c2d08e13f6cbfce0d5c138bf72a2))
* tweak coverage thresholds ([61273a6](https://github.com/nytamin/threadedClass/commit/61273a64fda27a9652a258a57c017f18ee2f740f))

### [0.6.8](https://github.com/nytamin/threadedClass/compare/0.6.7...0.6.8) (2019-10-03)


### Bug Fixes

* allow infinite number of listeners ([aedc713](https://github.com/nytamin/threadedClass/commit/aedc713))

### [0.6.7](https://github.com/nytamin/threadedClass/compare/0.6.6...0.6.7) (2019-10-03)


### Bug Fixes

* include original stack trace in error messages ([c76a866](https://github.com/nytamin/threadedClass/commit/c76a866))

### [0.6.6](https://github.com/nytamin/threadedClass/compare/0.6.5...0.6.6) (2019-09-04)


### Bug Fixes

* make error messages clearer ([c5505f9](https://github.com/nytamin/threadedClass/commit/c5505f9))

### [0.6.5](https://github.com/nytamin/threadedClass/compare/0.6.4...0.6.5) (2019-09-03)


### Bug Fixes

* add note to stack trace on error replies ([0322313](https://github.com/nytamin/threadedClass/commit/0322313))
* be more descriptive in error messages ([ea37bef](https://github.com/nytamin/threadedClass/commit/ea37bef))
* make logging output log instance id ([5e4190c](https://github.com/nytamin/threadedClass/commit/5e4190c))
* make onEvent return a method for removing the listener ([d877d24](https://github.com/nytamin/threadedClass/commit/d877d24))


### Features

* be able to name instances ([77e72c1](https://github.com/nytamin/threadedClass/commit/77e72c1))

### [0.6.4](https://github.com/nytamin/threadedClass/compare/0.6.3...0.6.4) (2019-08-24)


### Bug Fixes

* don't monitor orphaned child in single-threaded mode (this kills the parent process) ([1432f16](https://github.com/nytamin/threadedClass/commit/1432f16))
* update dependencies ([ce99482](https://github.com/nytamin/threadedClass/commit/ce99482))

### [0.6.3](https://github.com/nytamin/threadedClass/compare/0.6.2...0.6.3) (2019-07-16)


### Bug Fixes

* upgrade dependencies (after security audit) ([f093cff](https://github.com/nytamin/threadedClass/commit/f093cff))



### [0.6.2](https://github.com/nytamin/threadedClass/compare/0.6.1...0.6.2) (2019-06-07)



## [0.6.1](https://github.com/nytamin/threadedClass/compare/0.6.0...0.6.1) (2019-04-14)



# [0.6.0](https://github.com/nytamin/threadedClass/compare/0.5.0...0.6.0) (2019-04-14)


### Bug Fixes

* proper termination of worker thread ([2850a70](https://github.com/nytamin/threadedClass/commit/2850a70))


### Features

* remove JSON.stringify, to increase performance (message is still stringified at send, no need to do it twice) ([28b53c9](https://github.com/nytamin/threadedClass/commit/28b53c9))
* Support for worker_threads ([c6ee116](https://github.com/nytamin/threadedClass/commit/c6ee116))



# [0.5.0](https://github.com/nytamin/threadedClass/compare/0.4.3...0.5.0) (2019-03-07)


### Features

* direct import of class, when in single thread mode ([a14c162](https://github.com/nytamin/threadedClass/commit/a14c162))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/nytamin/threadedClass/compare/0.3.4...0.4.0) (2019-02-05)


### Features

* child detect if it's been orphaned ([7b9895c](https://github.com/nytamin/threadedClass/commit/7b9895c))
* implement ping & freeze detection of child proces, and autoRestart ([d6ebd53](https://github.com/nytamin/threadedClass/commit/d6ebd53))



<a name="0.3.4"></a>
## [0.3.4](https://github.com/nytamin/threadedClass/compare/0.3.3...0.3.4) (2019-02-01)



<a name="0.3.3"></a>
## [0.3.3](https://github.com/nytamin/threadedClass/compare/0.3.2...0.3.3) (2019-02-01)



<a name="0.3.2"></a>
## [0.3.2](https://github.com/nytamin/threadedClass/compare/0.3.1...0.3.2) (2019-02-01)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/nytamin/threadedClass/compare/0.3.0...0.3.1) (2019-02-01)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/nytamin/threadedClass/compare/0.2.1...0.3.0) (2019-02-01)


### Features

* add browser example ([ccd2ff7](https://github.com/nytamin/threadedClass/commit/ccd2ff7))
* implement browser support, using web-workers ([61e5028](https://github.com/nytamin/threadedClass/commit/61e5028))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/nytamin/threadedClass/compare/0.2.0...0.2.1) (2019-01-04)


### Bug Fixes

* falsy values ([3bca924](https://github.com/nytamin/threadedClass/commit/3bca924))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/nytamin/threadedClass/compare/v0.1.0...v0.2.0) (2018-12-26)


### Bug Fixes

* cleanup unused functionality ([01aaf6e](https://github.com/nytamin/threadedClass/commit/01aaf6e))
* handle thrown errors & renaming of some methods ([b819d50](https://github.com/nytamin/threadedClass/commit/b819d50))
* handle undefined parameter ([70f34b1](https://github.com/nytamin/threadedClass/commit/70f34b1))
* renamed more references of "process" to "thread", for consistency ([51d97ad](https://github.com/nytamin/threadedClass/commit/51d97ad))


### Features

* added ThreadedClassManager.onEvent, for listening to process-closed-events. Added restart function, to restart crashed devices. ([3ed3986](https://github.com/nytamin/threadedClass/commit/3ed3986))
* disableMultithreading option starts a special non threaded class ([5e24f55](https://github.com/nytamin/threadedClass/commit/5e24f55))
* proper support for functions as arguments & proper handling of value types ([c66bf9c](https://github.com/nytamin/threadedClass/commit/c66bf9c))
* rename options.processId to threadId ([58be1cb](https://github.com/nytamin/threadedClass/commit/58be1cb))
* rename options.processUsage to threadUsage ([177e264](https://github.com/nytamin/threadedClass/commit/177e264))
* restart process now returns promise ([0899424](https://github.com/nytamin/threadedClass/commit/0899424))
* reworked the whole thing. Added support for multiple instances of classes running in the same process. Added ThreadedClassManager singleton to use for cleaning up instances ([f2b96e9](https://github.com/nytamin/threadedClass/commit/f2b96e9))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/nytamin/threadedClass/compare/v0.0.5...v0.1.0) (2018-12-11)


### Bug Fixes

* handle nested prototypes ([5eac783](https://github.com/nytamin/threadedClass/commit/5eac783))
* typo ([b540a3b](https://github.com/nytamin/threadedClass/commit/b540a3b))


### Features

* added better support for getters & setters ([94d7d53](https://github.com/nytamin/threadedClass/commit/94d7d53))
* non-ideal-but-reasonable support for getters ([422b466](https://github.com/nytamin/threadedClass/commit/422b466))
* support setting properties ([b042426](https://github.com/nytamin/threadedClass/commit/b042426))
