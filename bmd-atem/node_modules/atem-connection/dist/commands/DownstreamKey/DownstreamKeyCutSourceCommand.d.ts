/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class DownstreamKeyCutSourceCommand extends BasicWritableCommand<{
    input: number;
}> {
    static readonly rawName = "CDsC";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, input: number);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyCutSourceCommand.d.ts.map