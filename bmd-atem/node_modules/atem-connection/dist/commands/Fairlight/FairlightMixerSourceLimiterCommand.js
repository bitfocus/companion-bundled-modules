"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceLimiterUpdateCommand = exports.FairlightMixerSourceLimiterCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceLimiterCommand extends CommandBase_1.WritableCommand {
    constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
    }
    serialize() {
        const buffer = Buffer.alloc(36);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.limiterEnabled ? 1 : 0, 16);
        buffer.writeInt32BE(this.properties.threshold || 0, 20);
        buffer.writeInt32BE(this.properties.attack || 0, 24);
        buffer.writeInt32BE(this.properties.hold || 0, 28);
        buffer.writeInt32BE(this.properties.release || 0, 32);
        return buffer;
    }
}
exports.FairlightMixerSourceLimiterCommand = FairlightMixerSourceLimiterCommand;
FairlightMixerSourceLimiterCommand.MaskFlags = {
    limiterEnabled: 1 << 0,
    threshold: 1 << 1,
    attack: 1 << 2,
    hold: 1 << 3,
    release: 1 << 4,
};
FairlightMixerSourceLimiterCommand.rawName = 'CILP';
class FairlightMixerSourceLimiterUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
    }
    static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
            limiterEnabled: rawCommand.readUInt8(16) > 0,
            threshold: rawCommand.readInt32BE(20),
            attack: rawCommand.readInt32BE(24),
            hold: rawCommand.readInt32BE(28),
            release: rawCommand.readInt32BE(32),
        };
        return new FairlightMixerSourceLimiterUpdateCommand(index, source, properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        const input = state.fairlight.inputs[this.index];
        if (!input) {
            throw new state_1.InvalidIdError('Fairlight.Inputs', this.index);
        }
        const sourceIdStr = this.source.toString();
        const source = input.sources[sourceIdStr] || {};
        input.sources[sourceIdStr] = source;
        if (!source.dynamics) {
            source.dynamics = {};
        }
        source.dynamics.limiter = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.dynamics.limiter`;
    }
}
exports.FairlightMixerSourceLimiterUpdateCommand = FairlightMixerSourceLimiterUpdateCommand;
FairlightMixerSourceLimiterUpdateCommand.rawName = 'AILP';
//# sourceMappingURL=FairlightMixerSourceLimiterCommand.js.map