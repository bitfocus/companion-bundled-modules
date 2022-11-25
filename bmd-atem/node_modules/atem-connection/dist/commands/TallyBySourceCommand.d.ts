/// <reference types="node" />
import { DeserializedCommand } from './CommandBase';
import { AtemState } from '../state';
export interface TallyBySourceProps {
    [source: number]: {
        program: boolean;
        preview: boolean;
    } | undefined;
}
export declare class TallyBySourceCommand extends DeserializedCommand<TallyBySourceProps> {
    static readonly rawName = "TlSr";
    static deserialize(rawCommand: Buffer): TallyBySourceCommand;
    applyToState(_state: AtemState): string[];
}
//# sourceMappingURL=TallyBySourceCommand.d.ts.map