"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolSettingsGetCommand = exports.MediaPoolSettingsSetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class MediaPoolSettingsSetCommand extends CommandBase_1.BasicWritableCommand {
    constructor(maxFrames) {
        super({ maxFrames });
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt16BE(this.properties.maxFrames[0] || 0, 0);
        buffer.writeUInt16BE(this.properties.maxFrames[1] || 0, 2);
        buffer.writeUInt16BE(this.properties.maxFrames[2] || 0, 4);
        buffer.writeUInt16BE(this.properties.maxFrames[3] || 0, 6);
        return buffer;
    }
}
exports.MediaPoolSettingsSetCommand = MediaPoolSettingsSetCommand;
MediaPoolSettingsSetCommand.rawName = 'CMPS';
MediaPoolSettingsSetCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
class MediaPoolSettingsGetCommand extends CommandBase_1.DeserializedCommand {
    constructor(maxFrames, unassignedFrames) {
        super({ maxFrames, unassignedFrames });
    }
    static deserialize(rawCommand) {
        return new MediaPoolSettingsGetCommand([
            rawCommand.readUInt16BE(0),
            rawCommand.readUInt16BE(2),
            rawCommand.readUInt16BE(4),
            rawCommand.readUInt16BE(6),
        ], rawCommand.readUInt16BE(8));
    }
    applyToState(state) {
        state.settings.mediaPool = {
            maxFrames: this.properties.maxFrames,
            unassignedFrames: this.properties.unassignedFrames,
        };
        return `settings.mediaPool`;
    }
}
exports.MediaPoolSettingsGetCommand = MediaPoolSettingsGetCommand;
MediaPoolSettingsGetCommand.rawName = 'MPSp';
MediaPoolSettingsGetCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
//# sourceMappingURL=MediaPool.js.map