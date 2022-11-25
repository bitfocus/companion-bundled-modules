/// <reference types="node" />
import { AtemState } from '../../state';
import { StillFrame } from '../../state/media';
import { DeserializedCommand } from '../CommandBase';
export declare class MediaPoolFrameDescriptionCommand extends DeserializedCommand<StillFrame> {
    static readonly rawName = "MPfe";
    readonly mediaPool: number;
    readonly frameIndex: number;
    constructor(mediaPool: number, frameIndex: number, properties: StillFrame);
    static deserialize(rawCommand: Buffer): MediaPoolFrameDescriptionCommand;
    applyToState(state: AtemState): string | string[];
}
//# sourceMappingURL=MediaPoolFrameDescription.d.ts.map