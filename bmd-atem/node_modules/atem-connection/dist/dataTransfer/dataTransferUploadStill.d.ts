import { ISerializableCommand } from '../commands/CommandBase';
import { ProgressTransferResult } from './dataTransfer';
import { DataTransferUploadBuffer, UploadBufferInfo } from './dataTransferUploadBuffer';
export default class DataTransferUploadStill extends DataTransferUploadBuffer {
    #private;
    constructor(stillIndex: number, buffer: UploadBufferInfo, name: string, description: string);
    startTransfer(transferId: number): Promise<ProgressTransferResult>;
    protected generateDescriptionCommand(transferId: number): ISerializableCommand;
}
//# sourceMappingURL=dataTransferUploadStill.d.ts.map