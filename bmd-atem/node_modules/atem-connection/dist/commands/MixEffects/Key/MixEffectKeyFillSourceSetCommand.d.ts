/// <reference types="node" />
import { BasicWritableCommand } from '../../CommandBase';
export declare class MixEffectKeyFillSourceSetCommand extends BasicWritableCommand<{
    fillSource: number;
}> {
    static readonly rawName = "CKeF";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, fillSource: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyFillSourceSetCommand.d.ts.map