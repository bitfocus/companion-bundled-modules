"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferAckCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferAckCommand extends CommandBase_1.SymmetricalCommand {
    static deserialize(rawCommand) {
        const properties = {
            transferId: rawCommand.readUInt16BE(0),
            transferIndex: rawCommand.readUInt8(2),
        };
        return new DataTransferAckCommand(properties);
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.transferId);
        buffer.writeUInt8(this.properties.transferIndex, 2);
        return buffer;
    }
    applyToState() {
        // Nothing to do
        return [];
    }
}
exports.DataTransferAckCommand = DataTransferAckCommand;
DataTransferAckCommand.rawName = 'FTUA';
//# sourceMappingURL=DataTransferAckCommand.js.map