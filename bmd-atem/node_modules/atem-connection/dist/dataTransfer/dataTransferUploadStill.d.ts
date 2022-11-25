/// <reference types="node" />
import { ISerializableCommand } from '../commands/CommandBase';
import { DataTransferUploadBuffer } from './dataTransferUploadBuffer';
import { ProgressTransferResult } from './dataTransfer';
export default class DataTransferUploadStill extends DataTransferUploadBuffer {
    #private;
    constructor(stillIndex: number, data: Buffer, name: string, description: string);
    startTransfer(transferId: number): Promise<ProgressTransferResult>;
    protected generateDescriptionCommand(transferId: number): ISerializableCommand;
}
//# sourceMappingURL=dataTransferUploadStill.d.ts.map