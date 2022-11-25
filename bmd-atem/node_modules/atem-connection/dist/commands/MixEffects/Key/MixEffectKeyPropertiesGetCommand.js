"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyPropertiesGetCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyPropertiesGetCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, keyer, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = keyer;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const keyer = rawCommand.readUInt8(1);
        const properties = {
            upstreamKeyerId: keyer,
            mixEffectKeyType: rawCommand.readUInt8(2),
            canFlyKey: rawCommand.readUInt8(4) === 1,
            flyEnabled: rawCommand.readUInt8(5) === 1,
            fillSource: rawCommand.readUInt16BE(6),
            cutSource: rawCommand.readUInt16BE(8),
            maskSettings: {
                maskEnabled: rawCommand.readUInt8(10) === 1,
                maskTop: rawCommand.readInt16BE(12),
                maskBottom: rawCommand.readInt16BE(14),
                maskLeft: rawCommand.readInt16BE(16),
                maskRight: rawCommand.readInt16BE(18),
            },
        };
        return new MixEffectKeyPropertiesGetCommand(mixEffect, keyer, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.upstreamKeyers[this.properties.upstreamKeyerId] = {
            ...state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.properties.upstreamKeyerId),
            ...this.properties,
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.properties.upstreamKeyerId}`;
    }
}
exports.MixEffectKeyPropertiesGetCommand = MixEffectKeyPropertiesGetCommand;
MixEffectKeyPropertiesGetCommand.rawName = 'KeBP';
//# sourceMappingURL=MixEffectKeyPropertiesGetCommand.js.map