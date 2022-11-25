"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyTypeSetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
class MixEffectKeyTypeSetCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.mixEffectKeyType || 0, 3);
        buffer.writeUInt8(this.properties.flyEnabled ? 1 : 0, 4);
        return buffer;
    }
}
exports.MixEffectKeyTypeSetCommand = MixEffectKeyTypeSetCommand;
MixEffectKeyTypeSetCommand.MaskFlags = {
    mixEffectKeyType: 1 << 0,
    flyEnabled: 1 << 1,
};
MixEffectKeyTypeSetCommand.rawName = 'CKTp';
//# sourceMappingURL=MixEffectKeyTypeSetCommand.js.map