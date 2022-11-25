/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerAdvancedChromaSample } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyAdvancedChromaSampleCommand extends WritableCommand<UpstreamKeyerAdvancedChromaSample> {
    static MaskFlags: {
        enableCursor: number;
        preview: number;
        cursorX: number;
        cursorY: number;
        cursorSize: number;
        sampledY: number;
        sampledCb: number;
        sampledCr: number;
    };
    static readonly rawName = "CACC";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number);
    serialize(): Buffer;
}
export declare class MixEffectKeyAdvancedChromaSampleUpdateCommand extends DeserializedCommand<UpstreamKeyerAdvancedChromaSample> {
    static readonly rawName = "KACC";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerAdvancedChromaSample);
    static deserialize(rawCommand: Buffer): MixEffectKeyAdvancedChromaSampleUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyAdvancedChromaSampleCommand.d.ts.map