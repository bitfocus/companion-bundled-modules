"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroActionCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class MacroActionCommand extends CommandBase_1.BasicWritableCommand {
    constructor(index, action) {
        super({ action });
        this.index = index;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.action, 2);
        switch (this.properties.action) {
            case enums_1.MacroAction.Run:
            case enums_1.MacroAction.Delete:
                buffer.writeUInt16BE(this.index, 0);
                break;
            case enums_1.MacroAction.Stop:
            case enums_1.MacroAction.StopRecord:
            case enums_1.MacroAction.InsertUserWait:
            case enums_1.MacroAction.Continue:
                buffer.writeUInt16BE(0xffff, 0);
                break;
            default:
                break;
        }
        return buffer;
    }
}
exports.MacroActionCommand = MacroActionCommand;
MacroActionCommand.rawName = 'MAct';
//# sourceMappingURL=MacroActionCommand.js.map