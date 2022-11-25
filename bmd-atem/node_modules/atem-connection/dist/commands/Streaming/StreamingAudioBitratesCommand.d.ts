/// <reference types="node" />
import { SymmetricalCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ProtocolVersion } from '../../enums';
import { StreamingAudioBitrates } from '../../state/streaming';
export declare class StreamingAudioBitratesCommand extends SymmetricalCommand<StreamingAudioBitrates> {
    static readonly rawName = "STAB";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    constructor(lowBitrate?: number, highBitrate?: number);
    serialize(): Buffer;
    static deserialize(rawCommand: Buffer): StreamingAudioBitratesCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=StreamingAudioBitratesCommand.d.ts.map