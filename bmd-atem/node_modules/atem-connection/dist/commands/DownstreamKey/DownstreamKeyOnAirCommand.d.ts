/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class DownstreamKeyOnAirCommand extends BasicWritableCommand<{
    onAir: boolean;
}> {
    static readonly rawName = "CDsL";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, onAir: boolean);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyOnAirCommand.d.ts.map