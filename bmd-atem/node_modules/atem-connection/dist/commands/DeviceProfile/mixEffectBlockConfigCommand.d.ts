/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MixEffectInfo } from '../../state/info';
export declare class MixEffectBlockConfigCommand extends DeserializedCommand<MixEffectInfo> {
    static readonly rawName = "_MeC";
    readonly index: number;
    constructor(index: number, properties: MixEffectInfo);
    static deserialize(rawCommand: Buffer): MixEffectBlockConfigCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=mixEffectBlockConfigCommand.d.ts.map