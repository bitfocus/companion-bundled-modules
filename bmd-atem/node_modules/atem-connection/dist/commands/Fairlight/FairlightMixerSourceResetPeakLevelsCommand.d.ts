/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class FairlightMixerSourceResetPeakLevelsCommand extends BasicWritableCommand<{
    output: boolean;
    dynamicsInput: boolean;
    dynamicsOutput: boolean;
}> {
    static readonly rawName = "RFIP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint, properties: FairlightMixerSourceResetPeakLevelsCommand['properties']);
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerSourceResetPeakLevelsCommand.d.ts.map