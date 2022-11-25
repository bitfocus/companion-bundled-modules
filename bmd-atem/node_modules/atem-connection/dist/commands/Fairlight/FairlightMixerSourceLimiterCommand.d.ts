/// <reference types="node" />
import { FairlightAudioLimiterState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerSourceLimiterCommand extends WritableCommand<OmitReadonly<FairlightAudioLimiterState>> {
    static MaskFlags: {
        limiterEnabled: number;
        threshold: number;
        attack: number;
        hold: number;
        release: number;
    };
    static readonly rawName = "CILP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    serialize(): Buffer;
}
export declare class FairlightMixerSourceLimiterUpdateCommand extends DeserializedCommand<FairlightAudioLimiterState> {
    static readonly rawName = "AILP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint, props: FairlightAudioLimiterState);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceLimiterUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerSourceLimiterCommand.d.ts.map