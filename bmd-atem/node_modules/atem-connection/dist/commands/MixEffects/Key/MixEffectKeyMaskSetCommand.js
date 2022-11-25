"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyMaskSetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
class MixEffectKeyMaskSetCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.maskEnabled ? 1 : 0, 3);
        buffer.writeInt16BE(this.properties.maskTop || 0, 4);
        buffer.writeInt16BE(this.properties.maskBottom || 0, 6);
        buffer.writeInt16BE(this.properties.maskLeft || 0, 8);
        buffer.writeInt16BE(this.properties.maskRight || 0, 10);
        return buffer;
    }
}
exports.MixEffectKeyMaskSetCommand = MixEffectKeyMaskSetCommand;
MixEffectKeyMaskSetCommand.MaskFlags = {
    maskEnabled: 1 << 0,
    maskTop: 1 << 1,
    maskBottom: 1 << 2,
    maskLeft: 1 << 3,
    maskRight: 1 << 4,
};
MixEffectKeyMaskSetCommand.rawName = 'CKMs';
//# sourceMappingURL=MixEffectKeyMaskSetCommand.js.map