/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { TransitionProperties } from '../../../state/video';
import { OmitReadonly } from '../../../lib/types';
export declare class TransitionPropertiesCommand extends WritableCommand<OmitReadonly<TransitionProperties>> {
    static MaskFlags: {
        nextStyle: number;
        nextSelection: number;
    };
    static readonly rawName = "CTTp";
    readonly mixEffect: number;
    constructor(mixEffect: number);
    serialize(): Buffer;
}
export declare class TransitionPropertiesUpdateCommand extends DeserializedCommand<TransitionProperties> {
    static readonly rawName = "TrSS";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: TransitionProperties);
    static deserialize(rawCommand: Buffer): TransitionPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionPropertiesCommand.d.ts.map