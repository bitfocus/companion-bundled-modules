/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class MediaPoolClearStillCommand extends BasicWritableCommand<{
    index: number;
}> {
    static readonly rawName = "CSTL";
    constructor(index: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MediaPoolClearStillCommand.d.ts.map