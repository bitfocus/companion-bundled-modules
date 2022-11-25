"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferErrorCommand = exports.ErrorCode = void 0;
const CommandBase_1 = require("../CommandBase");
/** The known error codes */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Retry"] = 1] = "Retry";
    ErrorCode[ErrorCode["NotFound"] = 2] = "NotFound";
    ErrorCode[ErrorCode["NotLocked"] = 5] = "NotLocked";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class DataTransferErrorCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            transferId: rawCommand.readUInt16BE(0),
            errorCode: rawCommand.readUInt8(2),
        };
        return new DataTransferErrorCommand(properties);
    }
    applyToState() {
        // Nothing to do
        return [];
    }
}
exports.DataTransferErrorCommand = DataTransferErrorCommand;
DataTransferErrorCommand.rawName = 'FTDE';
//# sourceMappingURL=DataTransferErrorCommand.js.map