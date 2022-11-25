/// <reference types="node" />
import { AtemState } from '../../state';
import { MediaPlayer } from '../../state/media';
import { WritableCommand, DeserializedCommand } from '../CommandBase';
export declare class MediaPlayerStatusCommand extends WritableCommand<MediaPlayer> {
    static MaskFlags: {
        playing: number;
        loop: number;
        atBeginning: number;
        clipFrame: number;
    };
    static readonly rawName = "SCPS";
    readonly mediaPlayerId: number;
    constructor(mediaPlayerId: number);
    serialize(): Buffer;
}
export declare class MediaPlayerStatusUpdateCommand extends DeserializedCommand<MediaPlayer> {
    static readonly rawName = "RCPS";
    readonly mediaPlayerId: number;
    constructor(mediaPlayerId: number, properties: MediaPlayer);
    static deserialize(rawCommand: Buffer): MediaPlayerStatusUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MediaPlayerStatusCommand.d.ts.map