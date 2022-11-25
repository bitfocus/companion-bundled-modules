"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroAddTimedPauseCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MacroAddTimedPauseCommand extends CommandBase_1.BasicWritableCommand {
    constructor(frames) {
        super({ frames });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.frames, 2);
        return buffer;
    }
}
exports.MacroAddTimedPauseCommand = MacroAddTimedPauseCommand;
MacroAddTimedPauseCommand.rawName = 'MSlp';
//# sourceMappingURL=MacroAddTimedPauseCommand.js.map