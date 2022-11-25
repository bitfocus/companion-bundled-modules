/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { SupportedVideoMode } from '../../state/info';
import { ProtocolVersion } from '../../enums';
export declare class VideoMixerConfigCommand extends DeserializedCommand<Array<SupportedVideoMode>> {
    static readonly rawName = "_VMC";
    constructor(properties: Array<SupportedVideoMode>);
    static deserialize(rawCommand: Buffer, version: ProtocolVersion): VideoMixerConfigCommand;
    applyToState(state: AtemState): string | string[];
}
//# sourceMappingURL=videoMixerConfigCommand.d.ts.map