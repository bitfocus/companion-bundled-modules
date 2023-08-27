/// <reference types="node" />
import { FairlightAudioLevels } from '../../state/levels';
import { DeserializedCommand } from '../CommandBase';
export declare class FairlightMixerSourceLevelsUpdateCommand extends DeserializedCommand<FairlightAudioLevels> {
    static readonly rawName = "FMLv";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint, props: FairlightMixerSourceLevelsUpdateCommand['properties']);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceLevelsUpdateCommand;
    applyToState(): string[];
}
//# sourceMappingURL=FairlightMixerSourceLevelsCommand.d.ts.map