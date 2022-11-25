/// <reference types="node" />
import { Timecode } from '../../state/common';
import { ProtocolVersion } from '../../enums';
import { AtemState } from '../../state';
import { DeserializedCommand, BasicWritableCommand } from '../CommandBase';
export declare class RecordingRequestDurationCommand extends BasicWritableCommand<Record<string, never>> {
    static readonly rawName = "RMDR";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor();
    serialize(): Buffer;
}
export declare class RecordingDurationUpdateCommand extends DeserializedCommand<Timecode> {
    static readonly rawName = "RTMR";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: Timecode);
    static deserialize(rawCommand: Buffer): RecordingDurationUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=RecordingDurationCommand.d.ts.map