"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyFlyKeyframeStoreCommand = exports.MixEffectKeyFlyKeyframeCommand = exports.MixEffectKeyFlyKeyframeUpdateCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyFlyKeyframeUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, keyFrameId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
        this.keyFrameId = keyFrameId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const keyFrameId = rawCommand.readUInt8(2);
        const properties = {
            sizeX: rawCommand.readUInt32BE(4),
            sizeY: rawCommand.readUInt32BE(8),
            positionX: rawCommand.readInt32BE(12),
            positionY: rawCommand.readInt32BE(16),
            rotation: rawCommand.readInt32BE(20),
            borderOuterWidth: rawCommand.readUInt16BE(24),
            borderInnerWidth: rawCommand.readUInt16BE(26),
            borderOuterSoftness: rawCommand.readUInt8(28),
            borderInnerSoftness: rawCommand.readUInt8(29),
            borderBevelSoftness: rawCommand.readUInt8(30),
            borderBevelPosition: rawCommand.readUInt8(31),
            borderOpacity: rawCommand.readUInt8(32),
            borderHue: rawCommand.readUInt16BE(34),
            borderSaturation: rawCommand.readUInt16BE(36),
            borderLuma: rawCommand.readUInt16BE(38),
            lightSourceDirection: rawCommand.readUInt16BE(40),
            lightSourceAltitude: rawCommand.readUInt8(42),
            // maskEnabled: rawCommand.readUInt8(43) === 1,
            maskTop: rawCommand.readInt16BE(44),
            maskBottom: rawCommand.readInt16BE(46),
            maskLeft: rawCommand.readInt16BE(48),
            maskRight: rawCommand.readInt16BE(50),
        };
        return new MixEffectKeyFlyKeyframeUpdateCommand(mixEffect, upstreamKeyerId, keyFrameId, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        else if (this.keyFrameId <= 0 || this.keyFrameId > 2) {
            throw new state_1.InvalidIdError('FlyKeyFrame', this.keyFrameId);
        }
        const index = this.keyFrameId - 1;
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.flyKeyframes[index] = {
            ...this.properties,
            keyFrameId: this.keyFrameId,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.flyKeyframes.${index}`;
    }
}
exports.MixEffectKeyFlyKeyframeUpdateCommand = MixEffectKeyFlyKeyframeUpdateCommand;
MixEffectKeyFlyKeyframeUpdateCommand.rawName = 'KKFP';
class MixEffectKeyFlyKeyframeCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect, upstreamKeyerId, keyFrameId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
        this.keyFrameId = keyFrameId;
    }
    serialize() {
        const buffer = Buffer.alloc(56);
        buffer.writeUInt32BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 4);
        buffer.writeUInt8(this.upstreamKeyerId, 5);
        buffer.writeUInt8(this.keyFrameId, 6);
        buffer.writeUInt32BE(this.properties.sizeX || 0, 8);
        buffer.writeUInt32BE(this.properties.sizeY || 0, 12);
        buffer.writeInt32BE(this.properties.positionX || 0, 16);
        buffer.writeInt32BE(this.properties.positionY || 0, 20);
        buffer.writeInt32BE(this.properties.rotation || 0, 24);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 28);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 30);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 32);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 33);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 34);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 35);
        buffer.writeUInt8(this.properties.borderOpacity || 0, 36);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 38);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 40);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 42);
        buffer.writeUInt16BE(this.properties.lightSourceDirection || 0, 44);
        buffer.writeUInt8(this.properties.lightSourceAltitude || 0, 46);
        buffer.writeInt16BE(this.properties.maskTop || 0, 48);
        buffer.writeInt16BE(this.properties.maskBottom || 0, 50);
        buffer.writeInt16BE(this.properties.maskLeft || 0, 52);
        buffer.writeInt16BE(this.properties.maskRight || 0, 54);
        return buffer;
    }
}
exports.MixEffectKeyFlyKeyframeCommand = MixEffectKeyFlyKeyframeCommand;
MixEffectKeyFlyKeyframeCommand.MaskFlags = {
    sizeX: 1 << 0,
    sizeY: 1 << 1,
    positionX: 1 << 2,
    positionY: 1 << 3,
    rotation: 1 << 4,
    borderOuterWidth: 1 << 5,
    borderInnerWidth: 1 << 6,
    borderOuterSoftness: 1 << 7,
    borderInnerSoftness: 1 << 8,
    borderBevelSoftness: 1 << 9,
    borderBevelPosition: 1 << 10,
    borderOpacity: 1 << 11,
    borderHue: 1 << 12,
    borderSaturation: 1 << 13,
    borderLuma: 1 << 14,
    lightSourceDirection: 1 << 15,
    lightSourceAltitude: 1 << 16,
    maskTop: 1 << 17,
    maskBottom: 1 << 18,
    maskLeft: 1 << 19,
    maskRight: 1 << 20,
};
MixEffectKeyFlyKeyframeCommand.rawName = 'CKFP';
class MixEffectKeyFlyKeyframeStoreCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, upstreamKeyerId, keyFrameId) {
        super({});
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
        this.keyFrameId = keyFrameId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt8(this.keyFrameId, 2);
        return buffer;
    }
}
exports.MixEffectKeyFlyKeyframeStoreCommand = MixEffectKeyFlyKeyframeStoreCommand;
MixEffectKeyFlyKeyframeStoreCommand.rawName = 'SFKF';
//# sourceMappingURL=MixEffectKeyFlyKeyframeCommand.js.map