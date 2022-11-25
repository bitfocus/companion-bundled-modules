"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeySourcesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class DownstreamKeySourcesCommand extends CommandBase_1.DeserializedCommand {
    constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
            fillSource: rawCommand.readUInt16BE(2),
            cutSource: rawCommand.readUInt16BE(4),
        };
        return new DownstreamKeySourcesCommand(downstreamKeyerId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
            throw new state_1.InvalidIdError('DownstreamKeyer', this.downstreamKeyerId);
        }
        state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId).sources = this.properties;
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
    }
}
exports.DownstreamKeySourcesCommand = DownstreamKeySourcesCommand;
DownstreamKeySourcesCommand.rawName = 'DskB';
//# sourceMappingURL=DownstreamKeySourcesCommand.js.map