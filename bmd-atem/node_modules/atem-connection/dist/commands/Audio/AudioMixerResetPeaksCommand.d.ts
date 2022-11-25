/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
export interface ClassicAudioResetPeaks {
    all: boolean;
    input: number;
    master: boolean;
    monitor: boolean;
}
export declare class AudioMixerResetPeaksCommand extends WritableCommand<ClassicAudioResetPeaks> {
    static MaskFlags: {
        all: number;
        input: number;
        master: number;
        monitor: number;
    };
    static readonly rawName = "RAMP";
    serialize(): Buffer;
}
//# sourceMappingURL=AudioMixerResetPeaksCommand.d.ts.map