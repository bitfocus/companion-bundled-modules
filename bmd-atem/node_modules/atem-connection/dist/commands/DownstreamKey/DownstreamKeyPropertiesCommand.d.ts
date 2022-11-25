/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { DownstreamKeyerProperties } from '../../state/video/downstreamKeyers';
export declare class DownstreamKeyPropertiesCommand extends DeserializedCommand<DownstreamKeyerProperties> {
    static readonly rawName = "DskP";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, properties: DownstreamKeyerProperties);
    static deserialize(rawCommand: Buffer): DownstreamKeyPropertiesCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=DownstreamKeyPropertiesCommand.d.ts.map