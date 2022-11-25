/// <reference types="node" />
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerMasterPropertiesCommand extends WritableCommand<OmitReadonly<{
    audioFollowVideo: boolean;
}>> {
    static MaskFlags: {
        audioFollowVideo: number;
    };
    static readonly rawName = "CMPP";
    serialize(): Buffer;
}
export declare class FairlightMixerMasterPropertiesUpdateCommand extends DeserializedCommand<{
    audioFollowVideo: boolean;
}> {
    static readonly rawName = "FMPP";
    static deserialize(rawCommand: Buffer): FairlightMixerMasterPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerMasterPropertiesCommand.d.ts.map