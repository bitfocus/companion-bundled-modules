/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { DipTransitionSettings } from '../../../state/video';
export declare class TransitionDipCommand extends WritableCommand<DipTransitionSettings> {
    static MaskFlags: {
        rate: number;
        input: number;
    };
    static readonly rawName = "CTDp";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
export declare class TransitionDipUpdateCommand extends DeserializedCommand<DipTransitionSettings> {
    static readonly rawName = "TDpP";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: DipTransitionSettings);
    static deserialize(rawCommand: Buffer): TransitionDipUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionDipCommand.d.ts.map