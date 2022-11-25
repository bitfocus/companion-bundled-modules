"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionWipeUpdateCommand = exports.TransitionWipeCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class TransitionWipeCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.properties.rate || 0, 3);
        buffer.writeUInt8(this.properties.pattern || 0, 4);
        buffer.writeUInt16BE(this.properties.borderWidth || 0, 6);
        buffer.writeUInt16BE(this.properties.borderInput || 0, 8);
        buffer.writeUInt16BE(this.properties.symmetry || 0, 10);
        buffer.writeUInt16BE(this.properties.borderSoftness || 0, 12);
        buffer.writeUInt16BE(this.properties.xPosition || 0, 14);
        buffer.writeUInt16BE(this.properties.yPosition || 0, 16);
        buffer.writeUInt8(this.properties.reverseDirection ? 1 : 0, 18);
        buffer.writeUInt8(this.properties.flipFlop ? 1 : 0, 19);
        return buffer;
    }
}
exports.TransitionWipeCommand = TransitionWipeCommand;
TransitionWipeCommand.MaskFlags = {
    rate: 1 << 0,
    pattern: 1 << 1,
    borderWidth: 1 << 2,
    borderInput: 1 << 3,
    symmetry: 1 << 4,
    borderSoftness: 1 << 5,
    xPosition: 1 << 6,
    yPosition: 1 << 7,
    reverseDirection: 1 << 8,
    flipFlop: 1 << 9,
};
TransitionWipeCommand.rawName = 'CTWp';
class TransitionWipeUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            rate: rawCommand.readUInt8(1),
            pattern: rawCommand.readUInt8(2),
            borderWidth: rawCommand.readUInt16BE(4),
            borderInput: rawCommand.readUInt16BE(6),
            symmetry: rawCommand.readUInt16BE(8),
            borderSoftness: rawCommand.readUInt16BE(10),
            xPosition: rawCommand.readUInt16BE(12),
            yPosition: rawCommand.readUInt16BE(14),
            reverseDirection: rawCommand.readUInt8(16) === 1,
            flipFlop: rawCommand.readUInt8(17) === 1,
        };
        return new TransitionWipeUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.wipe = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.wipe`;
    }
}
exports.TransitionWipeUpdateCommand = TransitionWipeUpdateCommand;
TransitionWipeUpdateCommand.rawName = 'TWpP';
//# sourceMappingURL=TransitionWipeCommand.js.map