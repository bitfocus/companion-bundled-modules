/// <reference types="node" />
import { ISerializableCommand } from '../commands/CommandBase';
import { ProgressTransferResult } from './dataTransfer';
import { DataTransferUploadBuffer } from './dataTransferUploadBuffer';
export declare class DataTransferUploadMacro extends DataTransferUploadBuffer {
    readonly macroIndex: number;
    readonly data: Buffer;
    private name;
    constructor(macroIndex: number, data: Buffer, name: string);
    startTransfer(transferId: number): Promise<ProgressTransferResult>;
    protected generateDescriptionCommand(transferId: number): ISerializableCommand;
}
//# sourceMappingURL=dataTransferUploadMacro.d.ts.map