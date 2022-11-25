"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerHeadphonesUpdateCommand = exports.AudioMixerHeadphonesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const __1 = require("../..");
class AudioMixerHeadphonesCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 2);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.programOutGain || 0), 4);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.talkbackGain || 0), 6);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.sidetoneGain || 0), 8);
        return buffer;
    }
}
exports.AudioMixerHeadphonesCommand = AudioMixerHeadphonesCommand;
AudioMixerHeadphonesCommand.MaskFlags = {
    gain: 1 << 0,
    programOutGain: 1 << 1,
    talkbackGain: 1 << 2,
    sidetoneGain: 1 << 3,
};
AudioMixerHeadphonesCommand.rawName = 'CAMH';
class AudioMixerHeadphonesUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(0)),
            programOutGain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(2)),
            talkbackGain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(4)),
            sidetoneGain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(6)),
        };
        return new AudioMixerHeadphonesUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.audio) {
            throw new state_1.InvalidIdError('Classic Audio');
        }
        state.audio.headphones = {
            ...state.audio.headphones,
            ...this.properties,
        };
        return `audio.headphones`;
    }
}
exports.AudioMixerHeadphonesUpdateCommand = AudioMixerHeadphonesUpdateCommand;
AudioMixerHeadphonesUpdateCommand.rawName = 'AMHP';
//# sourceMappingURL=AudioMixerHeadphonesCommand.js.map