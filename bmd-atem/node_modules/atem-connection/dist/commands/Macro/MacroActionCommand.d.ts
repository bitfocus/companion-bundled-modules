/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
import { MacroAction } from '../../enums';
export declare class MacroActionCommand extends BasicWritableCommand<{
    action: MacroAction;
}> {
    static readonly rawName = "MAct";
    readonly index: number;
    constructor(index: number, action: MacroAction);
    serialize(): Buffer;
}
//# sourceMappingURL=MacroActionCommand.d.ts.map