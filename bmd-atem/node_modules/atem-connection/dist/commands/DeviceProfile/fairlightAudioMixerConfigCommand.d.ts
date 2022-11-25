/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { FairlightAudioMixerInfo } from '../../state/info';
export declare class FairlightAudioMixerConfigCommand extends DeserializedCommand<FairlightAudioMixerInfo> {
    static readonly rawName = "_FAC";
    constructor(properties: FairlightAudioMixerInfo);
    static deserialize(rawCommand: Buffer): FairlightAudioMixerConfigCommand;
    applyToState(state: AtemState): string[];
}
//# sourceMappingURL=fairlightAudioMixerConfigCommand.d.ts.map