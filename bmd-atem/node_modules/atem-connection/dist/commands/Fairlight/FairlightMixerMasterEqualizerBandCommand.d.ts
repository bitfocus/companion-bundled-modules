/// <reference types="node" />
import { FairlightAudioEqualizerBandState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerMasterEqualizerBandCommand extends WritableCommand<OmitReadonly<FairlightAudioEqualizerBandState>> {
    static MaskFlags: {
        bandEnabled: number;
        shape: number;
        frequencyRange: number;
        frequency: number;
        gain: number;
        qFactor: number;
    };
    static readonly rawName = "CMBP";
    readonly band: number;
    constructor(band: number);
    serialize(): Buffer;
}
export declare class FairlightMixerMasterEqualizerBandUpdateCommand extends DeserializedCommand<FairlightAudioEqualizerBandState> {
    static readonly rawName = "AMBP";
    readonly band: number;
    constructor(band: number, properties: FairlightAudioEqualizerBandState);
    static deserialize(rawCommand: Buffer): FairlightMixerMasterEqualizerBandUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerMasterEqualizerBandCommand.d.ts.map