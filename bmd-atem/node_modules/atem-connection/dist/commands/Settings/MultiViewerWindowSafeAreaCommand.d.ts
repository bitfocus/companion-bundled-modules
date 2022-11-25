/// <reference types="node" />
import { SymmetricalCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ProtocolVersion } from '../../enums';
export declare class MultiViewerWindowSafeAreaCommand extends SymmetricalCommand<{
    safeAreaEnabled: boolean;
}> {
    static readonly rawName = "SaMw";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly multiViewerId: number;
    readonly windowIndex: number;
    constructor(multiviewerId: number, windowIndex: number, safeAreaEnabled: boolean);
    serialize(): Buffer;
    static deserialize(rawCommand: Buffer): MultiViewerWindowSafeAreaCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MultiViewerWindowSafeAreaCommand.d.ts.map