/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand, WritableCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerFlyKeyframe } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyFlyKeyframeUpdateCommand extends DeserializedCommand<Omit<UpstreamKeyerFlyKeyframe, 'keyFrameId'>> {
    static readonly rawName = "KKFP";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    readonly keyFrameId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, keyFrameId: number, properties: Omit<UpstreamKeyerFlyKeyframe, 'keyFrameId'>);
    static deserialize(rawCommand: Buffer): MixEffectKeyFlyKeyframeUpdateCommand;
    applyToState(state: AtemState): string;
}
export declare class MixEffectKeyFlyKeyframeCommand extends WritableCommand<Omit<UpstreamKeyerFlyKeyframe, 'keyFrameId'>> {
    static MaskFlags: {
        sizeX: number;
        sizeY: number;
        positionX: number;
        positionY: number;
        rotation: number;
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
        maskTop: number;
        maskBottom: number;
        maskLeft: number;
        maskRight: number;
    };
    static readonly rawName = "CKFP";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    readonly keyFrameId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, keyFrameId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyFlyKeyframeStoreCommand extends BasicWritableCommand<unknown> {
    static readonly rawName = "SFKF";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    readonly keyFrameId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, keyFrameId: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyFlyKeyframeCommand.d.ts.map