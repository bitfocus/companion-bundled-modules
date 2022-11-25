"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyCutSourceSetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
class MixEffectKeyCutSourceSetCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, upstreamKeyerId, cutSource) {
        super({ cutSource });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt16BE(this.properties.cutSource, 2);
        return buffer;
    }
}
exports.MixEffectKeyCutSourceSetCommand = MixEffectKeyCutSourceSetCommand;
MixEffectKeyCutSourceSetCommand.rawName = 'CKeC';
//# sourceMappingURL=MixEffectKeyCutSourceSetCommand.js.map