"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyChromaUpdateCommand = exports.MixEffectKeyChromaCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyChromaCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt16BE(this.properties.hue || 0, 4);
        buffer.writeUInt16BE(this.properties.gain || 0, 6);
        buffer.writeUInt16BE(this.properties.ySuppress || 0, 8);
        buffer.writeUInt16BE(this.properties.lift || 0, 10);
        buffer.writeUInt8(this.properties.narrow ? 1 : 0, 12);
        return buffer;
    }
}
exports.MixEffectKeyChromaCommand = MixEffectKeyChromaCommand;
MixEffectKeyChromaCommand.MaskFlags = {
    hue: 1 << 0,
    gain: 1 << 1,
    ySuppress: 1 << 2,
    lift: 1 << 3,
    narrow: 1 << 4,
};
MixEffectKeyChromaCommand.rawName = 'CKCk';
class MixEffectKeyChromaUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
            hue: rawCommand.readUInt16BE(2),
            gain: rawCommand.readUInt16BE(4),
            ySuppress: rawCommand.readUInt16BE(6),
            lift: rawCommand.readUInt16BE(8),
            narrow: rawCommand.readUInt8(10) === 1,
        };
        return new MixEffectKeyChromaUpdateCommand(mixEffect, upstreamKeyerId, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.chromaSettings = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.chromaSettings`;
    }
}
exports.MixEffectKeyChromaUpdateCommand = MixEffectKeyChromaUpdateCommand;
MixEffectKeyChromaUpdateCommand.rawName = 'KeCk';
//# sourceMappingURL=MixEffectKeyChromaCommand.js.map