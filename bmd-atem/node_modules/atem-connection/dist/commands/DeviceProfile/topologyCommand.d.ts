/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { AtemCapabilites } from '../../state/info';
import { ProtocolVersion } from '../../enums';
export declare class TopologyCommand extends DeserializedCommand<AtemCapabilites & {
    multiviewers: number;
}> {
    static readonly rawName = "_top";
    static deserialize(rawCommand: Buffer, version: ProtocolVersion): TopologyCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=topologyCommand.d.ts.map