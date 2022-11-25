"use strict";
var _DataTransferUploadBuffer_bytesSent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferUploadBuffer = void 0;
const tslib_1 = require("tslib");
const DataTransfer_1 = require("../commands/DataTransfer");
const crypto = require("crypto");
const dataTransfer_1 = require("./dataTransfer");
const debug0 = require("debug");
const debug = debug0('atem-connection:data-transfer:upload-buffer');
class DataTransferUploadBuffer extends dataTransfer_1.DataTransfer {
    constructor(data) {
        super();
        _DataTransferUploadBuffer_bytesSent.set(this, 0);
        this.data = data;
        this.hash = this.data ? crypto.createHash('md5').update(this.data).digest().toString() : '';
    }
    async handleCommand(command, oldState) {
        if (command instanceof DataTransfer_1.DataTransferErrorCommand) {
            switch (command.properties.errorCode) {
                case DataTransfer_1.ErrorCode.Retry:
                    return this.restartTransfer(command.properties.transferId);
                case DataTransfer_1.ErrorCode.NotFound:
                    this.abort(new Error('Invalid upload'));
                    return {
                        newState: dataTransfer_1.DataTransferState.Finished,
                        commands: [],
                    };
                default:
                    // Abort the transfer.
                    this.abort(new Error(`Unknown error ${command.properties.errorCode}`));
                    return {
                        newState: dataTransfer_1.DataTransferState.Finished,
                        commands: [],
                    };
            }
        }
        else if (command instanceof DataTransfer_1.DataTransferUploadContinueCommand) {
            const result = {
                newState: oldState,
                commands: [],
            };
            // Atem requested more packets of data
            if (oldState === dataTransfer_1.DataTransferState.Ready) {
                // First bunch of packets, also send the description
                result.newState = dataTransfer_1.DataTransferState.Transferring;
                result.commands.push(this.generateDescriptionCommand(command.properties.transferId));
            }
            const nextChunks = this.getNextChunks(command.properties);
            result.commands.push(...nextChunks);
            // if (nextChunks.length === 0) this.abort(new Error('Ran out of data'))
            return result;
        }
        else if (command instanceof DataTransfer_1.DataTransferCompleteCommand) {
            // Atem reports that it recieved everything
            if (oldState === dataTransfer_1.DataTransferState.Transferring) {
                this.resolvePromise();
                return {
                    newState: dataTransfer_1.DataTransferState.Finished,
                    commands: [],
                };
            }
            else {
                return { newState: oldState, commands: [] };
            }
        }
        else {
            // Unknown command
            return { newState: oldState, commands: [] };
        }
    }
    getNextChunks(props) {
        const commands = [];
        // Take a little less because the atem does that?
        const chunkSize = props.chunkSize - 4;
        for (let i = 0; i < props.chunkCount; i++) {
            // Make sure we don't end up with an empty slice
            if ((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadBuffer_bytesSent, "f") >= this.data.length)
                break;
            commands.push(new DataTransfer_1.DataTransferDataCommand({
                transferId: props.transferId,
                body: this.data.slice((0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadBuffer_bytesSent, "f"), (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadBuffer_bytesSent, "f") + chunkSize),
            }));
            (0, tslib_1.__classPrivateFieldSet)(this, _DataTransferUploadBuffer_bytesSent, (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadBuffer_bytesSent, "f") + chunkSize, "f");
        }
        debug(`Generated ${commands.length} chunks for size ${chunkSize}`);
        return commands;
    }
}
exports.DataTransferUploadBuffer = DataTransferUploadBuffer;
_DataTransferUploadBuffer_bytesSent = new WeakMap();
//# sourceMappingURL=dataTransferUploadBuffer.js.map