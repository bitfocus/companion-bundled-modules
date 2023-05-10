"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroRecordCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const __1 = require("../..");
class MacroRecordCommand extends CommandBase_1.BasicWritableCommand {
    constructor(index, name, description) {
        super({ name, description });
        this.index = index;
    }
    serialize() {
        const name = this.properties.name || '';
        const description = this.properties.description || '';
        const buffer = Buffer.alloc(__1.Util.padToMultiple(8 + name.length + description.length, 4));
        buffer.writeUInt16BE(this.index, 0);
        buffer.writeUInt16BE(name.length, 2);
        buffer.writeUInt16BE(description.length, 4);
        buffer.write(name, 6, 'utf8');
        buffer.write(description, 6 + name.length, 'utf8');
        return buffer;
    }
}
exports.MacroRecordCommand = MacroRecordCommand;
MacroRecordCommand.rawName = 'MSRc';
//# sourceMappingURL=MacroRecordCommand.js.map