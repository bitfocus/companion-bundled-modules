"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerMonitorUpdateCommand = exports.AudioMixerMonitorCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const __1 = require("../..");
class AudioMixerMonitorCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.enabled ? 1 : 0, 1);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 2);
        buffer.writeUInt8(this.properties.mute ? 1 : 0, 4);
        buffer.writeUInt8(this.properties.solo ? 1 : 0, 5);
        buffer.writeUInt16BE(this.properties.soloSource || 0, 6);
        buffer.writeUInt8(this.properties.dim ? 1 : 0, 8);
        buffer.writeUInt16BE(this.properties.dimLevel || 0, 10);
        return buffer;
    }
}
exports.AudioMixerMonitorCommand = AudioMixerMonitorCommand;
AudioMixerMonitorCommand.MaskFlags = {
    enabled: 1 << 0,
    gain: 1 << 1,
    mute: 1 << 2,
    solo: 1 << 3,
    soloSource: 1 << 4,
    dim: 1 << 5,
    dimLevel: 1 << 6,
};
AudioMixerMonitorCommand.rawName = 'CAMm';
class AudioMixerMonitorUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            enabled: rawCommand.readUInt8(0) > 0,
            gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(2)),
            mute: rawCommand.readUInt8(4) > 0,
            solo: rawCommand.readUInt8(5) > 0,
            soloSource: rawCommand.readUInt16BE(6),
            dim: rawCommand.readUInt8(8) > 0,
            dimLevel: rawCommand.readUInt16BE(10),
        };
        return new AudioMixerMonitorUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.audio) {
            throw new state_1.InvalidIdError('Classic Audio');
        }
        state.audio.monitor = {
            ...state.audio.monitor,
            ...this.properties,
        };
        return `audio.monitor`;
    }
}
exports.AudioMixerMonitorUpdateCommand = AudioMixerMonitorUpdateCommand;
AudioMixerMonitorUpdateCommand.rawName = 'AMmO';
//# sourceMappingURL=AudioMixerMonitorCommand.js.map