/// <reference types="node" />
import { ProtocolVersion } from '../../enums';
import { AtemState } from '../../state';
import { DeserializedCommand, BasicWritableCommand } from '../CommandBase';
import { RecordingDiskProperties } from '../../state/recording';
export declare class RecordingRequestSwitchDiskCommand extends BasicWritableCommand<Record<string, never>> {
    static readonly rawName = "RMSp";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor();
    serialize(): Buffer;
}
export interface DeletableRecordingDiskProperties extends RecordingDiskProperties {
    isDelete: boolean;
}
export declare class RecordingDiskInfoUpdateCommand extends DeserializedCommand<DeletableRecordingDiskProperties> {
    static readonly rawName = "RTMD";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    static readonly DeleteStatusFlag: number;
    readonly diskId: number;
    constructor(diskId: number, properties: DeletableRecordingDiskProperties);
    static deserialize(rawCommand: Buffer): RecordingDiskInfoUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=RecordingDiskCommand.d.ts.map