/// <reference types="node" />
import { WritableCommand } from '../../CommandBase';
import { UpstreamKeyerMaskSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyMaskSetCommand extends WritableCommand<UpstreamKeyerMaskSettings> {
    static MaskFlags: {
        maskEnabled: number;
        maskTop: number;
        maskBottom: number;
        maskLeft: number;
        maskRight: number;
    };
    static readonly rawName = "CKMs";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyMaskSetCommand.d.ts.map