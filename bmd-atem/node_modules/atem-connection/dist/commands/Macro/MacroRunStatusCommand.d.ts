/// <reference types="node" />
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MacroPlayerState } from '../../state/macro';
export declare class MacroRunStatusUpdateCommand extends DeserializedCommand<MacroPlayerState> {
    static readonly rawName = "MRPr";
    static deserialize(rawCommand: Buffer): MacroRunStatusUpdateCommand;
    applyToState(state: AtemState): string;
}
export declare class MacroRunStatusCommand extends WritableCommand<{
    loop: boolean;
}> {
    static MaskFlags: {
        loop: number;
    };
    static readonly rawName = "MRCP";
    serialize(): Buffer;
}
//# sourceMappingURL=MacroRunStatusCommand.d.ts.map