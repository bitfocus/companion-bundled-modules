"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClockStateSetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DisplayClockStateSetCommand extends CommandBase_1.BasicWritableCommand {
    constructor(state) {
        super({ state });
    }
    serialize() {
        // Future: id at byte 0
        const buffer = Buffer.alloc(4);
        buffer.writeUint8(this.properties.state, 1);
        return buffer;
    }
}
exports.DisplayClockStateSetCommand = DisplayClockStateSetCommand;
DisplayClockStateSetCommand.rawName = 'DCSC';
//# sourceMappingURL=DisplayClockStateSetCommand.js.map