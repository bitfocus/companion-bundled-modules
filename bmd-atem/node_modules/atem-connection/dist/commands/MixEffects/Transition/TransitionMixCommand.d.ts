/// <reference types="node" />
import { DeserializedCommand, BasicWritableCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { MixTransitionSettings } from '../../../state/video';
export declare class TransitionMixCommand extends BasicWritableCommand<MixTransitionSettings> {
    static readonly rawName = "CTMx";
    readonly mixEffect: number;
    constructor(mixEffect: number, rate: number);
    serialize(): Buffer;
}
export declare class TransitionMixUpdateCommand extends DeserializedCommand<MixTransitionSettings> {
    static readonly rawName = "TMxP";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: MixTransitionSettings);
    static deserialize(rawCommand: Buffer): TransitionMixUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionMixCommand.d.ts.map