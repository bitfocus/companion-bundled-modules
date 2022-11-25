/// <reference types="node" />
import { FairlightAudioLimiterState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerMasterLimiterCommand extends WritableCommand<OmitReadonly<FairlightAudioLimiterState>> {
    static MaskFlags: {
        limiterEnabled: number;
        threshold: number;
        attack: number;
        hold: number;
        release: number;
    };
    static readonly rawName = "CMLP";
    serialize(): Buffer;
}
export declare class FairlightMixerMasterLimiterUpdateCommand extends DeserializedCommand<FairlightAudioLimiterState> {
    static readonly rawName = "AMLP";
    static deserialize(rawCommand: Buffer): FairlightMixerMasterLimiterUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerMasterLimiterCommand.d.ts.map