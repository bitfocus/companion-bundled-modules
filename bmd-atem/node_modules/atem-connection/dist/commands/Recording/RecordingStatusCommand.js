"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordingStatusUpdateCommand = exports.RecordingStatusCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class RecordingStatusCommand extends CommandBase_1.BasicWritableCommand {
    constructor(recording) {
        super({ recording });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.recording ? 1 : 0, 0);
        return buffer;
    }
}
exports.RecordingStatusCommand = RecordingStatusCommand;
RecordingStatusCommand.rawName = 'RcTM';
RecordingStatusCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
const errorEnumValues = Object.values(enums_1.RecordingError).filter((e) => typeof e === 'number');
const statusEnumValues = Object.values(enums_1.RecordingStatus).filter((e) => typeof e === 'number');
class RecordingStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        const rawStatus = rawCommand.readUInt16BE(0);
        const recordingTimeAvailable = rawCommand.length > 4 ? rawCommand.readUInt32BE(4) : -1;
        let error = enums_1.RecordingError.NoMedia;
        let state = enums_1.RecordingStatus.Idle;
        for (const e of errorEnumValues) {
            if (e !== 0 && (rawStatus & e) === e) {
                error = e;
                if (e !== enums_1.RecordingError.None)
                    break;
            }
        }
        for (const e of statusEnumValues) {
            if (e !== 0 && (rawStatus & e) === e) {
                state = e;
                break;
            }
        }
        return new RecordingStatusUpdateCommand({ state, error, recordingTimeAvailable });
    }
    applyToState(state) {
        if (!state.recording) {
            throw new state_1.InvalidIdError('Recording');
        }
        state.recording.status = this.properties;
        return `recording.status`;
    }
}
exports.RecordingStatusUpdateCommand = RecordingStatusUpdateCommand;
RecordingStatusUpdateCommand.rawName = 'RTMS';
RecordingStatusUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=RecordingStatusCommand.js.map