/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MacroRecorderState } from '../../state/macro';
export declare class MacroRecordingStatusCommand extends DeserializedCommand<MacroRecorderState> {
    static readonly rawName = "MRcS";
    static deserialize(rawCommand: Buffer): MacroRecordingStatusCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MacroRecordingStatusCommand.d.ts.map