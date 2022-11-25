/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class DownstreamKeyTieCommand extends BasicWritableCommand<{
    tie: boolean;
}> {
    static readonly rawName = "CDsT";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, tie: boolean);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyTieCommand.d.ts.map