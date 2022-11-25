/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
import { DownstreamKeyerMask } from '../../state/video/downstreamKeyers';
export declare class DownstreamKeyMaskCommand extends WritableCommand<DownstreamKeyerMask> {
    static MaskFlags: {
        enabled: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    static readonly rawName = "CDsM";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyMaskCommand.d.ts.map