/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export interface DataTransferFileDescriptionProps {
    transferId: number;
    name: string | undefined;
    description: string | undefined;
    fileHash: string;
}
export declare class DataTransferFileDescriptionCommand extends BasicWritableCommand<DataTransferFileDescriptionProps> {
    static readonly rawName = "FTFD";
    serialize(): Buffer;
}
//# sourceMappingURL=DataTransferFileDescriptionCommand.d.ts.map