/// <reference types="node" />
import { FairlightAudioMasterChannelPropertiesState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
export interface FairlightMixerMasterCommandProperties extends FairlightAudioMasterChannelPropertiesState {
    equalizerEnabled: boolean;
    equalizerGain: number;
    makeUpGain: number;
}
export declare class FairlightMixerMasterCommand extends WritableCommand<FairlightMixerMasterCommandProperties> {
    static MaskFlags: {
        equalizerEnabled: number;
        equalizerGain: number;
        makeUpGain: number;
        faderGain: number;
        followFadeToBlack: number;
    };
    static readonly rawName = "CFMP";
    serialize(): Buffer;
}
export declare class FairlightMixerMasterUpdateCommand extends DeserializedCommand<FairlightMixerMasterCommandProperties & {
    bandCount: number;
}> {
    static readonly rawName = "FAMP";
    static deserialize(rawCommand: Buffer): FairlightMixerMasterUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerMasterCommand.d.ts.map