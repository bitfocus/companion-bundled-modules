"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyLumaUpdateCommand = exports.MixEffectKeyLumaCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyLumaCommand extends CommandBase_1.WritableCommand {
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
        buffer.writeUInt8(this.properties.preMultiplied ? 1 : 0, 3);
        buffer.writeUInt16BE(this.properties.clip || 0, 4);
        buffer.writeUInt16BE(this.properties.gain || 0, 6);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 8);
        return buffer;
    }
}
exports.MixEffectKeyLumaCommand = MixEffectKeyLumaCommand;
MixEffectKeyLumaCommand.MaskFlags = {
    preMultiplied: 1 << 0,
    clip: 1 << 1,
    gain: 1 << 2,
    invert: 1 << 3,
};
MixEffectKeyLumaCommand.rawName = 'CKLm';
class MixEffectKeyLumaUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
            preMultiplied: rawCommand.readUInt8(2) === 1,
            clip: rawCommand.readUInt16BE(4),
            gain: rawCommand.readUInt16BE(6),
            invert: rawCommand.readUInt8(8) === 1,
        };
        return new MixEffectKeyLumaUpdateCommand(mixEffect, upstreamKeyerId, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.lumaSettings = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.lumaSettings`;
    }
}
exports.MixEffectKeyLumaUpdateCommand = MixEffectKeyLumaUpdateCommand;
MixEffectKeyLumaUpdateCommand.rawName = 'KeLm';
//# sourceMappingURL=MixEffectKeyLumaCommand.js.map