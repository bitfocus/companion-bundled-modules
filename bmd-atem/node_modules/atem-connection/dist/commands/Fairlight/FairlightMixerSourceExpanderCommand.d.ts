/// <reference types="node" />
import { FairlightAudioExpanderState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerSourceExpanderCommand extends WritableCommand<OmitReadonly<FairlightAudioExpanderState>> {
    static MaskFlags: {
        expanderEnabled: number;
        gateEnabled: number;
        threshold: number;
        range: number;
        ratio: number;
        attack: number;
        hold: number;
        release: number;
    };
    static readonly rawName = "CIXP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    serialize(): Buffer;
}
export declare class FairlightMixerSourceExpanderUpdateCommand extends DeserializedCommand<FairlightAudioExpanderState> {
    static readonly rawName = "AIXP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint, props: FairlightAudioExpanderState);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceExpanderUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerSourceExpanderCommand.d.ts.map