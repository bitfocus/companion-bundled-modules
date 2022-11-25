"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewTransitionUpdateCommand = exports.PreviewTransitionCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class PreviewTransitionCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, preview) {
        super({ preview });
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.properties.preview ? 1 : 0, 1);
        return buffer;
    }
}
exports.PreviewTransitionCommand = PreviewTransitionCommand;
PreviewTransitionCommand.rawName = 'CTPr';
class PreviewTransitionUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            preview: rawCommand.readUInt8(1) === 1,
        };
        return new PreviewTransitionUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionPreview = this.properties.preview;
        return `video.mixEffects.${this.mixEffect}.transitionPreview`;
    }
}
exports.PreviewTransitionUpdateCommand = PreviewTransitionUpdateCommand;
PreviewTransitionUpdateCommand.rawName = 'TrPr';
//# sourceMappingURL=TransitionPreviewCommand.js.map