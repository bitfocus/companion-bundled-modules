/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { DVETransitionSettings } from '../../../state/video';
export declare class TransitionDVECommand extends WritableCommand<DVETransitionSettings> {
    static MaskFlags: {
        rate: number;
        logoRate: number;
        style: number;
        fillSource: number;
        keySource: number;
        enableKey: number;
        preMultiplied: number;
        clip: number;
        gain: number;
        invertKey: number;
        reverse: number;
        flipFlop: number;
    };
    static readonly rawName = "CTDv";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
export declare class TransitionDVEUpdateCommand extends DeserializedCommand<DVETransitionSettings> {
    static readonly rawName = "TDvP";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: DVETransitionSettings);
    static deserialize(rawCommand: Buffer): TransitionDVEUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionDVECommand.d.ts.map