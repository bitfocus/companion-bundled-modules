/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { WipeTransitionSettings } from '../../../state/video';
export declare class TransitionWipeCommand extends WritableCommand<WipeTransitionSettings> {
    static MaskFlags: {
        rate: number;
        pattern: number;
        borderWidth: number;
        borderInput: number;
        symmetry: number;
        borderSoftness: number;
        xPosition: number;
        yPosition: number;
        reverseDirection: number;
        flipFlop: number;
    };
    static readonly rawName = "CTWp";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
export declare class TransitionWipeUpdateCommand extends DeserializedCommand<WipeTransitionSettings> {
    static readonly rawName = "TWpP";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: WipeTransitionSettings);
    static deserialize(rawCommand: Buffer): TransitionWipeUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionWipeCommand.d.ts.map