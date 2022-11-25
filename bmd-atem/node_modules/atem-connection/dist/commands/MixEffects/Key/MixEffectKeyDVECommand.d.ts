/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerDVESettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyDVECommand extends WritableCommand<UpstreamKeyerDVESettings> {
    static MaskFlags: {
        sizeX: number;
        sizeY: number;
        positionX: number;
        positionY: number;
        rotation: number;
        borderEnabled: number;
        shadowEnabled: number;
        borderBevel: number;
        borderOuterWidth: number;
        borderInnerWidth: number;
        borderOuterSoftness: number;
        borderInnerSoftness: number;
        borderBevelSoftness: number;
        borderBevelPosition: number;
        borderOpacity: number;
        borderHue: number;
        borderSaturation: number;
        borderLuma: number;
        lightSourceDirection: number;
        lightSourceAltitude: number;
        maskEnabled: number;
        maskTop: number;
        maskBottom: number;
        maskLeft: number;
        maskRight: number;
        rate: number;
    };
    static readonly rawName = "CKDV";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyDVEUpdateCommand extends DeserializedCommand<UpstreamKeyerDVESettings> {
    static readonly rawName = "KeDV";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerDVESettings);
    static deserialize(rawCommand: Buffer): MixEffectKeyDVEUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyDVECommand.d.ts.map