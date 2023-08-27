"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSendLevelsCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSendLevelsCommand extends CommandBase_1.BasicWritableCommand {
    constructor(sendLevels) {
        super({ sendLevels });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.sendLevels ? 1 : 0, 0);
        return buffer;
    }
}
exports.FairlightMixerSendLevelsCommand = FairlightMixerSendLevelsCommand;
FairlightMixerSendLevelsCommand.rawName = 'SFLN';
//# sourceMappingURL=FairlightMixerSendLevelsCommand.js.map