/// <reference types="node" />
import { IDeserializedCommand, ISerializableCommand } from '../commands/CommandBase';
import { DataTransfer, ProgressTransferResult, DataTransferState } from './dataTransfer';
export declare abstract class DataTransferUploadBuffer extends DataTransfer<void> {
    #private;
    protected readonly hash: string;
    protected readonly data: Buffer;
    constructor(data: Buffer);
    protected abstract generateDescriptionCommand(transferId: number): ISerializableCommand;
    handleCommand(command: IDeserializedCommand, oldState: DataTransferState): Promise<ProgressTransferResult>;
    private getNextChunks;
}
//# sourceMappingURL=dataTransferUploadBuffer.d.ts.map