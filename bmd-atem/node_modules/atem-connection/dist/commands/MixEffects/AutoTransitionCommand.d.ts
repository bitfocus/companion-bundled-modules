/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class AutoTransitionCommand extends BasicWritableCommand<null> {
    static readonly rawName = "DAut";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
//# sourceMappingURL=AutoTransitionCommand.d.ts.map