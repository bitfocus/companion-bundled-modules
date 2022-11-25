/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
export declare class DataTransferCompleteCommand extends DeserializedCommand<{
    transferId: number;
}> {
    static readonly rawName = "FTDC";
    static deserialize(rawCommand: Buffer): DataTransferCompleteCommand;
    applyToState(): string[];
}
//# sourceMappingURL=DataTransferCompleteCommand.d.ts.map