/// <reference types="node" />
import { DeserializedCommand, WritableCommand } from '../../CommandBase';
import { FairlightAudioRoutingSource } from '../../../state/fairlight';
import { OmitReadonly } from '../../../lib/types';
import { AtemState } from '../../../state';
export declare class AudioRoutingSourceCommand extends WritableCommand<OmitReadonly<FairlightAudioRoutingSource>> {
    static MaskFlags: {
        name: number;
    };
    static readonly rawName = "ARSC";
    readonly id: number;
    constructor(sourceId: number);
    serialize(): Buffer;
}
export declare class AudioRoutingSourceUpdateCommand extends DeserializedCommand<FairlightAudioRoutingSource> {
    static readonly rawName = "ARSP";
    readonly id: number;
    constructor(sourceId: number, properties: FairlightAudioRoutingSource);
    static deserialize(rawCommand: Buffer): AudioRoutingSourceUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioRoutingSource.d.ts.map