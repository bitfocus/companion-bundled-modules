/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { AudioMasterChannel } from '../../state/audio';
export declare class AudioMixerMasterCommand extends WritableCommand<AudioMasterChannel> {
    static MaskFlags: {
        gain: number;
        balance: number;
        followFadeToBlack: number;
    };
    static readonly rawName = "CAMM";
    serialize(): Buffer;
}
export declare class AudioMixerMasterUpdateCommand extends DeserializedCommand<AudioMasterChannel> {
    static readonly rawName = "AMMO";
    static deserialize(rawCommand: Buffer): AudioMixerMasterUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioMixerMasterCommand.d.ts.map