/// <reference types="node" />
import { DeserializedCommand, WritableCommand } from '../../CommandBase';
import { FairlightAudioRoutingOutput } from '../../../state/fairlight';
import { OmitReadonly } from '../../../lib/types';
import { AtemState } from '../../../state';
export declare class AudioRoutingOutputCommand extends WritableCommand<OmitReadonly<FairlightAudioRoutingOutput>> {
    static MaskFlags: {
        sourceId: number;
        name: number;
    };
    static readonly rawName = "AROC";
    readonly id: number;
    constructor(outputId: number);
    serialize(): Buffer;
}
export declare class AudioRoutingOutputUpdateCommand extends DeserializedCommand<FairlightAudioRoutingOutput> {
    static readonly rawName = "AROP";
    readonly id: number;
    constructor(outputId: number, properties: FairlightAudioRoutingOutput);
    static deserialize(rawCommand: Buffer): AudioRoutingOutputUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioRoutingOutput.d.ts.map