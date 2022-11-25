/// <reference types="node" />
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MacroPropertiesState } from '../../state/macro';
import { OmitReadonly } from '../../lib/types';
export declare class MacroPropertiesUpdateCommand extends DeserializedCommand<MacroPropertiesState> {
    static readonly rawName = "MPrp";
    readonly macroIndex: number;
    constructor(macroIndexID: number, properties: MacroPropertiesState);
    static deserialize(rawCommand: Buffer): MacroPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
export declare class MacroPropertiesCommand extends WritableCommand<OmitReadonly<MacroPropertiesState>> {
    static MaskFlags: {
        name: number;
        description: number;
    };
    static readonly rawName = "CMPr";
    readonly macroIndex: number;
    constructor(macroIndex: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MacroPropertiesCommand.d.ts.map