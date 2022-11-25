/// <reference types="node" />
import { ISerializableCommand } from '../commands/CommandBase';
import { DataTransferUploadBuffer } from './dataTransferUploadBuffer';
import { ProgressTransferResult } from './dataTransfer';
export default class DataTransferUploadMultiViewerLabel extends DataTransferUploadBuffer {
    #private;
    constructor(sourceId: number, data: Buffer);
    startTransfer(transferId: number): Promise<ProgressTransferResult>;
    protected generateDescriptionCommand(transferId: number): ISerializableCommand;
}
//# sourceMappingURL=dataTransferUploadMultiViewerLabel.d.ts.map