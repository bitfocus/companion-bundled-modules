/// <reference types="node" />
import { AtemState } from '../../state';
import { MediaPlayerSource } from '../../state/media';
import { WritableCommand, DeserializedCommand } from '../CommandBase';
export declare class MediaPlayerSourceCommand extends WritableCommand<MediaPlayerSource> {
    static MaskFlags: {
        sourceType: number;
        stillIndex: number;
        clipIndex: number;
    };
    static readonly rawName = "MPSS";
    readonly mediaPlayerId: number;
    constructor(mediaPlayerId: number);
    serialize(): Buffer;
}
export declare class MediaPlayerSourceUpdateCommand extends DeserializedCommand<MediaPlayerSource> {
    static readonly rawName = "MPCE";
    readonly mediaPlayerId: number;
    constructor(mediaPlayerId: number, properties: MediaPlayerSource);
    static deserialize(rawCommand: Buffer): MediaPlayerSourceUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MediaPlayerSourceCommand.d.ts.map