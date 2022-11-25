"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingAudioBitratesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class StreamingAudioBitratesCommand extends CommandBase_1.SymmetricalCommand {
    constructor(lowBitrate = 128000, highBitrate = 192000) {
        super({ lowBitrate, highBitrate });
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        const lowBitrate = this.properties.lowBitrate || 128000;
        const highBitrate = this.properties.highBitrate || 192000;
        buffer.writeUInt32BE(lowBitrate, 0);
        buffer.writeUInt32BE(highBitrate, 4);
        return buffer;
    }
    static deserialize(rawCommand) {
        const lowBitrate = rawCommand.readUInt32BE(0);
        const highBitrate = rawCommand.readUInt32BE(4);
        return new StreamingAudioBitratesCommand(lowBitrate, highBitrate);
    }
    applyToState(state) {
        const audioBitrates = {
            lowBitrate: this.properties.lowBitrate,
            highBitrate: this.properties.highBitrate,
        };
        if (!state.streaming) {
            throw new state_1.InvalidIdError('Streaming');
        }
        else {
            state.streaming.audioBitrates = audioBitrates;
        }
        return `streaming.audioBitrates`;
    }
}
exports.StreamingAudioBitratesCommand = StreamingAudioBitratesCommand;
StreamingAudioBitratesCommand.rawName = 'STAB';
StreamingAudioBitratesCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=StreamingAudioBitratesCommand.js.map