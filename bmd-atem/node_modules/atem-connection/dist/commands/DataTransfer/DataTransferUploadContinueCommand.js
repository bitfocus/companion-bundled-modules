"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferUploadContinueCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferUploadContinueCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            transferId: rawCommand.readUInt16BE(0),
            chunkSize: rawCommand.readUInt16BE(6),
            chunkCount: rawCommand.readUInt16BE(8),
        };
        return new DataTransferUploadContinueCommand(properties);
    }
    applyToState() {
        // Nothing to do
        return [];
    }
}
exports.DataTransferUploadContinueCommand = DataTransferUploadContinueCommand;
DataTransferUploadContinueCommand.rawName = 'FTCD';
//# sourceMappingURL=DataTransferUploadContinueCommand.js.map