"use strict";
var _DataTransferUploadStill_stillIndex, _DataTransferUploadStill_name, _DataTransferUploadStill_description;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dataTransferUploadBuffer_1 = require("./dataTransferUploadBuffer");
const DataTransfer_1 = require("../commands/DataTransfer");
const dataTransfer_1 = require("./dataTransfer");
class DataTransferUploadStill extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
    constructor(stillIndex, data, name, description) {
        super(data);
        _DataTransferUploadStill_stillIndex.set(this, void 0);
        _DataTransferUploadStill_name.set(this, void 0);
        _DataTransferUploadStill_description.set(this, void 0);
        (0, tslib_1.__classPrivateFieldSet)(this, _DataTransferUploadStill_stillIndex, stillIndex, "f");
        (0, tslib_1.__classPrivateFieldSet)(this, _DataTransferUploadStill_name, name, "f");
        (0, tslib_1.__classPrivateFieldSet)(this, _DataTransferUploadStill_description, description, "f");
    }
    async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
            transferId: transferId,
            transferStoreId: 0,
            transferIndex: (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadStill_stillIndex, "f"),
            size: this.data.length,
            mode: 1,
        });
        return {
            newState: dataTransfer_1.DataTransferState.Ready,
            commands: [command],
        };
    }
    generateDescriptionCommand(transferId) {
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
            description: (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadStill_description, "f"),
            name: (0, tslib_1.__classPrivateFieldGet)(this, _DataTransferUploadStill_name, "f"),
            fileHash: this.hash,
            transferId: transferId,
        });
    }
}
exports.default = DataTransferUploadStill;
_DataTransferUploadStill_stillIndex = new WeakMap(), _DataTransferUploadStill_name = new WeakMap(), _DataTransferUploadStill_description = new WeakMap();
//# sourceMappingURL=dataTransferUploadStill.js.map