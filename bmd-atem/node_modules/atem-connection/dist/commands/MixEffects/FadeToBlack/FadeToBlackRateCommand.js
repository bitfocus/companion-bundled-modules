"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeToBlackRateUpdateCommand = exports.FadeToBlackRateCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class FadeToBlackRateCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, rate) {
        super({ rate });
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(1, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.properties.rate, 2);
        return buffer;
    }
}
exports.FadeToBlackRateCommand = FadeToBlackRateCommand;
FadeToBlackRateCommand.rawName = 'FtbC';
class FadeToBlackRateUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, rate) {
        super({ rate });
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const rate = rawCommand.readUInt8(1);
        return new FadeToBlackRateUpdateCommand(mixEffect, rate);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.fadeToBlack = {
            isFullyBlack: false,
            inTransition: false,
            remainingFrames: 0,
            ...mixEffect.fadeToBlack,
            rate: this.properties.rate,
        };
        return `video.mixEffects.${this.mixEffect}.fadeToBlack`;
    }
}
exports.FadeToBlackRateUpdateCommand = FadeToBlackRateUpdateCommand;
FadeToBlackRateUpdateCommand.rawName = 'FtbP';
//# sourceMappingURL=FadeToBlackRateCommand.js.map