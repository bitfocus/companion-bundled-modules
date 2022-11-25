/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
export declare class FairlightMixerSourceEqualizerResetCommand extends WritableCommand<{
    equalizer: boolean;
    band: number;
}> {
    static MaskFlags: {
        equalizer: number;
        band: number;
    };
    static readonly rawName = "RICE";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerSourceEqualizerResetCommand.d.ts.map