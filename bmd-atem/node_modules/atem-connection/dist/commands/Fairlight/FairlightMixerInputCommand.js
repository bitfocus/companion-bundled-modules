"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerInputUpdateCommand = exports.FairlightMixerInputV8Command = exports.FairlightMixerInputCommand = void 0;
const state_1 = require("../../state");
const enums_1 = require("../../enums");
const Util = require("../../lib/atemUtil");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerInputCommand extends CommandBase_1.WritableCommand {
    constructor(index) {
        super();
        this.index = index;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeUInt8(this.properties.rcaToXlrEnabled ? 1 : 0, 4);
        buffer.writeUInt8(this.properties.activeConfiguration || 0, 5);
        return buffer;
    }
}
exports.FairlightMixerInputCommand = FairlightMixerInputCommand;
FairlightMixerInputCommand.MaskFlags = {
    rcaToXlrEnabled: 1 << 0,
    activeConfiguration: 1 << 1,
};
FairlightMixerInputCommand.rawName = 'CFIP';
class FairlightMixerInputV8Command extends CommandBase_1.WritableCommand {
    constructor(index) {
        super();
        this.index = index;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeUInt8(this.properties.activeConfiguration || 0, 4);
        buffer.writeUInt8(this.properties.activeInputLevel || 0, 5);
        return buffer;
    }
}
exports.FairlightMixerInputV8Command = FairlightMixerInputV8Command;
FairlightMixerInputV8Command.MaskFlags = {
    activeConfiguration: 1 << 0,
    activeInputLevel: 1 << 1,
};
FairlightMixerInputV8Command.rawName = 'CFIP';
FairlightMixerInputV8Command.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
class FairlightMixerInputUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, properties) {
        super(properties);
        this.index = index;
    }
    static deserialize(rawCommand, version) {
        const rcaToXlr = version < enums_1.ProtocolVersion.V8_1_1;
        const index = rawCommand.readUInt16BE(0);
        const properties = {
            inputType: rawCommand.readUInt8(2),
            externalPortType: rawCommand.readUInt16BE(6),
            supportedConfigurations: Util.getComponents(rawCommand.readUInt8(rcaToXlr ? 11 : 9)),
            activeConfiguration: rawCommand.readUInt8(rcaToXlr ? 12 : 10),
            // TODO - check these value conversions
            supportedInputLevels: rcaToXlr
                ? rawCommand.readUInt8(8) > 0
                    ? [enums_1.FairlightAnalogInputLevel.ProLine, enums_1.FairlightAnalogInputLevel.Microphone]
                    : []
                : Util.getComponents(rawCommand.readUInt8(11)),
            activeInputLevel: rcaToXlr
                ? rawCommand.readUInt8(9) > 0
                    ? enums_1.FairlightAnalogInputLevel.ProLine
                    : enums_1.FairlightAnalogInputLevel.Microphone
                : rawCommand.readUInt8(12),
        };
        return new FairlightMixerInputUpdateCommand(index, properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        state.fairlight.inputs[this.index] = {
            sources: {},
            ...state.fairlight.inputs[this.index],
            properties: this.properties,
        };
        return `fairlight.inputs.${this.index}.properties`;
    }
}
exports.FairlightMixerInputUpdateCommand = FairlightMixerInputUpdateCommand;
FairlightMixerInputUpdateCommand.rawName = 'FAIP';
//# sourceMappingURL=FairlightMixerInputCommand.js.map