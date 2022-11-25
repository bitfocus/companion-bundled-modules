/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
export declare class LockObtainedCommand extends DeserializedCommand<{
    index: number;
}> {
    static readonly rawName = "LKOB";
    constructor(index: number);
    static deserialize(rawCommand: Buffer): LockObtainedCommand;
    applyToState(): string[];
}
//# sourceMappingURL=LockObtainedCommand.d.ts.map