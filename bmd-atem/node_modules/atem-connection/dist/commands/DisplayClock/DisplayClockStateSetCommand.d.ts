/// <reference types="node" />
import { DisplayClockClockState } from '../../enums';
import { BasicWritableCommand } from '../CommandBase';
export declare class DisplayClockStateSetCommand extends BasicWritableCommand<{
    state: DisplayClockClockState;
}> {
    static readonly rawName = "DCSC";
    constructor(state: DisplayClockClockState);
    serialize(): Buffer;
}
//# sourceMappingURL=DisplayClockStateSetCommand.d.ts.map