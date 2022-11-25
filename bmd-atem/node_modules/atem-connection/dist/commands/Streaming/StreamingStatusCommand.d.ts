/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { StreamingStateStatus } from '../../state/streaming';
import { ProtocolVersion } from '../../enums';
export declare class StreamingStatusCommand extends BasicWritableCommand<{
    streaming: boolean;
}> {
    static readonly rawName = "StrR";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(streaming: boolean);
    serialize(): Buffer;
}
export declare class StreamingStatusUpdateCommand extends DeserializedCommand<StreamingStateStatus> {
    static readonly rawName = "StRS";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: StreamingStateStatus);
    static deserialize(rawCommand: Buffer): StreamingStatusUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=StreamingStatusCommand.d.ts.map