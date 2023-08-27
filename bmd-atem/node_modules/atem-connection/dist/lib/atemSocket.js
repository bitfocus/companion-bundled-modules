"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtemSocket = void 0;
const eventemitter3_1 = require("eventemitter3");
const atemCommandParser_1 = require("./atemCommandParser");
const exitHook = require("exit-hook");
const commands_1 = require("../commands");
const atem_1 = require("../atem");
const threadedclass_1 = require("threadedclass");
class AtemSocket extends eventemitter3_1.EventEmitter {
    constructor(options) {
        super();
        this._commandParser = new atemCommandParser_1.CommandParser();
        this._nextCommandTrackingId = 0;
        this._isDisconnecting = false;
        this._port = atem_1.DEFAULT_PORT;
        this._address = options.address;
        this._port = options.port;
        this._debugBuffers = options.debugBuffers;
        this._disableMultithreaded = options.disableMultithreaded;
        this._childProcessTimeout = options.childProcessTimeout;
    }
    async connect(address, port) {
        this._isDisconnecting = false;
        if (address) {
            this._address = address;
        }
        if (port) {
            this._port = port;
        }
        if (!this._socketProcess) {
            // cache the creation promise, in case `destroy` is called before it completes
            this._creatingSocket = this._createSocketProcess();
            await this._creatingSocket;
            if (this._isDisconnecting || !this._socketProcess) {
                throw new Error('Disconnecting');
            }
        }
        await this._socketProcess.connect(this._address, this._port);
    }
    async destroy() {
        await this.disconnect();
        // Ensure thread creation has finished if it was started
        if (this._creatingSocket)
            await this._creatingSocket.catch(() => null);
        if (this._socketProcess) {
            await threadedclass_1.ThreadedClassManager.destroy(this._socketProcess);
            this._socketProcess = undefined;
        }
        if (this._exitUnsubscribe) {
            this._exitUnsubscribe();
            this._exitUnsubscribe = undefined;
        }
    }
    async disconnect() {
        this._isDisconnecting = true;
        if (this._socketProcess) {
            await this._socketProcess.disconnect();
        }
    }
    get nextCommandTrackingId() {
        if (this._nextCommandTrackingId >= Number.MAX_SAFE_INTEGER) {
            this._nextCommandTrackingId = 0;
        }
        return ++this._nextCommandTrackingId;
    }
    async sendCommands(commands) {
        if (this._socketProcess) {
            const wrappedCommands = commands.map((cmd) => {
                if (typeof cmd.rawCommand.serialize !== 'function') {
                    throw new Error(`Command ${cmd.rawCommand.constructor.name} is not serializable`);
                }
                const payload = cmd.rawCommand.serialize(this._commandParser.version);
                if (this._debugBuffers)
                    this.emit('debug', `PAYLOAD ${cmd.rawCommand.constructor.name} ${payload.toString('hex')}`);
                return {
                    payload: [...payload],
                    rawName: cmd.rawCommand.constructor.rawName,
                    trackingId: cmd.trackingId,
                };
            });
            await this._socketProcess.sendCommands(wrappedCommands);
        }
        else {
            throw new Error('Socket process is not open');
        }
    }
    async _createSocketProcess() {
        this._socketProcess = await (0, threadedclass_1.threadedClass)('./atemSocketChild', 'AtemSocketChild', [
            {
                address: this._address,
                port: this._port,
                debugBuffers: this._debugBuffers,
            },
            async () => {
                this.emit('disconnect');
            },
            async (message) => {
                this.emit('info', message);
            },
            async (payload) => {
                this._parseCommands(Buffer.from(payload));
            },
            async (ids) => {
                this.emit('commandsAck', ids.map((id) => id.trackingId));
            }, // onCommandsAcknowledged
        ], {
            instanceName: 'atem-connection',
            freezeLimit: this._childProcessTimeout,
            autoRestart: true,
            disableMultithreading: this._disableMultithreaded,
        });
        threadedclass_1.ThreadedClassManager.onEvent(this._socketProcess, 'restarted', () => {
            this.connect().catch((error) => {
                const errorMsg = `Failed to reconnect after respawning socket process: ${error}`;
                this.emit('error', errorMsg);
            });
        });
        threadedclass_1.ThreadedClassManager.onEvent(this._socketProcess, 'thread_closed', () => {
            this.emit('disconnect');
        });
        this._exitUnsubscribe = exitHook(() => {
            this.destroy().catch(() => null);
        });
    }
    _parseCommands(buffer) {
        const parsedCommands = [];
        while (buffer.length > 8) {
            const length = buffer.readUInt16BE(0);
            const name = buffer.toString('ascii', 4, 8);
            if (length < 8) {
                // Commands are never less than 8, as that is the header
                break;
            }
            const cmdConstructor = this._commandParser.commandFromRawName(name);
            if (cmdConstructor && typeof cmdConstructor.deserialize === 'function') {
                try {
                    const cmd = cmdConstructor.deserialize(buffer.slice(8, length), this._commandParser.version);
                    if (cmd instanceof commands_1.VersionCommand) {
                        // init started
                        this._commandParser.version = cmd.properties.version;
                    }
                    parsedCommands.push(cmd);
                }
                catch (e) {
                    this.emit('error', `Failed to deserialize command: ${cmdConstructor.constructor.name}: ${e}`);
                }
            }
            else {
                this.emit('debug', `Unknown command ${name} (${length}b)`);
            }
            // Trim the buffer
            buffer = buffer.slice(length);
        }
        if (parsedCommands.length > 0) {
            this.emit('commandsReceived', parsedCommands);
        }
        return parsedCommands;
    }
}
exports.AtemSocket = AtemSocket;
//# sourceMappingURL=atemSocket.js.map