/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class DownstreamKeyFillSourceCommand extends BasicWritableCommand<{
    input: number;
}> {
    static readonly rawName = "CDsF";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, input: number);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyFillSourceCommand.d.ts.map