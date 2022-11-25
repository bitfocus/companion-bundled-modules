/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ClassicAudioMonitorChannel } from '../../state/audio';
export declare class AudioMixerMonitorCommand extends WritableCommand<ClassicAudioMonitorChannel> {
    static MaskFlags: {
        enabled: number;
        gain: number;
        mute: number;
        solo: number;
        soloSource: number;
        dim: number;
        dimLevel: number;
    };
    static readonly rawName = "CAMm";
    serialize(): Buffer;
}
export declare class AudioMixerMonitorUpdateCommand extends DeserializedCommand<ClassicAudioMonitorChannel> {
    static readonly rawName = "AMmO";
    static deserialize(rawCommand: Buffer): AudioMixerMonitorUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioMixerMonitorCommand.d.ts.map