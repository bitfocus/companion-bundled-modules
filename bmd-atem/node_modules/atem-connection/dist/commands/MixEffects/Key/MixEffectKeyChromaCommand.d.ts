/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerChromaSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyChromaCommand extends WritableCommand<UpstreamKeyerChromaSettings> {
    static MaskFlags: {
        hue: number;
        gain: number;
        ySuppress: number;
        lift: number;
        narrow: number;
    };
    static readonly rawName = "CKCk";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyChromaUpdateCommand extends DeserializedCommand<UpstreamKeyerChromaSettings> {
    static readonly rawName = "KeCk";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerChromaSettings);
    static deserialize(rawCommand: Buffer): MixEffectKeyChromaUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyChromaCommand.d.ts.map