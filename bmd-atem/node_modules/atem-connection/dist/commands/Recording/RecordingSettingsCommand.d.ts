/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { RecordingStateProperties } from '../../state/recording';
import { ProtocolVersion } from '../../enums';
export declare class RecordingSettingsCommand extends WritableCommand<RecordingStateProperties> {
    static readonly rawName = "CRMS";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    static MaskFlags: {
        filename: number;
        workingSet1DiskId: number;
        workingSet2DiskId: number;
        recordInAllCameras: number;
    };
    serialize(): Buffer;
}
export declare class RecordingSettingsUpdateCommand extends DeserializedCommand<RecordingStateProperties> {
    static readonly rawName = "RMSu";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: RecordingStateProperties);
    static deserialize(rawCommand: Buffer): RecordingSettingsUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=RecordingSettingsCommand.d.ts.map