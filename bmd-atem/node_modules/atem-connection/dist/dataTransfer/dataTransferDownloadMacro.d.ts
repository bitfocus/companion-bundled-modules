/// <reference types="node" />
import { IDeserializedCommand } from '../commands/CommandBase';
import { DataTransfer, ProgressTransferResult, DataTransferState } from './dataTransfer';
export declare class DataTransferDownloadMacro extends DataTransfer<Buffer> {
    #private;
    readonly macroIndex: number;
    constructor(macroIndex: number);
    startTransfer(transferId: number): Promise<ProgressTransferResult>;
    handleCommand(command: IDeserializedCommand, oldState: DataTransferState): Promise<ProgressTransferResult>;
}
//# sourceMappingURL=dataTransferDownloadMacro.d.ts.map