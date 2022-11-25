"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectKeyOnAirUpdateCommand = exports.MixEffectKeyOnAirCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
class MixEffectKeyOnAirCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, upstreamKeyerId, onAir) {
        super({ onAir });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt8(this.properties.onAir ? 1 : 0, 2);
        return buffer;
    }
}
exports.MixEffectKeyOnAirCommand = MixEffectKeyOnAirCommand;
MixEffectKeyOnAirCommand.rawName = 'CKOn';
class MixEffectKeyOnAirUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
            onAir: rawCommand.readUInt8(2) === 1,
        };
        return new MixEffectKeyOnAirUpdateCommand(mixEffect, upstreamKeyerId, properties);
    }
    applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
            throw new state_1.InvalidIdError('UpstreamKeyer', this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.onAir = this.properties.onAir;
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.onAir`;
    }
}
exports.MixEffectKeyOnAirUpdateCommand = MixEffectKeyOnAirUpdateCommand;
MixEffectKeyOnAirUpdateCommand.rawName = 'KeOn';
//# sourceMappingURL=MixEffectKeyOnAirCommand.js.map