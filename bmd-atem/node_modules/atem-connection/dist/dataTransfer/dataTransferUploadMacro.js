"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransferUploadMacro = void 0;
const DataTransfer_1 = require("../commands/DataTransfer");
const dataTransfer_1 = require("./dataTransfer");
const dataTransferUploadBuffer_1 = require("./dataTransferUploadBuffer");
class DataTransferUploadMacro extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
    constructor(macroIndex, data, name) {
        super({
            encodedData: data,
            rawDataLength: data.length,
            hash: null,
        });
        this.macroIndex = macroIndex;
        this.data = data;
        this.name = name;
    }
    async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
            transferId: transferId,
            transferStoreId: 0xffff,
            transferIndex: this.macroIndex,
            size: this.data.length,
            mode: 768,
        });
        return {
            newState: dataTransfer_1.DataTransferState.Ready,
            commands: [command],
        };
    }
    generateDescriptionCommand(transferId) {
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
            name: this.name,
            description: undefined,
            fileHash: '',
            transferId: transferId,
        });
    }
}
exports.DataTransferUploadMacro = DataTransferUploadMacro;
//# sourceMappingURL=dataTransferUploadMacro.js.map