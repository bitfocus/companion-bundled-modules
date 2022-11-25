/// <reference types="node" />
import { ISerializableCommand } from '../commands/CommandBase';
import { DataTransferUploadBuffer } from './dataTransferUploadBuffer';
import { ProgressTransferResult } from './dataTransfer';
export default class DataTransferUploadAudio extends DataTransferUploadBuffer {
    #private;
    constructor(clipIndex: number, data: Buffer, name: string);
    startTransfer(transferId: number): Promise<ProgressTransferResult>;
    protected generateDescriptionCommand(transferId: number): ISerializableCommand;
}
//# sourceMappingURL=dataTransferUploadAudio.d.ts.map