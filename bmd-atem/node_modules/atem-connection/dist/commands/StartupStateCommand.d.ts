/// <reference types="node" />
import { BasicWritableCommand } from './CommandBase';
export declare class StartupStateSaveCommand extends BasicWritableCommand<unknown> {
    static readonly rawName = "SRsv";
    constructor();
    serialize(): Buffer;
}
export declare class StartupStateClearCommand extends BasicWritableCommand<unknown> {
    static readonly rawName = "SRcl";
    constructor();
    serialize(): Buffer;
}
//# sourceMappingURL=StartupStateCommand.d.ts.map