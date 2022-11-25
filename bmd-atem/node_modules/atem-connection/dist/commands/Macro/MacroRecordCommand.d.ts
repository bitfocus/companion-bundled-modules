/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class MacroRecordCommand extends BasicWritableCommand<{
    name: string;
    description: string;
}> {
    static readonly rawName = "MSRc";
    readonly index: number;
    constructor(index: number, name: string, description: string);
    serialize(): Buffer;
}
//# sourceMappingURL=MacroRecordCommand.d.ts.map