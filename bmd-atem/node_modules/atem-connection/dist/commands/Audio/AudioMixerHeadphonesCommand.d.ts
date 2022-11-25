/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ClassicAudioHeadphoneOutputChannel } from '../../state/audio';
export declare class AudioMixerHeadphonesCommand extends WritableCommand<ClassicAudioHeadphoneOutputChannel> {
    static MaskFlags: {
        gain: number;
        programOutGain: number;
        talkbackGain: number;
        sidetoneGain: number;
    };
    static readonly rawName = "CAMH";
    serialize(): Buffer;
}
export declare class AudioMixerHeadphonesUpdateCommand extends DeserializedCommand<ClassicAudioHeadphoneOutputChannel> {
    static readonly rawName = "AMHP";
    static deserialize(rawCommand: Buffer): AudioMixerHeadphonesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioMixerHeadphonesCommand.d.ts.map