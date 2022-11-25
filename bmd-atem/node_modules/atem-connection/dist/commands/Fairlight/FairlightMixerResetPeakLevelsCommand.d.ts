/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class FairlightMixerResetPeakLevelsCommand extends BasicWritableCommand<{
    all: boolean;
    master: boolean;
}> {
    static readonly rawName = "RFLP";
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerResetPeakLevelsCommand.d.ts.map