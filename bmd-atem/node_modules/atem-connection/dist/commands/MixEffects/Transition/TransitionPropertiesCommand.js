"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionPropertiesUpdateCommand = exports.TransitionPropertiesCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
const atemUtil_1 = require("../../../lib/atemUtil");
class TransitionPropertiesCommand extends CommandBase_1.WritableCommand {
    constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.properties.nextStyle || 0, 2);
        buffer.writeUInt8((0, atemUtil_1.combineComponents)(this.properties.nextSelection || []), 3);
        return buffer;
    }
}
exports.TransitionPropertiesCommand = TransitionPropertiesCommand;
TransitionPropertiesCommand.MaskFlags = {
    nextStyle: 1 << 0,
    nextSelection: 1 << 1,
};
TransitionPropertiesCommand.rawName = 'CTTp';
class TransitionPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            style: rawCommand.readUInt8(1),
            selection: (0, atemUtil_1.getComponents)(rawCommand.readUInt8(2)),
            nextStyle: rawCommand.readUInt8(3),
            nextSelection: (0, atemUtil_1.getComponents)(rawCommand.readUInt8(4)),
        };
        return new TransitionPropertiesUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionProperties = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.transitionProperties`;
    }
}
exports.TransitionPropertiesUpdateCommand = TransitionPropertiesUpdateCommand;
TransitionPropertiesUpdateCommand.rawName = 'TrSS';
//# sourceMappingURL=TransitionPropertiesCommand.js.map