"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingServiceUpdateCommand = exports.StreamingServiceCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
const atemUtil_1 = require("../../lib/atemUtil");
class StreamingServiceCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(1100);
        buffer.writeUInt8(this.flag, 0);
        buffer.write(this.properties.serviceName || '', 1, 64, 'utf8');
        buffer.write(this.properties.url || '', 65, 512, 'utf8');
        buffer.write(this.properties.key || '', 577, 512, 'utf8');
        const bitrates = this.properties.bitrates || [0, 0];
        buffer.writeUInt32BE(bitrates[0], 1092);
        buffer.writeUInt32BE(bitrates[1], 1096);
        return buffer;
    }
}
exports.StreamingServiceCommand = StreamingServiceCommand;
StreamingServiceCommand.rawName = 'CRSS';
StreamingServiceCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
StreamingServiceCommand.MaskFlags = {
    serviceName: 1 << 0,
    url: 1 << 1,
    key: 1 << 2,
    bitrates: 1 << 3,
};
class StreamingServiceUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        const props = {
            serviceName: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 0, 64),
            url: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 64, 512),
            key: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 576, 512),
            bitrates: [rawCommand.readUInt32BE(1088), rawCommand.readUInt32BE(1092)],
        };
        return new StreamingServiceUpdateCommand(props);
    }
    applyToState(state) {
        if (!state.streaming) {
            state.streaming = {
                service: this.properties,
            };
        }
        else {
            state.streaming.service = this.properties;
        }
        return `streaming.service`;
    }
}
exports.StreamingServiceUpdateCommand = StreamingServiceUpdateCommand;
StreamingServiceUpdateCommand.rawName = 'SRSU';
StreamingServiceUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=StreamingServiceCommand.js.map