/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ProtocolVersion } from '../../enums';
import { SuperSourceInfo } from '../../state/info';
export declare class SuperSourceConfigCommand extends DeserializedCommand<SuperSourceInfo> {
    static readonly rawName = "_SSC";
    readonly ssrcId: number;
    constructor(ssrcId: number, properties: SuperSourceInfo);
    static deserialize(rawCommand: Buffer, version: ProtocolVersion): SuperSourceConfigCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=superSourceConfigCommand.d.ts.map