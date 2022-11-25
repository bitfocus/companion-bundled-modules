/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
export declare class AudioMixerPropertiesCommand extends BasicWritableCommand<{
    audioFollowVideo: boolean;
}> {
    static readonly rawName = "CAMP";
    serialize(): Buffer;
}
export declare class AudioMixerPropertiesUpdateCommand extends DeserializedCommand<{
    audioFollowVideo: boolean;
}> {
    static readonly rawName = "AMPP";
    static deserialize(rawCommand: Buffer): AudioMixerPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioMixerPropertiesCommand.d.ts.map