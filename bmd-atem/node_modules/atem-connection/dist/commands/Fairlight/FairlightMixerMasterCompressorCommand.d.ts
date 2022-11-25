/// <reference types="node" />
import { FairlightAudioCompressorState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerMasterCompressorCommand extends WritableCommand<OmitReadonly<FairlightAudioCompressorState>> {
    static MaskFlags: {
        compressorEnabled: number;
        threshold: number;
        ratio: number;
        attack: number;
        hold: number;
        release: number;
    };
    static readonly rawName = "CMCP";
    serialize(): Buffer;
}
export declare class FairlightMixerMasterCompressorUpdateCommand extends DeserializedCommand<FairlightAudioCompressorState> {
    static readonly rawName = "MOCP";
    static deserialize(rawCommand: Buffer): FairlightMixerMasterCompressorUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerMasterCompressorCommand.d.ts.map