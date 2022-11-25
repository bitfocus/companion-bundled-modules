"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyFlyPropertiesGetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyFlyPropertiesGetCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
            isASet: rawCommand.readUInt8(2) === 1,
            isBSet: rawCommand.readUInt8(3) === 1,
            isAtKeyFrame: rawCommand.readUInt8(6),
            runToInfiniteIndex: rawCommand.readUInt8(7),
        };
        return new MixEffectKeyFlyPropertiesGetCommand(mixEffect, upstreamKeyerId, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.flyProperties = {
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.flyProperties`;
    }
}
exports.MixEffectKeyFlyPropertiesGetCommand = MixEffectKeyFlyPropertiesGetCommand;
MixEffectKeyFlyPropertiesGetCommand.rawName = 'KeFS';
//# sourceMappingURL=MixEffectKeyFlyPropertiesGetCommand.js.map