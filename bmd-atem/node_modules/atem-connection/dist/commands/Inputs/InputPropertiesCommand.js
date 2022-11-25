"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPropertiesUpdateCommand = exports.InputPropertiesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const Util = require("../../lib/atemUtil");
class InputPropertiesCommand extends CommandBase_1.WritableCommand {
    constructor(inputId) {
        super();
        this.inputId = inputId;
    }
    serialize() {
        const buffer = Buffer.alloc(32);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.inputId, 2);
        buffer.write(this.properties.longName || '', 4);
        buffer.write(this.properties.shortName || '', 24);
        buffer.writeUInt16BE(this.properties.externalPortType || 0, 28);
        return buffer;
    }
}
exports.InputPropertiesCommand = InputPropertiesCommand;
InputPropertiesCommand.MaskFlags = {
    longName: 1 << 0,
    shortName: 1 << 1,
    externalPortType: 1 << 2,
};
InputPropertiesCommand.rawName = 'CInL';
class InputPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(inputId, properties) {
        super(properties);
        this.inputId = inputId;
    }
    static deserialize(rawCommand) {
        const inputId = rawCommand.readUInt16BE(0);
        const properties = {
            inputId: rawCommand.readUInt16BE(0),
            longName: Util.bufToNullTerminatedString(rawCommand, 2, 20),
            shortName: Util.bufToNullTerminatedString(rawCommand, 22, 4),
            areNamesDefault: rawCommand.readUInt8(26) === 1,
            externalPorts: Util.getComponents(rawCommand.readUInt16BE(28)),
            externalPortType: rawCommand.readUInt16BE(30),
            internalPortType: rawCommand.readUInt8(32),
            sourceAvailability: rawCommand.readUInt8(34),
            meAvailability: rawCommand.readUInt8(35),
        };
        return new InputPropertiesUpdateCommand(inputId, properties);
    }
    applyToState(state) {
        state.inputs[this.inputId] = {
            ...this.properties,
        };
        return `inputs.${this.inputId}`;
    }
}
exports.InputPropertiesUpdateCommand = InputPropertiesUpdateCommand;
InputPropertiesUpdateCommand.rawName = 'InPr';
//# sourceMappingURL=InputPropertiesCommand.js.map