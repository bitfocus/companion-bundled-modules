"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionStingerUpdateCommand = exports.TransitionStingerCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class TransitionStingerCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.properties.source || 0, 3);
        buffer.writeUInt8(this.properties.preMultipliedKey ? 1 : 0, 4);
        buffer.writeUInt16BE(this.properties.clip || 0, 6);
        buffer.writeUInt16BE(this.properties.gain || 0, 8);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 10);
        buffer.writeUInt16BE(this.properties.preroll || 0, 12);
        buffer.writeUInt16BE(this.properties.clipDuration || 0, 14);
        buffer.writeUInt16BE(this.properties.triggerPoint || 0, 16);
        buffer.writeUInt16BE(this.properties.mixRate || 0, 18);
        return buffer;
    }
}
exports.TransitionStingerCommand = TransitionStingerCommand;
TransitionStingerCommand.MaskFlags = {
    source: 1 << 0,
    preMultipliedKey: 1 << 1,
    clip: 1 << 2,
    gain: 1 << 3,
    invert: 1 << 4,
    preroll: 1 << 5,
    clipDuration: 1 << 6,
    triggerPoint: 1 << 7,
    mixRate: 1 << 8,
};
TransitionStingerCommand.rawName = 'CTSt';
class TransitionStingerUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            source: rawCommand.readUInt8(1),
            preMultipliedKey: rawCommand.readUInt8(2) === 1,
            clip: rawCommand.readUInt16BE(4),
            gain: rawCommand.readUInt16BE(6),
            invert: rawCommand.readUInt8(8) === 1,
            preroll: (rawCommand.readUInt8(10) << 8) | rawCommand.readUInt8(11),
            clipDuration: (rawCommand.readUInt8(12) << 8) | rawCommand.readUInt8(13),
            triggerPoint: (rawCommand.readUInt8(14) << 8) | rawCommand.readUInt8(15),
            mixRate: (rawCommand.readUInt8(16) << 8) | rawCommand.readUInt8(17),
        };
        return new TransitionStingerUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.stinger = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.stinger`;
    }
}
exports.TransitionStingerUpdateCommand = TransitionStingerUpdateCommand;
TransitionStingerUpdateCommand.rawName = 'TStP';
//# sourceMappingURL=TransitionStingerCommand.js.map