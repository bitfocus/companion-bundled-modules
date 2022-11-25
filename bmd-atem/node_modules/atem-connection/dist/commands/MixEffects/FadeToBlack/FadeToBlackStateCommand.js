"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeToBlackStateCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class FadeToBlackStateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            isFullyBlack: rawCommand.readUInt8(1) === 1,
            inTransition: rawCommand.readUInt8(2) === 1,
            remainingFrames: rawCommand.readUInt8(3),
        };
        return new FadeToBlackStateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.fadeToBlack = {
            rate: 0,
            ...mixEffect.fadeToBlack,
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.fadeToBlack`;
    }
}
exports.FadeToBlackStateCommand = FadeToBlackStateCommand;
FadeToBlackStateCommand.rawName = 'FtbS';
//# sourceMappingURL=FadeToBlackStateCommand.js.map