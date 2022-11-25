"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyFillSourceSetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
class MixEffectKeyFillSourceSetCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, upstreamKeyerId, fillSource) {
        super({ fillSource });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt16BE(this.properties.fillSource, 2);
        return buffer;
    }
}
exports.MixEffectKeyFillSourceSetCommand = MixEffectKeyFillSourceSetCommand;
MixEffectKeyFillSourceSetCommand.rawName = 'CKeF';
//# sourceMappingURL=MixEffectKeyFillSourceSetCommand.js.map