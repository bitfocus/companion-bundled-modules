/// <reference types="node" />
import { FairlightAudioSourcePropertiesState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerSourceDeleteCommand extends DeserializedCommand<Record<string, never>> {
    static readonly rawName = "FASD";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceDeleteCommand;
    applyToState(state: AtemState): string | string[];
}
export interface FairlightMixerSourceCommandProperties extends FairlightAudioSourcePropertiesState {
    equalizerEnabled: boolean;
    equalizerGain: number;
    makeUpGain: number;
}
export declare class FairlightMixerSourceCommand extends WritableCommand<OmitReadonly<FairlightMixerSourceCommandProperties>> {
    static MaskFlags: {
        framesDelay: number;
        gain: number;
        stereoSimulation: number;
        equalizerEnabled: number;
        equalizerGain: number;
        makeUpGain: number;
        balance: number;
        faderGain: number;
        mixOption: number;
    };
    static readonly rawName = "CFSP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    serialize(): Buffer;
}
export declare class FairlightMixerSourceUpdateCommand extends DeserializedCommand<FairlightMixerSourceCommandProperties & {
    bandCount: number;
}> {
    static readonly rawName = "FASP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint, props: FairlightMixerSourceUpdateCommand['properties']);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerSourceCommand.d.ts.map