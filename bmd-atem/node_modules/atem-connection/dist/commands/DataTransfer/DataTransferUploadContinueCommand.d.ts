/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
export interface DataTransferUploadContinueProps {
    transferId: number;
    chunkSize: number;
    chunkCount: number;
}
export declare class DataTransferUploadContinueCommand extends DeserializedCommand<DataTransferUploadContinueProps> {
    static readonly rawName = "FTCD";
    static deserialize(rawCommand: Buffer): DataTransferUploadContinueCommand;
    applyToState(): string[];
}
//# sourceMappingURL=DataTransferUploadContinueCommand.d.ts.map