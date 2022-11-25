"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionMixUpdateCommand = exports.TransitionMixCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class TransitionMixCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, rate) {
        super({ rate });
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.properties.rate || 0, 1);
        return buffer;
    }
}
exports.TransitionMixCommand = TransitionMixCommand;
TransitionMixCommand.rawName = 'CTMx';
class TransitionMixUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            rate: rawCommand.readUInt8(1),
        };
        return new TransitionMixUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.mix = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.mix`;
    }
}
exports.TransitionMixUpdateCommand = TransitionMixUpdateCommand;
TransitionMixUpdateCommand.rawName = 'TMxP';
//# sourceMappingURL=TransitionMixCommand.js.map