"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoMixerConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class VideoMixerConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand, version) {
        const modes = [];
        const hasRequiresReconfig = version >= enums_1.ProtocolVersion.V8_0;
        const size = hasRequiresReconfig ? 13 : 12;
        const count = rawCommand.readUInt16BE(0);
        for (let i = 0; i < count; i++) {
            const baseOffset = 4 + i * size;
            modes.push({
                mode: rawCommand.readUInt8(baseOffset),
                multiviewerModes: readVideoModeBitmask(rawCommand.readUInt32BE(baseOffset + 4)),
                downConvertModes: readVideoModeBitmask(rawCommand.readUInt32BE(baseOffset + 8)),
                requiresReconfig: hasRequiresReconfig ? rawCommand.readUInt8(baseOffset + 12) !== 0 : false,
            });
        }
        return new VideoMixerConfigCommand(modes);
    }
    applyToState(state) {
        state.info.supportedVideoModes = this.properties;
        return `info.supportedVideoModes`;
    }
}
exports.VideoMixerConfigCommand = VideoMixerConfigCommand;
VideoMixerConfigCommand.rawName = '_VMC';
function readVideoModeBitmask(rawVal) {
    const modes = [];
    for (const possibleMode of Object.values(enums_1.VideoMode)) {
        if (typeof possibleMode === 'number' && (rawVal & (1 << possibleMode)) != 0)
            modes.push(possibleMode);
    }
    return modes;
}
//# sourceMappingURL=videoMixerConfigCommand.js.map