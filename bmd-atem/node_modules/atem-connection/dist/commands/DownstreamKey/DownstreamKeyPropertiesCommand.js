"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyPropertiesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class DownstreamKeyPropertiesCommand extends CommandBase_1.DeserializedCommand {
    constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
            tie: rawCommand.readUInt8(1) === 1,
            rate: rawCommand.readUInt8(2),
            preMultiply: rawCommand.readUInt8(3) === 1,
            clip: rawCommand.readUInt16BE(4),
            gain: rawCommand.readUInt16BE(6),
            invert: rawCommand.readUInt8(8) === 1,
            mask: {
                enabled: rawCommand.readUInt8(9) === 1,
                top: rawCommand.readInt16BE(10),
                bottom: rawCommand.readInt16BE(12),
                left: rawCommand.readInt16BE(14),
                right: rawCommand.readInt16BE(16),
            },
        };
        return new DownstreamKeyPropertiesCommand(downstreamKeyerId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
            throw new state_1.InvalidIdError('DownstreamKeyer', this.downstreamKeyerId);
        }
        state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId).properties = this.properties;
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
    }
}
exports.DownstreamKeyPropertiesCommand = DownstreamKeyPropertiesCommand;
DownstreamKeyPropertiesCommand.rawName = 'DskP';
//# sourceMappingURL=DownstreamKeyPropertiesCommand.js.map