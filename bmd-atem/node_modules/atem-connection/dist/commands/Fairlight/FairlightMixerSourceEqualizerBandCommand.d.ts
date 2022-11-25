/// <reference types="node" />
import { FairlightAudioEqualizerBandState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerSourceEqualizerBandCommand extends WritableCommand<OmitReadonly<FairlightAudioEqualizerBandState>> {
    static MaskFlags: {
        bandEnabled: number;
        shape: number;
        frequencyRange: number;
        frequency: number;
        gain: number;
        qFactor: number;
    };
    static readonly rawName = "CEBP";
    readonly index: number;
    readonly source: bigint;
    readonly band: number;
    constructor(index: number, source: bigint, band: number);
    serialize(): Buffer;
}
export declare class FairlightMixerSourceEqualizerBandUpdateCommand extends DeserializedCommand<FairlightAudioEqualizerBandState> {
    static readonly rawName = "AEBP";
    readonly index: number;
    readonly source: bigint;
    readonly band: number;
    constructor(index: number, source: bigint, band: number, properties: FairlightAudioEqualizerBandState);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceEqualizerBandUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerSourceEqualizerBandCommand.d.ts.map