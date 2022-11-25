/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
export declare class MultiViewerWindowVuMeterCommand extends BasicWritableCommand<{
    vuEnabled: boolean;
}> {
    static readonly rawName = "VuMS";
    readonly multiViewerId: number;
    readonly windowIndex: number;
    constructor(multiviewerId: number, windowIndex: number, vuEnabled: boolean);
    serialize(): Buffer;
}
export declare class MultiViewerWindowVuMeterUpdateCommand extends DeserializedCommand<{
    vuEnabled: boolean;
}> {
    static readonly rawName = "VuMC";
    readonly multiViewerId: number;
    readonly windowIndex: number;
    constructor(multiviewerId: number, windowIndex: number, vuEnabled: boolean);
    static deserialize(rawCommand: Buffer): MultiViewerWindowVuMeterUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MultiViewerWindowVuMeterCommand.d.ts.map