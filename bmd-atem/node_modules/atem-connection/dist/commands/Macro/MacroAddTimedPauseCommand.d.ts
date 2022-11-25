/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class MacroAddTimedPauseCommand extends BasicWritableCommand<{
    frames: number;
}> {
    static readonly rawName = "MSlp";
    constructor(frames: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MacroAddTimedPauseCommand.d.ts.map