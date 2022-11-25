/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { DownstreamKeyerBase } from '../../state/video/downstreamKeyers';
import { ProtocolVersion } from '../../enums';
export declare class DownstreamKeyStateCommand extends DeserializedCommand<DownstreamKeyerBase> {
    static readonly rawName = "DskS";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, properties: DownstreamKeyerBase);
    static deserialize(rawCommand: Buffer): DownstreamKeyStateCommand;
    applyToState(state: AtemState): string;
}
export declare class DownstreamKeyStateV8Command extends DeserializedCommand<DownstreamKeyerBase> {
    static readonly rawName = "DskS";
    static readonly minimumVersion = ProtocolVersion.V8_0_1;
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, properties: DownstreamKeyerBase);
    static deserialize(rawCommand: Buffer): DownstreamKeyStateV8Command;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=DownstreamKeyStateCommand.d.ts.map