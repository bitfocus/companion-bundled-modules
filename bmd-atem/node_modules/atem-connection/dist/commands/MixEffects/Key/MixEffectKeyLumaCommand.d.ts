/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerLumaSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyLumaCommand extends WritableCommand<UpstreamKeyerLumaSettings> {
    static MaskFlags: {
        preMultiplied: number;
        clip: number;
        gain: number;
        invert: number;
    };
    static readonly rawName = "CKLm";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyLumaUpdateCommand extends DeserializedCommand<UpstreamKeyerLumaSettings> {
    static readonly rawName = "KeLm";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerLumaSettings);
    static deserialize(rawCommand: Buffer): MixEffectKeyLumaUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyLumaCommand.d.ts.map