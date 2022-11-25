"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyStateV8Command = exports.DownstreamKeyStateCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class DownstreamKeyStateCommand extends CommandBase_1.DeserializedCommand {
    constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
            onAir: rawCommand.readUInt8(1) === 1,
            inTransition: rawCommand.readUInt8(2) === 1,
            isAuto: rawCommand.readUInt8(3) === 1,
            remainingFrames: rawCommand.readUInt8(4),
        };
        return new DownstreamKeyStateCommand(downstreamKeyerId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
            throw new state_1.InvalidIdError('DownstreamKeyer', this.downstreamKeyerId);
        }
        state.video.downstreamKeyers[this.downstreamKeyerId] = {
            ...state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId),
            ...this.properties,
        };
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
    }
}
exports.DownstreamKeyStateCommand = DownstreamKeyStateCommand;
DownstreamKeyStateCommand.rawName = 'DskS';
class DownstreamKeyStateV8Command extends CommandBase_1.DeserializedCommand {
    constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
    }
    static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
            onAir: rawCommand.readUInt8(1) === 1,
            inTransition: rawCommand.readUInt8(2) === 1,
            isAuto: rawCommand.readUInt8(3) === 1,
            isTowardsOnAir: rawCommand.readUInt8(4) === 1,
            remainingFrames: rawCommand.readUInt8(5),
        };
        return new DownstreamKeyStateV8Command(downstreamKeyerId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
            throw new state_1.InvalidIdError('DownstreamKeyer', this.downstreamKeyerId);
        }
        state.video.downstreamKeyers[this.downstreamKeyerId] = {
            ...state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId),
            ...this.properties,
        };
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
    }
}
exports.DownstreamKeyStateV8Command = DownstreamKeyStateV8Command;
DownstreamKeyStateV8Command.rawName = 'DskS';
DownstreamKeyStateV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0_1;
//# sourceMappingURL=DownstreamKeyStateCommand.js.map