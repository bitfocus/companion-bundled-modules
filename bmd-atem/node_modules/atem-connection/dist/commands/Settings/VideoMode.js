"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModeUpdateCommand = exports.VideoModeCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class VideoModeCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mode) {
        super({ mode });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.mode, 0);
        return buffer;
    }
}
exports.VideoModeCommand = VideoModeCommand;
VideoModeCommand.rawName = 'CVdM';
class VideoModeUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mode) {
        super({ mode });
    }
    static deserialize(rawCommand) {
        return new VideoModeUpdateCommand(rawCommand.readUInt8(0));
    }
    applyToState(state) {
        state.settings.videoMode = this.properties.mode;
        return `settings.videoMode`;
    }
}
exports.VideoModeUpdateCommand = VideoModeUpdateCommand;
VideoModeUpdateCommand.rawName = 'VidM';
//# sourceMappingURL=VideoMode.js.map