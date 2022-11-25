/// <reference types="node" />
import { AtemState } from '../../state';
import { ClipBank } from '../../state/media';
import { DeserializedCommand } from '../CommandBase';
export declare class MediaPoolClipDescriptionCommand extends DeserializedCommand<Omit<ClipBank, 'frames'>> {
    static readonly rawName = "MPCS";
    readonly clipId: number;
    constructor(mediaPool: number, properties: Omit<ClipBank, 'frames'>);
    static deserialize(rawCommand: Buffer): MediaPoolClipDescriptionCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MediaPoolClipDescription.d.ts.map