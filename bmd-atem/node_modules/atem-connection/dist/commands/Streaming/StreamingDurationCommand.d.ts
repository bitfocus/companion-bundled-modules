/// <reference types="node" />
import { Timecode } from '../../state/common';
import { ProtocolVersion } from '../../enums';
import { AtemState } from '../../state';
import { DeserializedCommand, BasicWritableCommand } from '../CommandBase';
export declare class StreamingRequestDurationCommand extends BasicWritableCommand<Record<string, never>> {
    static readonly rawName = "SRDR";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor();
    serialize(): Buffer;
}
export declare class StreamingDurationUpdateCommand extends DeserializedCommand<Timecode> {
    static readonly rawName = "SRST";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: Timecode);
    static deserialize(rawCommand: Buffer): StreamingDurationUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=StreamingDurationCommand.d.ts.map