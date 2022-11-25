/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
export declare class FairlightMixerMasterEqualizerResetCommand extends WritableCommand<{
    equalizer: boolean;
    band: number;
}> {
    static MaskFlags: {
        equalizer: number;
        band: number;
    };
    static readonly rawName = "RMOE";
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerMasterEqualizerResetCommand.d.ts.map