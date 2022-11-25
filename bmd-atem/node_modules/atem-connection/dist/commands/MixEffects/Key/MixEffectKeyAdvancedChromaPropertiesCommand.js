"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyAdvancedChromaPropertiesUpdateCommand = exports.MixEffectKeyAdvancedChromaPropertiesCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyAdvancedChromaPropertiesCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(28);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.upstreamKeyerId, 3);
        buffer.writeUInt16BE(this.properties.foregroundLevel || 0, 4);
        buffer.writeUInt16BE(this.properties.backgroundLevel || 0, 6);
        buffer.writeUInt16BE(this.properties.keyEdge || 0, 8);
        buffer.writeUInt16BE(this.properties.spillSuppression || 0, 10);
        buffer.writeUInt16BE(this.properties.flareSuppression || 0, 12);
        buffer.writeInt16BE(this.properties.brightness || 0, 14);
        buffer.writeInt16BE(this.properties.contrast || 0, 16);
        buffer.writeUInt16BE(this.properties.saturation || 0, 18);
        buffer.writeInt16BE(this.properties.red || 0, 20);
        buffer.writeInt16BE(this.properties.green || 0, 22);
        buffer.writeInt16BE(this.properties.blue || 0, 24);
        return buffer;
    }
}
exports.MixEffectKeyAdvancedChromaPropertiesCommand = MixEffectKeyAdvancedChromaPropertiesCommand;
MixEffectKeyAdvancedChromaPropertiesCommand.MaskFlags = {
    foregroundLevel: 1 << 0,
    backgroundLevel: 1 << 1,
    keyEdge: 1 << 2,
    spillSuppression: 1 << 3,
    flareSuppression: 1 << 4,
    brightness: 1 << 5,
    contrast: 1 << 6,
    saturation: 1 << 7,
    red: 1 << 8,
    green: 1 << 9,
    blue: 1 << 10,
};
MixEffectKeyAdvancedChromaPropertiesCommand.rawName = 'CACK';
class MixEffectKeyAdvancedChromaPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
            foregroundLevel: rawCommand.readUInt16BE(2),
            backgroundLevel: rawCommand.readUInt16BE(4),
            keyEdge: rawCommand.readUInt16BE(6),
            spillSuppression: rawCommand.readUInt16BE(8),
            flareSuppression: rawCommand.readUInt16BE(10),
            brightness: rawCommand.readInt16BE(12),
            contrast: rawCommand.readInt16BE(14),
            saturation: rawCommand.readUInt16BE(16),
            red: rawCommand.readInt16BE(18),
            green: rawCommand.readInt16BE(20),
            blue: rawCommand.readInt16BE(22),
        };
        return new MixEffectKeyAdvancedChromaPropertiesUpdateCommand(mixEffect, upstreamKeyerId, properties);
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
            properties: this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.advancedChromaSettings.properties`;
    }
}
exports.MixEffectKeyAdvancedChromaPropertiesUpdateCommand = MixEffectKeyAdvancedChromaPropertiesUpdateCommand;
MixEffectKeyAdvancedChromaPropertiesUpdateCommand.rawName = 'KACk';
//# sourceMappingURL=MixEffectKeyAdvancedChromaPropertiesCommand.js.map