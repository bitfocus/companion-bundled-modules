"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerInputUpdateV8Command = exports.AudioMixerInputUpdateCommand = exports.AudioMixerInputCommand = void 0;
const state_1 = require("../../state");
const __1 = require("../..");
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class AudioMixerInputCommand extends CommandBase_1.WritableCommand {
    constructor(index) {
        super();
        this.index = index;
    }
    serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeUInt8(this.properties.mixOption || 0, 4);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 6);
        buffer.writeInt16BE(__1.Util.BalanceToInt(this.properties.balance || 0), 8);
        buffer.writeUInt8(this.properties.rcaToXlrEnabled ? 1 : 0, 10);
        return buffer;
    }
}
exports.AudioMixerInputCommand = AudioMixerInputCommand;
AudioMixerInputCommand.MaskFlags = {
    mixOption: 1 << 0,
    gain: 1 << 1,
    balance: 1 << 2,
    rcaToXlrEnabled: 1 << 3,
};
AudioMixerInputCommand.rawName = 'CAMI';
class AudioMixerInputUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, properties) {
        super(properties);
        this.index = index;
    }
    static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const properties = {
            sourceType: rawCommand.readUInt8(2),
            portType: rawCommand.readUInt16BE(6),
            mixOption: rawCommand.readUInt8(8),
            gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(10)),
            balance: __1.Util.IntToBalance(rawCommand.readInt16BE(12)),
        };
        return new AudioMixerInputUpdateCommand(index, properties);
    }
    applyToState(state) {
        if (!state.audio) {
            throw new state_1.InvalidIdError('Classic Audio');
        }
        state.audio.channels[this.index] = {
            ...this.properties,
            rcaToXlrEnabled: false,
            supportsRcaToXlrEnabled: false,
        };
        return `audio.channels.${this.index}`;
    }
}
exports.AudioMixerInputUpdateCommand = AudioMixerInputUpdateCommand;
AudioMixerInputUpdateCommand.rawName = 'AMIP';
class AudioMixerInputUpdateV8Command extends CommandBase_1.DeserializedCommand {
    constructor(index, properties) {
        super(properties);
        this.index = index;
    }
    static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const properties = {
            sourceType: rawCommand.readUInt8(2),
            portType: rawCommand.readUInt16BE(6),
            mixOption: rawCommand.readUInt8(8),
            gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(10)),
            balance: __1.Util.IntToBalance(rawCommand.readInt16BE(12)),
            supportsRcaToXlrEnabled: rawCommand.readUInt8(14) != 0,
            rcaToXlrEnabled: rawCommand.readUInt8(15) != 0,
        };
        return new AudioMixerInputUpdateV8Command(index, properties);
    }
    applyToState(state) {
        if (!state.audio) {
            throw new state_1.InvalidIdError('Classic Audio');
        }
        state.audio.channels[this.index] = this.properties;
        return `audio.channels.${this.index}`;
    }
}
exports.AudioMixerInputUpdateV8Command = AudioMixerInputUpdateV8Command;
AudioMixerInputUpdateV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0;
AudioMixerInputUpdateV8Command.rawName = 'AMIP';
//# sourceMappingURL=AudioMixerInputCommand.js.map