/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { Enums } from '../..';
export interface VideoModeProps {
    mode: Enums.VideoMode;
}
export declare class VideoModeCommand extends BasicWritableCommand<VideoModeProps> {
    static readonly rawName = "CVdM";
    constructor(mode: Enums.VideoMode);
    serialize(): Buffer;
}
export declare class VideoModeUpdateCommand extends DeserializedCommand<VideoModeProps> {
    static readonly rawName = "VidM";
    constructor(mode: Enums.VideoMode);
    static deserialize(rawCommand: Buffer): VideoModeUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=VideoMode.d.ts.map