"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterCompressorUpdateCommand = exports.FairlightMixerMasterCompressorCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMasterCompressorCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(24);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.compressorEnabled ? 1 : 0, 1);
        buffer.writeInt32BE(this.properties.threshold || 0, 4);
        buffer.writeInt16BE(this.properties.ratio || 0, 8);
        buffer.writeInt32BE(this.properties.attack || 0, 12);
        buffer.writeInt32BE(this.properties.hold || 0, 16);
        buffer.writeInt32BE(this.properties.release || 0, 20);
        return buffer;
    }
}
exports.FairlightMixerMasterCompressorCommand = FairlightMixerMasterCompressorCommand;
FairlightMixerMasterCompressorCommand.MaskFlags = {
    compressorEnabled: 1 << 0,
    threshold: 1 << 1,
    ratio: 1 << 2,
    attack: 1 << 3,
    hold: 1 << 4,
    release: 1 << 5,
};
FairlightMixerMasterCompressorCommand.rawName = 'CMCP';
class FairlightMixerMasterCompressorUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            compressorEnabled: rawCommand.readUInt8(0) > 0,
            threshold: rawCommand.readInt32BE(4),
            ratio: rawCommand.readInt16BE(8),
            attack: rawCommand.readInt32BE(12),
            hold: rawCommand.readInt32BE(16),
            release: rawCommand.readInt32BE(20),
        };
        return new FairlightMixerMasterCompressorUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        if (!state.fairlight.master) {
            throw new state_1.InvalidIdError('Fairlight.Master');
        }
        if (!state.fairlight.master.dynamics) {
            state.fairlight.master.dynamics = {};
        }
        state.fairlight.master.dynamics.compressor = this.properties;
        return `fairlight.master.dynamics.compressor`;
    }
}
exports.FairlightMixerMasterCompressorUpdateCommand = FairlightMixerMasterCompressorUpdateCommand;
FairlightMixerMasterCompressorUpdateCommand.rawName = 'MOCP';
//# sourceMappingURL=FairlightMixerMasterCompressorCommand.js.map