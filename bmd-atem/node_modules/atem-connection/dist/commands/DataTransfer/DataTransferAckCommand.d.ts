/// <reference types="node" />
import { SymmetricalCommand } from '../CommandBase';
export interface DataTransferAckProps {
    transferId: number;
    transferIndex: number;
}
export declare class DataTransferAckCommand extends SymmetricalCommand<DataTransferAckProps> {
    static readonly rawName = "FTUA";
    static deserialize(rawCommand: Buffer): DataTransferAckCommand;
    serialize(): Buffer;
    applyToState(): string[];
}
//# sourceMappingURL=DataTransferAckCommand.d.ts.map