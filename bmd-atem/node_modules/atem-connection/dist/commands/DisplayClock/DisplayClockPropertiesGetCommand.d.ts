/// <reference types="node" />
import { DisplayClockProperties } from '../../state/displayClock';
import { AtemState } from '../../state';
import { DeserializedCommand } from '../CommandBase';
export declare class DisplayClockPropertiesGetCommand extends DeserializedCommand<DisplayClockProperties> {
    static readonly rawName = "DCPV";
    constructor(props: DisplayClockProperties);
    static deserialize(rawCommand: Buffer): DisplayClockPropertiesGetCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=DisplayClockPropertiesGetCommand.d.ts.map