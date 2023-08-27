/// <reference types="node" />
import { IDeserializedCommand, ISerializableCommand } from '../commands/CommandBase';
import { DataTransfer, ProgressTransferResult, DataTransferState } from './dataTransfer';
export interface UploadBufferInfo {
    encodedData: Buffer;
    rawDataLength: number;
    hash: string | null;
}
export declare function generateHashForBuffer(data: Buffer): string;
export declare function generateBufferInfo(data: Buffer, shouldEncodeRLE: boolean): UploadBufferInfo;
export declare abstract class DataTransferUploadBuffer extends DataTransfer<void> {
    #private;
    protected readonly hash: string;
    protected readonly data: Buffer;
    constructor(buffer: UploadBufferInfo);
    protected abstract generateDescriptionCommand(transferId: number): ISerializableCommand;
    handleCommand(command: IDeserializedCommand, oldState: DataTransferState): Promise<ProgressTransferResult>;
    private getNextChunks;
}
//# sourceMappingURL=dataTransferUploadBuffer.d.ts.map