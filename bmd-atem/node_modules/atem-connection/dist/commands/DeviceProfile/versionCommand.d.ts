/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ProtocolVersion } from '../../enums';
export declare class VersionCommand extends DeserializedCommand<{
    version: ProtocolVersion;
}> {
    static readonly rawName = "_ver";
    constructor(version: ProtocolVersion);
    static deserialize(rawCommand: Buffer): VersionCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=versionCommand.d.ts.map