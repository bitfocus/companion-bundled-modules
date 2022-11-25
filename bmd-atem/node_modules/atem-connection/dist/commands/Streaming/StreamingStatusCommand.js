"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingStatusUpdateCommand = exports.StreamingStatusCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class StreamingStatusCommand extends CommandBase_1.BasicWritableCommand {
    constructor(streaming) {
        super({ streaming });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.streaming ? 1 : 0, 0);
        return buffer;
    }
}
exports.StreamingStatusCommand = StreamingStatusCommand;
StreamingStatusCommand.rawName = 'StrR';
StreamingStatusCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
const errorEnumValues = Object.values(enums_1.StreamingError).filter((e) => typeof e === 'number');
const statusEnumValues = Object.values(enums_1.StreamingStatus).filter((e) => typeof e === 'number');
class StreamingStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        const rawStatus = rawCommand.readUInt16BE(0);
        let error = enums_1.StreamingError.None;
        let state = enums_1.StreamingStatus.Idle;
        for (const e of errorEnumValues) {
            if (e !== 0 && (rawStatus & e) === e) {
                error = e;
                break;
            }
        }
        for (const e of statusEnumValues) {
            if ((rawStatus & e) === e) {
                state = e;
                if (e !== enums_1.StreamingStatus.Streaming)
                    break;
            }
        }
        return new StreamingStatusUpdateCommand({ state, error });
    }
    applyToState(state) {
        if (!state.streaming) {
            throw new state_1.InvalidIdError('Streaming');
        }
        state.streaming.status = this.properties;
        return `streaming.status`;
    }
}
exports.StreamingStatusUpdateCommand = StreamingStatusUpdateCommand;
StreamingStatusUpdateCommand.rawName = 'StRS';
StreamingStatusUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=StreamingStatusCommand.js.map