"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferDataCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferDataCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        buffer.writeUInt16BE(this.properties.body.length, 2);
        return Buffer.concat([buffer, this.properties.body]);
    }
    static deserialize(rawCommand) {
        const properties = {
            transferId: rawCommand.readUInt16BE(0),
            size: rawCommand.readUInt16BE(2),
            body: rawCommand.slice(4, 4 + rawCommand.readUInt16BE(2)),
        };
        return new DataTransferDataCommand(properties);
    }
    applyToState() {
        // Nothing to do
        return [];
    }
}
exports.DataTransferDataCommand = DataTransferDataCommand;
DataTransferDataCommand.rawName = 'FTDa';
//# sourceMappingURL=DataTransferDataCommand.js.map