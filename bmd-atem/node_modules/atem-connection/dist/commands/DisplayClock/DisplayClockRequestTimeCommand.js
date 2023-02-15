"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClockRequestTimeCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DisplayClockRequestTimeCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        // Future: id at byte 0
        return Buffer.alloc(4);
    }
}
exports.DisplayClockRequestTimeCommand = DisplayClockRequestTimeCommand;
DisplayClockRequestTimeCommand.rawName = 'DSTR';
//# sourceMappingURL=DisplayClockRequestTimeCommand.js.map