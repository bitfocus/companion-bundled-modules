/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class DownstreamKeyRateCommand extends BasicWritableCommand<{
    rate: number;
}> {
    static readonly rawName = "CDsR";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, rate: number);
    serialize(): Buffer;
}
//# sourceMappingURL=DownstreamKeyRateCommand.d.ts.map