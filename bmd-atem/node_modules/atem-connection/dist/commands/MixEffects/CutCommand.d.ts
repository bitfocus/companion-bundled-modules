/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class CutCommand extends BasicWritableCommand<null> {
    static readonly rawName = "DCut";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
//# sourceMappingURL=CutCommand.d.ts.map