/// <reference types="node" />
import { BasicWritableCommand, IDeserializedCommand } from '../CommandBase';
export interface DataTransferDataProps {
    transferId: number;
    body: Buffer;
}
export declare class DataTransferDataCommand extends BasicWritableCommand<DataTransferDataProps> implements IDeserializedCommand {
    static readonly rawName = "FTDa";
    serialize(): Buffer;
    static deserialize(rawCommand: Buffer): DataTransferDataCommand;
    applyToState(): string[];
}
//# sourceMappingURL=DataTransferDataCommand.d.ts.map