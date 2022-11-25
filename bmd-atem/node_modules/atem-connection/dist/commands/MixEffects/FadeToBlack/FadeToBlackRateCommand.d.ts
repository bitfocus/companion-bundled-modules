/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
export declare class FadeToBlackRateCommand extends BasicWritableCommand<{
    rate: number;
}> {
    static readonly rawName = "FtbC";
    readonly mixEffect: number;
    constructor(mixEffect: number, rate: number);
    serialize(): Buffer;
}
export declare class FadeToBlackRateUpdateCommand extends DeserializedCommand<{
    rate: number;
}> {
    static readonly rawName = "FtbP";
    readonly mixEffect: number;
    constructor(mixEffect: number, rate: number);
    static deserialize(rawCommand: Buffer): FadeToBlackRateUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FadeToBlackRateCommand.d.ts.map