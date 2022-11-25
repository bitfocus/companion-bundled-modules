/// <reference types="node" />
import { FairlightAudioMonitorChannel } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerMonitorCommand extends WritableCommand<OmitReadonly<FairlightAudioMonitorChannel>> {
    static MaskFlags: {
        gain: number;
        inputMasterGain: number;
        inputMasterMuted: number;
        inputTalkbackGain: number;
        inputSidetoneGain: number;
    };
    static readonly rawName = "CFMH";
    serialize(): Buffer;
}
export declare class FairlightMixerMonitorUpdateCommand extends DeserializedCommand<FairlightAudioMonitorChannel> {
    static readonly rawName = "FMHP";
    static deserialize(rawCommand: Buffer): FairlightMixerMonitorUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerMonitorCommand.d.ts.map