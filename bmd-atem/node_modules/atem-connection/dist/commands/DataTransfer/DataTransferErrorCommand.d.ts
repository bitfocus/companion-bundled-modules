/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
/** The known error codes */
export declare enum ErrorCode {
    Retry = 1,
    NotFound = 2,
    NotLocked = 5
}
export interface DataTransferErrorProps {
    transferId: number;
    errorCode: ErrorCode;
}
export declare class DataTransferErrorCommand extends DeserializedCommand<DataTransferErrorProps> {
    static readonly rawName = "FTDE";
    static deserialize(rawCommand: Buffer): DataTransferErrorCommand;
    applyToState(): string[];
}
//# sourceMappingURL=DataTransferErrorCommand.d.ts.map