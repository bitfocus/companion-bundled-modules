/// <reference types="node" />
import { BasicWritableCommand } from '../../CommandBase';
export declare class MixEffectKeyCutSourceSetCommand extends BasicWritableCommand<{
    cutSource: number;
}> {
    static readonly rawName = "CKeC";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, cutSource: number);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyCutSourceSetCommand.d.ts.map