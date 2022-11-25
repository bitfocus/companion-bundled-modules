/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerAdvancedChromaProperties } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyAdvancedChromaPropertiesCommand extends WritableCommand<UpstreamKeyerAdvancedChromaProperties> {
    static MaskFlags: {
        foregroundLevel: number;
        backgroundLevel: number;
        keyEdge: number;
        spillSuppression: number;
        flareSuppression: number;
        brightness: number;
        contrast: number;
        saturation: number;
        red: number;
        green: number;
        blue: number;
    };
    static readonly rawName = "CACK";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyAdvancedChromaPropertiesUpdateCommand extends DeserializedCommand<UpstreamKeyerAdvancedChromaProperties> {
    static readonly rawName = "KACk";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerAdvancedChromaProperties);
    static deserialize(rawCommand: Buffer): MixEffectKeyAdvancedChromaPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyAdvancedChromaPropertiesCommand.d.ts.map