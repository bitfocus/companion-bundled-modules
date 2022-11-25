/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
export interface LockStateProps {
    index: number;
    locked: boolean;
}
export declare class LockStateCommand extends BasicWritableCommand<LockStateProps> {
    static readonly rawName = "LOCK";
    constructor(index: number, locked: boolean);
    serialize(): Buffer;
}
export declare class LockStateUpdateCommand extends DeserializedCommand<LockStateProps> {
    static readonly rawName = "LKST";
    static deserialize(rawCommand: Buffer): LockStateUpdateCommand;
    applyToState(): string | string[];
}
//# sourceMappingURL=LockStateCommand.d.ts.map