"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRequestCommand = exports.TimeCommand = void 0;
const Enums = require("../enums");
const _1 = require(".");
const CommandBase_1 = require("./CommandBase");
class TimeCommand extends CommandBase_1.SymmetricalCommand {
    constructor(properties) {
        super({
            dropFrame: false,
            ...properties,
        });
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.properties.hour, 0);
        buffer.writeUInt8(this.properties.minute, 1);
        buffer.writeUInt8(this.properties.second, 2);
        buffer.writeUInt8(this.properties.frame, 3);
        buffer.writeUInt8(this.properties.dropFrame ? 1 : 0, 5);
        return buffer;
    }
    static deserialize(rawCommand) {
        const properties = {
            hour: rawCommand.readUInt8(0),
            minute: rawCommand.readUInt8(1),
            second: rawCommand.readUInt8(2),
            frame: rawCommand.readUInt8(3),
            // Byte 4 looks to be a field marker
            dropFrame: rawCommand.readUInt8(5) === 1,
        };
        return new TimeCommand(properties);
    }
    applyToState() {
        // Not stored in the state
        return [];
    }
}
exports.TimeCommand = TimeCommand;
TimeCommand.rawName = 'Time';
class TimeRequestCommand extends _1.BasicWritableCommand {
    constructor() {
        super(null);
    }
    serialize() {
        const buffer = Buffer.alloc(0);
        return buffer;
    }
}
exports.TimeRequestCommand = TimeRequestCommand;
TimeRequestCommand.rawName = 'TiRq';
TimeRequestCommand.minimumVersion = Enums.ProtocolVersion.V8_0;
//# sourceMappingURL=TimeCommand.js.map