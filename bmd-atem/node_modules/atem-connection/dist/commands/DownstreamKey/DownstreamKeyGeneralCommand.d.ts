/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
import { DownstreamKeyerGeneral } from '../../state/video/downstreamKeyers';
export declare class DownstreamKeyGeneralCommand extends WritableCommand<DownstreamKeyerGeneral> {
    static MaskFlags: {
        preMultiply: number;
        clip: number;
        gain: number;
        invert: number;
    };
    static readonly rawName = "CDsG";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyGeneralCommand.d.ts.map