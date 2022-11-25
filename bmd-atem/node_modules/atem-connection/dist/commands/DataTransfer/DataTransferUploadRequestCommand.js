"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferUploadRequestCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferUploadRequestCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        buffer.writeUInt16BE(this.properties.transferStoreId, 2);
        buffer.writeUInt16BE(this.properties.transferIndex, 6);
        buffer.writeUInt32BE(this.properties.size, 8);
        buffer.writeUInt16BE(this.properties.mode, 12);
        return buffer;
    }
}
exports.DataTransferUploadRequestCommand = DataTransferUploadRequestCommand;
DataTransferUploadRequestCommand.rawName = 'FTSD';
//# sourceMappingURL=DataTransferUploadRequestCommand.js.map