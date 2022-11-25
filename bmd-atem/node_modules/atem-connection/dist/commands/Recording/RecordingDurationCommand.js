"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordingDurationUpdateCommand = exports.RecordingRequestDurationCommand = void 0;
const enums_1 = require("../../enums");
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class RecordingRequestDurationCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        return Buffer.alloc(0);
    }
}
exports.RecordingRequestDurationCommand = RecordingRequestDurationCommand;
RecordingRequestDurationCommand.rawName = 'RMDR';
RecordingRequestDurationCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
class RecordingDurationUpdateCommand extends CommandBase_1.DeserializedCommand {
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
        return new RecordingDurationUpdateCommand(props);
    }
    applyToState(state) {
        if (!state.recording) {
            throw new state_1.InvalidIdError('Recording');
        }
        state.recording.duration = this.properties;
        return `recording.duration`;
    }
}
exports.RecordingDurationUpdateCommand = RecordingDurationUpdateCommand;
RecordingDurationUpdateCommand.rawName = 'RTMR';
RecordingDurationUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=RecordingDurationCommand.js.map