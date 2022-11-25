"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyAdvancedChromaSampleUpdateCommand = exports.MixEffectKeyAdvancedChromaSampleCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyAdvancedChromaSampleCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.enableCursor ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.preview ? 1 : 0, 4);
        buffer.writeInt16BE(this.properties.cursorX || 0, 6);
        buffer.writeInt16BE(this.properties.cursorY || 0, 8);
        buffer.writeUInt16BE(this.properties.cursorSize || 0, 10);
        buffer.writeUInt16BE(this.properties.sampledY || 0, 12);
        buffer.writeInt16BE(this.properties.sampledCb || 0, 14);
        buffer.writeInt16BE(this.properties.sampledCr || 0, 16);
        return buffer;
    }
}
exports.MixEffectKeyAdvancedChromaSampleCommand = MixEffectKeyAdvancedChromaSampleCommand;
MixEffectKeyAdvancedChromaSampleCommand.MaskFlags = {
    enableCursor: 1 << 0,
    preview: 1 << 1,
    cursorX: 1 << 2,
    cursorY: 1 << 3,
    cursorSize: 1 << 4,
    sampledY: 1 << 5,
    sampledCb: 1 << 6,
    sampledCr: 1 << 7,
};
MixEffectKeyAdvancedChromaSampleCommand.rawName = 'CACC';
class MixEffectKeyAdvancedChromaSampleUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
            enableCursor: rawCommand.readUInt8(2) > 0,
            preview: rawCommand.readUInt8(3) > 0,
            cursorX: rawCommand.readInt16BE(4),
            cursorY: rawCommand.readInt16BE(6),
            cursorSize: rawCommand.readUInt16BE(8),
            sampledY: rawCommand.readUInt16BE(10),
            sampledCb: rawCommand.readInt16BE(12),
            sampledCr: rawCommand.readInt16BE(14),
        };
        return new MixEffectKeyAdvancedChromaSampleUpdateCommand(mixEffect, upstreamKeyerId, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.advancedChromaSettings = {
            ...upstreamKeyer.advancedChromaSettings,
            sample: this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.advancedChromaSettings.sample`;
    }
}
exports.MixEffectKeyAdvancedChromaSampleUpdateCommand = MixEffectKeyAdvancedChromaSampleUpdateCommand;
MixEffectKeyAdvancedChromaSampleUpdateCommand.rawName = 'KACC';
//# sourceMappingURL=MixEffectKeyAdvancedChromaSampleCommand.js.map