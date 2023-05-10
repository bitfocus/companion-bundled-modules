"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroPropertiesCommand = exports.MacroPropertiesUpdateCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const Util = require("../../lib/atemUtil");
class MacroPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(macroIndexID, properties) {
        super(properties);
        this.macroIndex = macroIndexID;
    }
    static deserialize(rawCommand) {
        const macroIndexID = rawCommand.readUInt16BE(0);
        const nameLen = rawCommand.readUInt16BE(4);
        const descLen = rawCommand.readUInt16BE(6);
        const properties = {
            isUsed: rawCommand.readUInt8(2) != 0,
            hasUnsupportedOps: rawCommand.readUInt8(3) != 0,
            name: '',
            description: '',
        };
        if (nameLen > 0) {
            properties.name = Util.bufToNullTerminatedString(rawCommand, 8, nameLen);
        }
        if (descLen > 0) {
            properties.description = Util.bufToNullTerminatedString(rawCommand, 8 + nameLen, descLen);
        }
        return new MacroPropertiesUpdateCommand(macroIndexID, properties);
    }
    applyToState(state) {
        state.macro.macroProperties[this.macroIndex] = this.properties;
        return `macro.macroProperties.${this.macroIndex}`;
    }
}
exports.MacroPropertiesUpdateCommand = MacroPropertiesUpdateCommand;
MacroPropertiesUpdateCommand.rawName = 'MPrp';
class MacroPropertiesCommand extends CommandBase_1.WritableCommand {
    constructor(macroIndex) {
        super();
        this.macroIndex = macroIndex;
    }
    serialize() {
        const name = this.properties.name || '';
        const description = this.properties.description || '';
        const buffer = Buffer.alloc(Util.padToMultiple(8 + name.length + description.length, 4));
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.macroIndex, 2);
        buffer.writeUInt16BE(name.length, 4);
        buffer.writeUInt16BE(description.length, 6);
        buffer.write(name, 8, 'utf8');
        buffer.write(description, 8 + name.length, 'utf8');
        return buffer;
    }
}
exports.MacroPropertiesCommand = MacroPropertiesCommand;
MacroPropertiesCommand.MaskFlags = {
    name: 1 << 0,
    description: 1 << 1,
};
MacroPropertiesCommand.rawName = 'CMPr';
//# sourceMappingURL=MacroPropertiesCommand.js.map