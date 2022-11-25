"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceCompressorUpdateCommand = exports.FairlightMixerSourceCompressorCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceCompressorCommand extends CommandBase_1.WritableCommand {
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
        buffer.writeUInt8(this.properties.compressorEnabled ? 1 : 0, 16);
        buffer.writeInt32BE(this.properties.threshold || 0, 20);
        buffer.writeInt16BE(this.properties.ratio || 0, 24);
        buffer.writeInt32BE(this.properties.attack || 0, 28);
        buffer.writeInt32BE(this.properties.hold || 0, 32);
        buffer.writeInt32BE(this.properties.release || 0, 36);
        return buffer;
    }
}
exports.FairlightMixerSourceCompressorCommand = FairlightMixerSourceCompressorCommand;
FairlightMixerSourceCompressorCommand.MaskFlags = {
    compressorEnabled: 1 << 0,
    threshold: 1 << 1,
    ratio: 1 << 2,
    attack: 1 << 3,
    hold: 1 << 4,
    release: 1 << 5,
};
FairlightMixerSourceCompressorCommand.rawName = 'CICP';
class FairlightMixerSourceCompressorUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
    }
    static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
            compressorEnabled: rawCommand.readUInt8(16) > 0,
            threshold: rawCommand.readInt32BE(20),
            ratio: rawCommand.readInt16BE(24),
            attack: rawCommand.readInt32BE(28),
            hold: rawCommand.readInt32BE(32),
            release: rawCommand.readInt32BE(36),
        };
        return new FairlightMixerSourceCompressorUpdateCommand(index, source, properties);
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
        source.dynamics.compressor = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.dynamics.compressor`;
    }
}
exports.FairlightMixerSourceCompressorUpdateCommand = FairlightMixerSourceCompressorUpdateCommand;
FairlightMixerSourceCompressorUpdateCommand.rawName = 'AICP';
//# sourceMappingURL=FairlightMixerSourceCompressorCommand.js.map