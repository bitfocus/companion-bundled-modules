/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export interface DataTransferUploadRequestProps {
    transferId: number;
    transferStoreId: number;
    transferIndex: number;
    size: number;
    mode: number;
}
export declare class DataTransferUploadRequestCommand extends BasicWritableCommand<DataTransferUploadRequestProps> {
    static readonly rawName = "FTSD";
    serialize(): Buffer;
}
//# sourceMappingURL=DataTransferUploadRequestCommand.d.ts.map