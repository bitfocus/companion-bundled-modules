"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerMasterUpdateCommand = exports.AudioMixerMasterCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const __1 = require("../..");
class AudioMixerMasterCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 2);
        buffer.writeInt16BE(__1.Util.BalanceToInt(this.properties.balance || 0), 4);
        buffer.writeUInt8(this.properties.followFadeToBlack ? 0x01 : 0x00, 6); // Note: I never got this one to work
        return buffer;
    }
}
exports.AudioMixerMasterCommand = AudioMixerMasterCommand;
AudioMixerMasterCommand.MaskFlags = {
    gain: 1 << 0,
    balance: 1 << 1,
    followFadeToBlack: 1 << 2,
};
AudioMixerMasterCommand.rawName = 'CAMM';
class AudioMixerMasterUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(0)),
            balance: __1.Util.IntToBalance(rawCommand.readInt16BE(2)),
            followFadeToBlack: rawCommand.readInt8(4) === 1,
        };
        return new AudioMixerMasterUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.audio) {
            throw new state_1.InvalidIdError('Classic Audio');
        }
        state.audio.master = {
            ...state.audio.master,
            ...this.properties,
        };
        return `audio.master`;
    }
}
exports.AudioMixerMasterUpdateCommand = AudioMixerMasterUpdateCommand;
AudioMixerMasterUpdateCommand.rawName = 'AMMO';
//# sourceMappingURL=AudioMixerMasterCommand.js.map