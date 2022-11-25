"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyRunToCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const enums_1 = require("../../../enums");
class MixEffectKeyRunToCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, upstreamKeyerId, keyFrameId, direction) {
        super({ keyFrameId, direction });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.properties.keyFrameId === enums_1.FlyKeyKeyFrame.RunToInfinite ? 2 : 0, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.keyFrameId, 4);
        buffer.writeUInt8(this.properties.direction, 5);
        return buffer;
    }
}
exports.MixEffectKeyRunToCommand = MixEffectKeyRunToCommand;
MixEffectKeyRunToCommand.rawName = 'RFlK';
//# sourceMappingURL=MixEffectKeyRunToCommand.js.map