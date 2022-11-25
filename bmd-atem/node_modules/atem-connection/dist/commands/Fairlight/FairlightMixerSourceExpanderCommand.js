"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceExpanderUpdateCommand = exports.FairlightMixerSourceExpanderCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceExpanderCommand extends CommandBase_1.WritableCommand {
    constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
    }
    serialize() {
        const buffer = Buffer.alloc(40);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.expanderEnabled ? 1 : 0, 16);
        buffer.writeUInt8(this.properties.gateEnabled ? 1 : 0, 17);
        buffer.writeInt32BE(this.properties.threshold || 0, 20);
        buffer.writeInt16BE(this.properties.range || 0, 24);
        buffer.writeInt16BE(this.properties.ratio || 0, 26);
        buffer.writeInt32BE(this.properties.attack || 0, 28);
        buffer.writeInt32BE(this.properties.hold || 0, 32);
        buffer.writeInt32BE(this.properties.release || 0, 36);
        return buffer;
    }
}
exports.FairlightMixerSourceExpanderCommand = FairlightMixerSourceExpanderCommand;
FairlightMixerSourceExpanderCommand.MaskFlags = {
    expanderEnabled: 1 << 0,
    gateEnabled: 1 << 1,
    threshold: 1 << 2,
    range: 1 << 3,
    ratio: 1 << 4,
    attack: 1 << 5,
    hold: 1 << 6,
    release: 1 << 7,
};
FairlightMixerSourceExpanderCommand.rawName = 'CIXP';
class FairlightMixerSourceExpanderUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
    }
    static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
            expanderEnabled: rawCommand.readUInt8(16) > 0,
            gateEnabled: rawCommand.readUInt8(17) > 0,
            threshold: rawCommand.readInt32BE(20),
            range: rawCommand.readInt16BE(24),
            ratio: rawCommand.readInt16BE(26),
            attack: rawCommand.readInt32BE(28),
            hold: rawCommand.readInt32BE(32),
            release: rawCommand.readInt32BE(36),
        };
        return new FairlightMixerSourceExpanderUpdateCommand(index, source, properties);
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
        source.dynamics.expander = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.dynamics.expander`;
    }
}
exports.FairlightMixerSourceExpanderUpdateCommand = FairlightMixerSourceExpanderUpdateCommand;
FairlightMixerSourceExpanderUpdateCommand.rawName = 'AIXP';
//# sourceMappingURL=FairlightMixerSourceExpanderCommand.js.map