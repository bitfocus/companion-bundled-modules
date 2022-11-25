/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { AudioMixerInfo } from '../../state/info';
export declare class AudioMixerConfigCommand extends DeserializedCommand<AudioMixerInfo> {
    static readonly rawName = "_AMC";
    constructor(properties: AudioMixerInfo);
    static deserialize(rawCommand: Buffer): AudioMixerConfigCommand;
    applyToState(state: AtemState): string[];
}
//# sourceMappingURL=audioMixerConfigCommand.d.ts.map