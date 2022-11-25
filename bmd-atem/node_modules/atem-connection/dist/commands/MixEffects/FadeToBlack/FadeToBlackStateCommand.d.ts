/// <reference types="node" />
import { DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
export interface FadeToBlackProps {
    isFullyBlack: boolean;
    inTransition: boolean;
    remainingFrames: number;
}
export declare class FadeToBlackStateCommand extends DeserializedCommand<FadeToBlackProps> {
    static readonly rawName = "FtbS";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: FadeToBlackProps);
    static deserialize(rawCommand: Buffer): FadeToBlackStateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FadeToBlackStateCommand.d.ts.map