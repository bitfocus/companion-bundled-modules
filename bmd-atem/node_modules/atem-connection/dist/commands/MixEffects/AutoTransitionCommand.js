"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTransitionCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class AutoTransitionCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect) {
        super(null);
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        return buffer;
    }
}
exports.AutoTransitionCommand = AutoTransitionCommand;
AutoTransitionCommand.rawName = 'DAut';
//# sourceMappingURL=AutoTransitionCommand.js.map