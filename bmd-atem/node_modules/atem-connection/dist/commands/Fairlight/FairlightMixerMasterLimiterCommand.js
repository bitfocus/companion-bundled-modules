"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterLimiterUpdateCommand = exports.FairlightMixerMasterLimiterCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMasterLimiterCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.limiterEnabled ? 1 : 0, 1);
        buffer.writeInt32BE(this.properties.threshold || 0, 4);
        buffer.writeInt32BE(this.properties.attack || 0, 8);
        buffer.writeInt32BE(this.properties.hold || 0, 12);
        buffer.writeInt32BE(this.properties.release || 0, 16);
        return buffer;
    }
}
exports.FairlightMixerMasterLimiterCommand = FairlightMixerMasterLimiterCommand;
FairlightMixerMasterLimiterCommand.MaskFlags = {
    limiterEnabled: 1 << 0,
    threshold: 1 << 1,
    attack: 1 << 2,
    hold: 1 << 3,
    release: 1 << 4,
};
FairlightMixerMasterLimiterCommand.rawName = 'CMLP';
class FairlightMixerMasterLimiterUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            limiterEnabled: rawCommand.readUInt8(0) > 0,
            threshold: rawCommand.readInt32BE(4),
            attack: rawCommand.readInt32BE(8),
            hold: rawCommand.readInt32BE(12),
            release: rawCommand.readInt32BE(16),
        };
        return new FairlightMixerMasterLimiterUpdateCommand(properties);
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
        state.fairlight.master.dynamics.limiter = this.properties;
        return `fairlight.master.dynamics.limiter`;
    }
}
exports.FairlightMixerMasterLimiterUpdateCommand = FairlightMixerMasterLimiterUpdateCommand;
FairlightMixerMasterLimiterUpdateCommand.rawName = 'AMLP';
//# sourceMappingURL=FairlightMixerMasterLimiterCommand.js.map