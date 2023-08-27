/// <reference types="node" />
import { FairlightAudioLevels } from '../../state/levels';
import { DeserializedCommand } from '../CommandBase';
export declare class FairlightMixerMasterLevelsUpdateCommand extends DeserializedCommand<Omit<FairlightAudioLevels, 'expanderGainReduction'>> {
    static readonly rawName = "FDLv";
    static deserialize(rawCommand: Buffer): FairlightMixerMasterLevelsUpdateCommand;
    applyToState(): string[];
}
//# sourceMappingURL=FairlightMixerMasterLevelsCommand.d.ts.map