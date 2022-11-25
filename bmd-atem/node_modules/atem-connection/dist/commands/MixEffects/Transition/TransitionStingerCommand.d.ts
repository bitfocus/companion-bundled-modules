/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { StingerTransitionSettings } from '../../../state/video';
export declare class TransitionStingerCommand extends WritableCommand<StingerTransitionSettings> {
    static MaskFlags: {
        source: number;
        preMultipliedKey: number;
        clip: number;
        gain: number;
        invert: number;
        preroll: number;
        clipDuration: number;
        triggerPoint: number;
        mixRate: number;
    };
    static readonly rawName = "CTSt";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
export declare class TransitionStingerUpdateCommand extends DeserializedCommand<StingerTransitionSettings> {
    static readonly rawName = "TStP";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: StingerTransitionSettings);
    static deserialize(rawCommand: Buffer): TransitionStingerUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionStingerCommand.d.ts.map