"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferCompleteCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferCompleteCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            transferId: rawCommand.readUInt16BE(0),
        };
        return new DataTransferCompleteCommand(properties);
    }
    applyToState() {
        // Nothing to do
        return [];
    }
}
exports.DataTransferCompleteCommand = DataTransferCompleteCommand;
DataTransferCompleteCommand.rawName = 'FTDC';
//# sourceMappingURL=DataTransferCompleteCommand.js.map