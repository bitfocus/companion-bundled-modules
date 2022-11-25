/// <reference types="node" />
import { DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
import { UpstreamKeyerFlySettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyFlyPropertiesGetCommand extends DeserializedCommand<UpstreamKeyerFlySettings> {
    static readonly rawName = "KeFS";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: UpstreamKeyerFlySettings);
    static deserialize(rawCommand: Buffer): MixEffectKeyFlyPropertiesGetCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyFlyPropertiesGetCommand.d.ts.map