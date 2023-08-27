"use strict";
var _DataTransferManager_nextTransferIdInner, _DataTransferManager_nextTransferId, _DataTransferManager_sendLockCommand, _DataTransferManager_stillsLock, _DataTransferManager_clipLocks, _DataTransferManager_labelsLock, _DataTransferManager_macroLock, _DataTransferManager_rawSendCommands;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferManager = void 0;
const tslib_1 = require("tslib");
const exitHook = require("exit-hook");
const dataTransferQueue_1 = require("./dataTransferQueue");
const dataTransferUploadStill_1 = require("./dataTransferUploadStill");
const dataTransferUploadClip_1 = require("./dataTransferUploadClip");
const dataTransferUploadAudio_1 = require("./dataTransferUploadAudio");
const dataTransferUploadMultiViewerLabel_1 = require("./dataTransferUploadMultiViewerLabel");
const dataTransferDownloadMacro_1 = require("./dataTransferDownloadMacro");
const dataTransferUploadMacro_1 = require("./dataTransferUploadMacro");
const DataTransfer_1 = require("../commands/DataTransfer");
const debug_1 = require("debug");
const dataTransferUploadBuffer_1 = require("./dataTransferUploadBuffer");
const MAX_PACKETS_TO_SEND_PER_TICK = 50;
const MAX_TRANSFER_INDEX = (1 << 16) - 1; // Inclusive maximum
const debug = (0, debug_1.default)('atem-connection:data-transfer:manager');
class DataTransferManager {
    constructor(rawSendCommands) {
        _DataTransferManager_nextTransferIdInner.set(this, 0);
        _DataTransferManager_nextTransferId.set(this, () => {
            var _a, _b;
            const index = ((0, tslib_1.__classPrivateFieldSet)(this, _DataTransferManager_nextTransferIdInner, (_b = (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferIdInner, "f"), _a = _b++, _b), "f"), _a);
            if ((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferIdInner, "f") > MAX_TRANSFER_INDEX)
                (0, tslib_1.__classPrivateFieldSet)(this, _DataTransferManager_nextTransferIdInner, 0, "f");
            return index;
        });
        _DataTransferManager_sendLockCommand.set(this, (/*lock: DataTransferLockingQueue,*/ cmd) => {
            Promise.all((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_rawSendCommands, "f").call(this, [cmd])).catch((e) => {
                debug(`Failed to send lock command: ${e}`);
                console.log('Failed to send lock command');
            });
        });
        _DataTransferManager_stillsLock.set(this, new dataTransferQueue_1.DataTransferLockingQueue(0, (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_sendLockCommand, "f"), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferId, "f")));
        _DataTransferManager_clipLocks.set(this, new Map()); // clipLocks get dynamically allocated
        _DataTransferManager_labelsLock.set(this, new dataTransferQueue_1.DataTransferSimpleQueue((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferId, "f")));
        _DataTransferManager_macroLock.set(this, new dataTransferQueue_1.DataTransferSimpleQueue((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferId, "f")));
        _DataTransferManager_rawSendCommands.set(this, void 0);
        (0, tslib_1.__classPrivateFieldSet)(this, _DataTransferManager_rawSendCommands, rawSendCommands, "f");
    }
    get allLocks() {
        return [(0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_stillsLock, "f"), ...(0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_clipLocks, "f").values(), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_labelsLock, "f"), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_macroLock, "f")];
    }
    /**
     * Start sending of commands
     * This is called once the connection has received the initial state data
     */
    startCommandSending(skipUnlockAll) {
        // TODO - abort any active transfers
        if (!this.interval) {
            // New connection means a new queue
            if (!skipUnlockAll) {
                debug(`Clearing all held locks`);
                for (const lock of this.allLocks) {
                    lock.clearQueueAndAbort(new Error('Restarting connection'));
                }
            }
            this.interval = setInterval(() => {
                for (const lock of this.allLocks) {
                    const commandsToSend = lock.popQueuedCommands(MAX_PACKETS_TO_SEND_PER_TICK); // Take some, it is unlikely that multiple will run at once
                    if (commandsToSend && commandsToSend.length > 0) {
                        // debug(`Sending ${commandsToSend.length} commands `)
                        Promise.all((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_rawSendCommands, "f").call(this, commandsToSend)).catch((e) => {
                            // Failed to send/queue something, so abort it
                            lock.tryAbortTransfer(new Error(`Command send failed: ${e}`));
                        });
                    }
                }
            }, 2); // TODO - refine this. perhaps we can stop and restart the interval?
        }
        if (!this.exitUnsubscribe) {
            this.exitUnsubscribe = exitHook(() => {
                debug(`Exit auto-cleanup`);
                // TODO - replace this with a WeakRef to the parent class?
                this.stopCommandSending();
            });
        }
    }
    /**
     * Stop sending of commands
     * This is called once the connection is disconnected
     */
    stopCommandSending() {
        debug('Stopping command sending');
        for (const lock of this.allLocks) {
            lock.clearQueueAndAbort(new Error('Stopping connection'));
        }
        if (this.exitUnsubscribe) {
            this.exitUnsubscribe();
            this.exitUnsubscribe = undefined;
        }
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }
    /**
     * Queue the handling of a received command
     * We do it via a queue as some of the handlers need to be async, and we don't want to block state updates from happening in parallel
     */
    queueHandleCommand(command) {
        debug(`Received command ${command.constructor.name}: ${JSON.stringify(command)}`);
        if (command instanceof DataTransfer_1.LockObtainedCommand || command instanceof DataTransfer_1.LockStateUpdateCommand) {
            let lock;
            if (command.properties.index === 0) {
                lock = (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_stillsLock, "f");
            }
            else if (command.properties.index >= 100) {
                // Looks like a special lock that we arent expecting
                // Ignore it for now
                return;
            }
            else {
                lock = (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_clipLocks, "f").get(command.properties.index - 1);
            }
            // Must be a clip that we aren't expecting
            if (!lock)
                lock = new dataTransferQueue_1.DataTransferLockingQueue(command.properties.index, (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_sendLockCommand, "f"), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferId, "f"));
            // handle actual command
            if (command instanceof DataTransfer_1.LockObtainedCommand) {
                lock.lockObtained();
            }
            else if (command instanceof DataTransfer_1.LockStateUpdateCommand) {
                lock.updateLock(command.properties.locked);
            }
            return;
        }
        // If this command is for a transfer
        if (command.properties.transferId !== undefined) {
            // try to establish the associated DataLock:
            let lock;
            for (const _lock of this.allLocks) {
                if (_lock.currentTransferId === command.properties.transferId) {
                    lock = _lock;
                }
            }
            // console.log('CMD', command.constructor.name)
            // Doesn't appear to be for a known lock
            // TODO - should we fire an abort back just in case?
            if (!lock)
                return;
            lock.handleCommand(command);
            // } else {
            // 	// debugging:
            // 	console.log('UNKNOWN COMMAND:', command)
        }
    }
    async uploadStill(index, data, name, description, options) {
        const buffer = (0, dataTransferUploadBuffer_1.generateBufferInfo)(data, !options?.disableRLE);
        const transfer = new dataTransferUploadStill_1.default(index, buffer, name, description);
        return (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_stillsLock, "f").enqueue(transfer);
    }
    async uploadClip(index, data, name, options) {
        const provideFrame = async function* () {
            let id = -1;
            for await (const frame of data) {
                id++;
                const buffer = (0, dataTransferUploadBuffer_1.generateBufferInfo)(frame, !options?.disableRLE);
                yield new dataTransferUploadClip_1.DataTransferUploadClipFrame(index, id, buffer);
            }
            return undefined;
        };
        const transfer = new dataTransferUploadClip_1.DataTransferUploadClip(index, name, provideFrame(), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferId, "f"));
        const lock = this.getClipLock(index);
        return lock.enqueue(transfer);
    }
    async uploadAudio(index, data, name) {
        const transfer = new dataTransferUploadAudio_1.default(index, data, name);
        const lock = this.getClipLock(index);
        return lock.enqueue(transfer);
    }
    async downloadMacro(index) {
        const transfer = new dataTransferDownloadMacro_1.DataTransferDownloadMacro(index);
        return (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_macroLock, "f").enqueue(transfer);
    }
    async uploadMacro(index, data, name) {
        const transfer = new dataTransferUploadMacro_1.DataTransferUploadMacro(index, data, name);
        return (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_macroLock, "f").enqueue(transfer);
    }
    async uploadMultiViewerLabel(index, data) {
        const transfer = new dataTransferUploadMultiViewerLabel_1.default(index, data);
        return (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_labelsLock, "f").enqueue(transfer);
    }
    getClipLock(index) {
        const lock = (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_clipLocks, "f").get(index);
        if (lock) {
            return lock;
        }
        else if (index >= 0 && index < 20) {
            const lock = new dataTransferQueue_1.DataTransferLockingQueue(index + 1, (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_sendLockCommand, "f"), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_nextTransferId, "f"));
            (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferManager_clipLocks, "f").set(index, lock);
            return lock;
        }
        else {
            throw new Error('Invalid clip index');
        }
    }
}
exports.DataTransferManager = DataTransferManager;
_DataTransferManager_nextTransferIdInner = new WeakMap(), _DataTransferManager_nextTransferId = new WeakMap(), _DataTransferManager_sendLockCommand = new WeakMap(), _DataTransferManager_stillsLock = new WeakMap(), _DataTransferManager_clipLocks = new WeakMap(), _DataTransferManager_labelsLock = new WeakMap(), _DataTransferManager_macroLock = new WeakMap(), _DataTransferManager_rawSendCommands = new WeakMap();
//# sourceMappingURL=index.js.map