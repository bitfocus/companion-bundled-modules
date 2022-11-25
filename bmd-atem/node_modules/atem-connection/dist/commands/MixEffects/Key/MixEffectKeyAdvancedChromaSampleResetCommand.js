"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyAdvancedChromaSampleResetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
class MixEffectKeyAdvancedChromaSampleResetCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, upstreamKeyerId, props) {
        super(props);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        let val = 0;
        if (this.properties.keyAdjustments) {
            val |= 1 << 0;
        }
        if (this.properties.chromaCorrection) {
            val |= 1 << 1;
        }
        if (this.properties.colorAdjustments) {
            val |= 1 << 2;
        }
        buffer.writeUInt8(val, 3);
        return buffer;
    }
}
exports.MixEffectKeyAdvancedChromaSampleResetCommand = MixEffectKeyAdvancedChromaSampleResetCommand;
MixEffectKeyAdvancedChromaSampleResetCommand.rawName = 'RACK';
//# sourceMappingURL=MixEffectKeyAdvancedChromaSampleResetCommand.js.map