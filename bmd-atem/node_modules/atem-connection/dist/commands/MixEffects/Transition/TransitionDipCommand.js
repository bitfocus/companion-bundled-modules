"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionDipUpdateCommand = exports.TransitionDipCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class TransitionDipCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.properties.rate || 0, 2);
        buffer.writeUInt16BE(this.properties.input || 0, 4);
        return buffer;
    }
}
exports.TransitionDipCommand = TransitionDipCommand;
TransitionDipCommand.MaskFlags = {
    rate: 1 << 0,
    input: 1 << 1,
};
TransitionDipCommand.rawName = 'CTDp';
class TransitionDipUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            rate: rawCommand.readUInt8(1),
            input: (rawCommand.readUInt8(2) << 8) | (rawCommand.readUInt8(3) & 0xff),
        };
        return new TransitionDipUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.dip = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.dip`;
    }
}
exports.TransitionDipUpdateCommand = TransitionDipUpdateCommand;
TransitionDipUpdateCommand.rawName = 'TDpP';
//# sourceMappingURL=TransitionDipCommand.js.map