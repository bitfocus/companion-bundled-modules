"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterUpdateCommand = exports.FairlightMixerMasterCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMasterCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.equalizerEnabled ? 1 : 0, 1);
        buffer.writeInt32BE(this.properties.equalizerGain || 0, 4);
        buffer.writeInt32BE(this.properties.makeUpGain || 0, 8);
        buffer.writeInt32BE(this.properties.faderGain || 0, 12);
        buffer.writeUInt8(this.properties.followFadeToBlack ? 1 : 0, 16);
        return buffer;
    }
}
exports.FairlightMixerMasterCommand = FairlightMixerMasterCommand;
FairlightMixerMasterCommand.MaskFlags = {
    equalizerEnabled: 1 << 0,
    equalizerGain: 1 << 1,
    makeUpGain: 1 << 2,
    faderGain: 1 << 3,
    followFadeToBlack: 1 << 4,
};
FairlightMixerMasterCommand.rawName = 'CFMP';
class FairlightMixerMasterUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            bandCount: rawCommand.readUInt8(0),
            equalizerEnabled: rawCommand.readUInt8(1) > 0,
            equalizerGain: rawCommand.readInt32BE(4),
            makeUpGain: rawCommand.readInt32BE(8),
            faderGain: rawCommand.readInt32BE(12),
            followFadeToBlack: rawCommand.readUInt8(16) > 0,
        };
        return new FairlightMixerMasterUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        state.fairlight.master = {
            properties: {
                faderGain: this.properties.faderGain,
                followFadeToBlack: this.properties.followFadeToBlack,
            },
            dynamics: {
                ...state.fairlight.master?.dynamics,
                makeUpGain: this.properties.makeUpGain,
            },
            equalizer: {
                ...state.fairlight.master?.equalizer,
                enabled: this.properties.equalizerEnabled,
                gain: this.properties.equalizerGain,
                bands: state.fairlight.master?.equalizer?.bands ?? new Array(this.properties.bandCount).fill(undefined), // Assume bands number doesnt change
            },
        };
        return `fairlight.master`;
    }
}
exports.FairlightMixerMasterUpdateCommand = FairlightMixerMasterUpdateCommand;
FairlightMixerMasterUpdateCommand.rawName = 'FAMP';
//# sourceMappingURL=FairlightMixerMasterCommand.js.map