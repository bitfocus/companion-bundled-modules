/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class MediaPoolClearClipCommand extends BasicWritableCommand<{
    index: number;
}> {
    static readonly rawName = "CMPC";
    constructor(index: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MediaPoolClearClipCommand.d.ts.map