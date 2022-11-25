/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerPatternSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyPatternCommand extends WritableCommand<UpstreamKeyerPatternSettings> {
    static MaskFlags: {
        style: number;
        size: number;
        symmetry: number;
        softness: number;
        positionX: number;
        positionY: number;
        invert: number;
    };
    static readonly rawName = "CKPt";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyUpdateCommand extends DeserializedCommand<UpstreamKeyerPatternSettings> {
    static readonly rawName = "KePt";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerPatternSettings);
    static deserialize(rawCommand: Buffer): MixEffectKeyUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyPatternCommand.d.ts.map