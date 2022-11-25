"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferFileDescriptionCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferFileDescriptionCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(212);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        if (this.properties.name)
            buffer.write(this.properties.name, 2, 64);
        if (this.properties.description)
            buffer.write(this.properties.description, 66, 128);
        Buffer.from(this.properties.fileHash, 'base64').copy(buffer, 194, 0, 16);
        return buffer;
    }
}
exports.DataTransferFileDescriptionCommand = DataTransferFileDescriptionCommand;
DataTransferFileDescriptionCommand.rawName = 'FTFD';
//# sourceMappingURL=DataTransferFileDescriptionCommand.js.map