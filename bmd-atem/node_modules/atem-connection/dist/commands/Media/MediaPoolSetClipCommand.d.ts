/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export interface MediaPoolSetClipProps {
    index: number;
    name: string;
    frames: number;
}
export declare class MediaPoolSetClipCommand extends BasicWritableCommand<MediaPoolSetClipProps> {
    static readonly rawName = "SMPC";
    serialize(): Buffer;
}
//# sourceMappingURL=MediaPoolSetClipCommand.d.ts.map