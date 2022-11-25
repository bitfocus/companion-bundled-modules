"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingStatsUpdateCommand = void 0;
const enums_1 = require("../../enums");
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class StreamingStatsUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        const props = {
            encodingBitrate: rawCommand.readUInt32BE(0),
            cacheUsed: rawCommand.readUInt16BE(4),
        };
        return new StreamingStatsUpdateCommand(props);
    }
    applyToState(state) {
        if (!state.streaming) {
            throw new state_1.InvalidIdError('Streaming');
        }
        state.streaming.stats = this.properties;
        return `streaming.stats`;
    }
}
exports.StreamingStatsUpdateCommand = StreamingStatsUpdateCommand;
StreamingStatsUpdateCommand.rawName = 'SRSS';
StreamingStatsUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=StreamingStatsCommand.js.map