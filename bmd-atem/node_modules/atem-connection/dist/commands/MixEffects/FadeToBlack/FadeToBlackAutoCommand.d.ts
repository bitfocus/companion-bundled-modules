/// <reference types="node" />
import { BasicWritableCommand } from '../../CommandBase';
export declare class FadeToBlackAutoCommand extends BasicWritableCommand<null> {
    static readonly rawName = "FtbA";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
//# sourceMappingURL=FadeToBlackAutoCommand.d.ts.map