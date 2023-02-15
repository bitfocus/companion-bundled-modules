/// <reference types="node" />
import { DisplayClockTime } from '../../state/displayClock';
import { AtemState } from '../../state';
import { DeserializedCommand } from '../CommandBase';
export declare class DisplayClockCurrentTimeCommand extends DeserializedCommand<{
    time: DisplayClockTime;
}> {
    static readonly rawName = "DSTV";
    constructor(time: DisplayClockTime);
    static deserialize(rawCommand: Buffer): DisplayClockCurrentTimeCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=DisplayClockCurrentTimeCommand.d.ts.map