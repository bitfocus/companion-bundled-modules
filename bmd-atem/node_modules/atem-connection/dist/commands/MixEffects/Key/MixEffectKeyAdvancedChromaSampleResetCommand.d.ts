/// <reference types="node" />
import { BasicWritableCommand } from '../../CommandBase';
export interface AdvancedChromaSampleResetProps {
    keyAdjustments?: boolean;
    chromaCorrection?: boolean;
    colorAdjustments?: boolean;
}
export declare class MixEffectKeyAdvancedChromaSampleResetCommand extends BasicWritableCommand<AdvancedChromaSampleResetProps> {
    static readonly rawName = "RACK";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, props: AdvancedChromaSampleResetProps);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyAdvancedChromaSampleResetCommand.d.ts.map