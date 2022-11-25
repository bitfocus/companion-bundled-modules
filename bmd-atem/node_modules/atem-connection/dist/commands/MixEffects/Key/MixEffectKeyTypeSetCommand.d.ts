/// <reference types="node" />
import { WritableCommand } from '../../CommandBase';
import { UpstreamKeyerTypeSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyTypeSetCommand extends WritableCommand<UpstreamKeyerTypeSettings> {
    static MaskFlags: {
        mixEffectKeyType: number;
        flyEnabled: number;
    };
    static readonly rawName = "CKTp";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyTypeSetCommand.d.ts.map