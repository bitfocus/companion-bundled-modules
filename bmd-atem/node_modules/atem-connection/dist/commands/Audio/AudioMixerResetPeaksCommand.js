"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerResetPeaksCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class AudioMixerResetPeaksCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.all ? 1 : 0, 1);
        buffer.writeUInt16BE(this.properties.input || 0, 2);
        buffer.writeUInt8(this.properties.master ? 1 : 0, 4);
        buffer.writeUInt8(this.properties.monitor ? 1 : 0, 5);
        return buffer;
    }
}
exports.AudioMixerResetPeaksCommand = AudioMixerResetPeaksCommand;
AudioMixerResetPeaksCommand.MaskFlags = {
    all: 1 << 0,
    input: 1 << 1,
    master: 1 << 2,
    monitor: 1 << 3,
};
AudioMixerResetPeaksCommand.rawName = 'RAMP';
//# sourceMappingURL=AudioMixerResetPeaksCommand.js.map