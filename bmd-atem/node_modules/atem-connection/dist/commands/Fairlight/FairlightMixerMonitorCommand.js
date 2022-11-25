"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMonitorUpdateCommand = exports.FairlightMixerMonitorCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMonitorCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(36);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeInt32BE(this.properties.gain || 0, 4);
        buffer.writeInt32BE(this.properties.inputMasterGain || 0, 8);
        buffer.writeUInt8(this.properties.inputMasterMuted ? 0 : 1, 12);
        buffer.writeInt32BE(this.properties.inputTalkbackGain || 0, 16);
        buffer.writeInt32BE(this.properties.inputSidetoneGain || 0, 32);
        return buffer;
    }
}
exports.FairlightMixerMonitorCommand = FairlightMixerMonitorCommand;
FairlightMixerMonitorCommand.MaskFlags = {
    gain: 1 << 0,
    inputMasterGain: 1 << 1,
    inputMasterMuted: 1 << 2,
    inputTalkbackGain: 1 << 3,
    inputSidetoneGain: 1 << 7,
};
FairlightMixerMonitorCommand.rawName = 'CFMH';
class FairlightMixerMonitorUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            gain: rawCommand.readInt32BE(0),
            inputMasterGain: rawCommand.readInt32BE(4),
            inputMasterMuted: rawCommand.readUInt8(8) === 0,
            inputTalkbackGain: rawCommand.readInt32BE(12),
            inputSidetoneGain: rawCommand.readInt32BE(28),
        };
        return new FairlightMixerMonitorUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        state.fairlight.monitor = {
            ...this.properties,
        };
        return `fairlight.monitor`;
    }
}
exports.FairlightMixerMonitorUpdateCommand = FairlightMixerMonitorUpdateCommand;
FairlightMixerMonitorUpdateCommand.rawName = 'FMHP';
//# sourceMappingURL=FairlightMixerMonitorCommand.js.map