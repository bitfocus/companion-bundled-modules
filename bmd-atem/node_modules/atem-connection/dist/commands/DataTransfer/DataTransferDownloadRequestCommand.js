"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferDownloadRequestCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DataTransferDownloadRequestCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        buffer.writeUInt16BE(this.properties.transferStoreId, 2);
        buffer.writeUInt16BE(this.properties.transferIndex, 6);
        buffer.writeUInt8(this.properties.transferType, 8);
        return buffer;
    }
}
exports.DataTransferDownloadRequestCommand = DataTransferDownloadRequestCommand;
DataTransferDownloadRequestCommand.rawName = 'FTSU';
//# sourceMappingURL=DataTransferDownloadRequestCommand.js.map