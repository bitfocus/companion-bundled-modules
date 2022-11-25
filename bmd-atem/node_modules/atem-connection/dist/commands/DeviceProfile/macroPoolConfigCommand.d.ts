/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MacroPoolInfo } from '../../state/info';
export declare class MacroPoolConfigCommand extends DeserializedCommand<MacroPoolInfo> {
    static readonly rawName = "_MAC";
    constructor(properties: MacroPoolInfo);
    static deserialize(rawCommand: Buffer): MacroPoolConfigCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=macroPoolConfigCommand.d.ts.map