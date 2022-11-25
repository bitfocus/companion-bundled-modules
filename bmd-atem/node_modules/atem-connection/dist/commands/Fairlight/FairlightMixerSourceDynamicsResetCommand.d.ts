/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
import { FairlightDynamicsResetProps } from './common';
export declare class FairlightMixerSourceDynamicsResetCommand extends WritableCommand<FairlightDynamicsResetProps> {
    static readonly rawName = "RICD";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerSourceDynamicsResetCommand.d.ts.map