/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
export declare class MixEffectKeyOnAirCommand extends BasicWritableCommand<{
    onAir: boolean;
}> {
    static readonly rawName = "CKOn";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, onAir: boolean);
    serialize(): Buffer;
}
export declare class MixEffectKeyOnAirUpdateCommand extends DeserializedCommand<{
    onAir: boolean;
}> {
    static readonly rawName = "KeOn";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, properties: MixEffectKeyOnAirUpdateCommand['properties']);
    static deserialize(rawCommand: Buffer): MixEffectKeyOnAirUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MixEffectKeyOnAirCommand.d.ts.map