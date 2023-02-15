/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class DisplayClockRequestTimeCommand extends BasicWritableCommand<Record<string, unknown>> {
    static readonly rawName = "DSTR";
    constructor();
    serialize(): Buffer;
}
//# sourceMappingURL=DisplayClockRequestTimeCommand.d.ts.map