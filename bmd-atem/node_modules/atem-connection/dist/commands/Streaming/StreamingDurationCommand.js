"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingDurationUpdateCommand = exports.StreamingRequestDurationCommand = void 0;
const enums_1 = require("../../enums");
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class StreamingRequestDurationCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        return Buffer.alloc(0);
    }
}
exports.StreamingRequestDurationCommand = StreamingRequestDurationCommand;
StreamingRequestDurationCommand.rawName = 'SRDR';
StreamingRequestDurationCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
class StreamingDurationUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        const props = {
            hours: rawCommand.readUInt8(0),
            minutes: rawCommand.readUInt8(1),
            seconds: rawCommand.readUInt8(2),
            frames: rawCommand.readUInt8(3),
            isDropFrame: rawCommand.readUInt8(4) != 0,
        };
        return new StreamingDurationUpdateCommand(props);
    }
    applyToState(state) {
        if (!state.streaming) {
            throw new state_1.InvalidIdError('Streaming');
        }
        state.streaming.duration = this.properties;
        return `streaming.duration`;
    }
}
exports.StreamingDurationUpdateCommand = StreamingDurationUpdateCommand;
StreamingDurationUpdateCommand.rawName = 'SRST';
StreamingDurationUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=StreamingDurationCommand.js.map