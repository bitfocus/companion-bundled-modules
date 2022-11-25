/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { TransitionPosition } from '../../../state/video';
export declare class TransitionPositionCommand extends BasicWritableCommand<Pick<TransitionPosition, 'handlePosition'>> {
    static readonly rawName = "CTPs";
    readonly mixEffect: number;
    constructor(mixEffect: number, handlePosition: number);
    serialize(): Buffer;
}
export declare class TransitionPositionUpdateCommand extends DeserializedCommand<TransitionPosition> {
    static readonly rawName = "TrPs";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: TransitionPosition);
    static deserialize(rawCommand: Buffer): TransitionPositionUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionPositionCommand.d.ts.map