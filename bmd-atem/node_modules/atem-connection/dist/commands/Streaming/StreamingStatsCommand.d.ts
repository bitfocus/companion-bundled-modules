/// <reference types="node" />
import { ProtocolVersion } from '../../enums';
import { AtemState } from '../../state';
import { DeserializedCommand } from '../CommandBase';
import { StreamingStateStats } from '../../state/streaming';
export declare class StreamingStatsUpdateCommand extends DeserializedCommand<StreamingStateStats> {
    static readonly rawName = "SRSS";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(properties: StreamingStateStats);
    static deserialize(rawCommand: Buffer): StreamingStatsUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=StreamingStatsCommand.d.ts.map