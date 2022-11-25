"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionPositionUpdateCommand = exports.TransitionPositionCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class TransitionPositionCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, handlePosition) {
        super({ handlePosition });
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt16BE(this.properties.handlePosition, 2);
        return buffer;
    }
}
exports.TransitionPositionCommand = TransitionPositionCommand;
TransitionPositionCommand.rawName = 'CTPs';
class TransitionPositionUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            inTransition: rawCommand.readUInt8(1) === 1,
            remainingFrames: rawCommand.readUInt8(2),
            handlePosition: rawCommand.readUInt16BE(4),
        };
        return new TransitionPositionUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionPosition = this.properties;
        return `video.mixEffects.${this.mixEffect}.transitionPosition`;
    }
}
exports.TransitionPositionUpdateCommand = TransitionPositionUpdateCommand;
TransitionPositionUpdateCommand.rawName = 'TrPs';
//# sourceMappingURL=TransitionPositionCommand.js.map