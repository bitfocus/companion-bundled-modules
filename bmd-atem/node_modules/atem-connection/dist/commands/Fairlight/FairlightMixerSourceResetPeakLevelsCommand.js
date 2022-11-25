"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceResetPeakLevelsCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceResetPeakLevelsCommand extends CommandBase_1.BasicWritableCommand {
    constructor(index, source, properties) {
        super(properties);
        this.index = index;
        this.source = source;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.index, 0);
        buffer.writeBigInt64BE(this.source, 8);
        let val = 0;
        if (this.properties.dynamicsInput) {
            val |= 1 << 0;
        }
        if (this.properties.dynamicsOutput) {
            val |= 1 << 1;
        }
        if (this.properties.output) {
            val |= 1 << 2;
        }
        buffer.writeUInt8(val, 17);
        return buffer;
    }
}
exports.FairlightMixerSourceResetPeakLevelsCommand = FairlightMixerSourceResetPeakLevelsCommand;
FairlightMixerSourceResetPeakLevelsCommand.rawName = 'RFIP';
//# sourceMappingURL=FairlightMixerSourceResetPeakLevelsCommand.js.map