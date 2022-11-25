/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { RecordingStateStatus } from '../../state/recording';
import { ProtocolVersion } from '../../enums';
export declare class RecordingStatusCommand extends BasicWritableCommand<{
    recording: boolean;
}> {
    static readonly rawName = "RcTM";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(recording: boolean);
    serialize(): Buffer;
}
export declare class RecordingStatusUpdateCommand extends DeserializedCommand<RecordingStateStatus> {
    static readonly rawName = "RTMS";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: RecordingStateStatus);
    static deserialize(rawCommand: Buffer): RecordingStatusUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=RecordingStatusCommand.d.ts.map