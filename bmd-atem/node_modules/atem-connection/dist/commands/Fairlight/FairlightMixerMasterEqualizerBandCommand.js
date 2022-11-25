"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterEqualizerBandUpdateCommand = exports.FairlightMixerMasterEqualizerBandCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
const AtemUtil = require("../../lib/atemUtil");
class FairlightMixerMasterEqualizerBandCommand extends CommandBase_1.WritableCommand {
    constructor(band) {
        super();
        this.band = band;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.band, 1);
        buffer.writeUInt8(this.properties.bandEnabled ? 1 : 0, 2);
        buffer.writeUInt8(this.properties.shape || 0, 3);
        buffer.writeUInt8(this.properties.frequencyRange || 0, 4);
        buffer.writeUInt32BE(this.properties.frequency || 0, 8);
        buffer.writeInt32BE(this.properties.gain || 0, 12);
        buffer.writeInt16BE(this.properties.qFactor || 0, 16);
        return buffer;
    }
}
exports.FairlightMixerMasterEqualizerBandCommand = FairlightMixerMasterEqualizerBandCommand;
FairlightMixerMasterEqualizerBandCommand.MaskFlags = {
    bandEnabled: 1 << 0,
    shape: 1 << 1,
    frequencyRange: 1 << 2,
    frequency: 1 << 3,
    gain: 1 << 4,
    qFactor: 1 << 5,
};
FairlightMixerMasterEqualizerBandCommand.rawName = 'CMBP';
class FairlightMixerMasterEqualizerBandUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(band, properties) {
        super(properties);
        this.band = band;
    }
    static deserialize(rawCommand) {
        const band = rawCommand.readUInt8(0);
        const properties = {
            bandEnabled: rawCommand.readUInt8(1) > 0,
            supportedShapes: AtemUtil.getComponents(rawCommand.readUInt8(2)),
            shape: rawCommand.readUInt8(3),
            supportedFrequencyRanges: AtemUtil.getComponents(rawCommand.readUInt8(4)),
            frequencyRange: rawCommand.readUInt8(5),
            frequency: rawCommand.readUInt32BE(8),
            gain: rawCommand.readInt32BE(12),
            qFactor: rawCommand.readInt16BE(16),
        };
        return new FairlightMixerMasterEqualizerBandUpdateCommand(band, properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        if (!state.fairlight.master) {
            throw new state_1.InvalidIdError('Fairlight.Master');
        }
        if (!state.fairlight.master.equalizer) {
            throw new state_1.InvalidIdError('Fairlight.Master.Equalizer');
        }
        if (this.band >= state.fairlight.master.equalizer.bands.length) {
            throw new state_1.InvalidIdError('Fairlight.Master.Equalizer', this.band);
        }
        state.fairlight.master.equalizer.bands[this.band] = this.properties;
        return `fairlight.master.equalizer.bands.${this.band}`;
    }
}
exports.FairlightMixerMasterEqualizerBandUpdateCommand = FairlightMixerMasterEqualizerBandUpdateCommand;
FairlightMixerMasterEqualizerBandUpdateCommand.rawName = 'AMBP';
//# sourceMappingURL=FairlightMixerMasterEqualizerBandCommand.js.map