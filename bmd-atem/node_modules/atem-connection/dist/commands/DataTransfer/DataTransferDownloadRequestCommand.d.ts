/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export interface DataTransferDownloadRequestProps {
    transferId: number;
    transferStoreId: number;
    transferIndex: number;
    transferType: number;
}
export declare class DataTransferDownloadRequestCommand extends BasicWritableCommand<DataTransferDownloadRequestProps> {
    static readonly rawName = "FTSU";
    serialize(): Buffer;
}
//# sourceMappingURL=DataTransferDownloadRequestCommand.d.ts.map