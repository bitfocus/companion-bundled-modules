/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
import { ProtocolVersion } from '../../enums';
export declare class DownstreamKeyAutoCommand extends WritableCommand<{
    isTowardsOnAir: boolean;
}> {
    static readonly MaskFlags: {
        isTowardsOnAir: number;
    };
    static readonly rawName = "DDsA";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number);
    serialize(version: ProtocolVersion): Buffer;
}
//# sourceMappingURL=DownstreamKeyAutoCommand.d.ts.map