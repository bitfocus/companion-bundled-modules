"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerResetPeakLevelsCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerResetPeakLevelsCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        let val = 0;
        if (this.properties.all) {
            val |= 1 << 0;
            // some magic number that is needed for this to work
            buffer.writeUInt8(0x01, 1);
        }
        if (this.properties.master) {
            val |= 1 << 1;
            // some magic number that is needed for this to work
            buffer.writeUInt8(0x04, 3);
        }
        buffer.writeUInt8(val, 0);
        return buffer;
    }
}
exports.FairlightMixerResetPeakLevelsCommand = FairlightMixerResetPeakLevelsCommand;
FairlightMixerResetPeakLevelsCommand.rawName = 'RFLP';
//# sourceMappingURL=FairlightMixerResetPeakLevelsCommand.js.map