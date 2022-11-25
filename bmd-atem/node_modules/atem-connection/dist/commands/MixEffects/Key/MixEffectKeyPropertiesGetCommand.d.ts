/// <reference types="node" />
import { DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerBase } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyPropertiesGetCommand extends DeserializedCommand<UpstreamKeyerBase> {
    static readonly rawName = "KeBP";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, keyer: number, properties: UpstreamKeyerBase);
    static deserialize(rawCommand: Buffer): MixEffectKeyPropertiesGetCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyPropertiesGetCommand.d.ts.map