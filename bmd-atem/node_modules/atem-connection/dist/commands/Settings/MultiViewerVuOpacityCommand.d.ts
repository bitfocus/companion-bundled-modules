/// <reference types="node" />
import { SymmetricalCommand } from '../CommandBase';
import { AtemState } from '../../state';
export interface MultiViewerVuOpacityState {
    opacity: number;
}
export declare class MultiViewerVuOpacityCommand extends SymmetricalCommand<MultiViewerVuOpacityState> {
    static readonly rawName = "VuMo";
    readonly multiViewerId: number;
    constructor(multiviewerId: number, opacity: number);
    serialize(): Buffer;
    static deserialize(rawCommand: Buffer): MultiViewerVuOpacityCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MultiViewerVuOpacityCommand.d.ts.map