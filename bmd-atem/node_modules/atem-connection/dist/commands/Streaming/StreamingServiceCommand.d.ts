/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { StreamingServiceProperties } from '../../state/streaming';
import { ProtocolVersion } from '../../enums';
export declare class StreamingServiceCommand extends WritableCommand<StreamingServiceProperties> {
    static readonly rawName = "CRSS";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    static MaskFlags: {
        serviceName: number;
        url: number;
        key: number;
        bitrates: number;
    };
    serialize(): Buffer;
}
export declare class StreamingServiceUpdateCommand extends DeserializedCommand<StreamingServiceProperties> {
    static readonly rawName = "SRSU";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: StreamingServiceProperties);
    static deserialize(rawCommand: Buffer): StreamingServiceUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=StreamingServiceCommand.d.ts.map