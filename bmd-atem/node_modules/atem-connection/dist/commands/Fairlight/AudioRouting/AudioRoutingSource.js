"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioRoutingSourceUpdateCommand = exports.AudioRoutingSourceCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
const Util = require("../../../lib/atemUtil");
class AudioRoutingSourceCommand extends CommandBase_1.WritableCommand {
    constructor(sourceId) {
        super();
        this.id = sourceId;
    }
    serialize() {
        const buffer = Buffer.alloc(72);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt32BE(this.id, 4);
        buffer.write(this.properties.name ?? '', 8, 64);
        return buffer;
    }
}
exports.AudioRoutingSourceCommand = AudioRoutingSourceCommand;
AudioRoutingSourceCommand.MaskFlags = {
    name: 1 << 0,
};
AudioRoutingSourceCommand.rawName = 'ARSC';
class AudioRoutingSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(sourceId, properties) {
        super(properties);
        this.id = sourceId;
    }
    static deserialize(rawCommand) {
        const sourceId = rawCommand.readUInt32BE(0);
        const properties = {
            audioSourceId: sourceId >> 16,
            audioChannelPair: (sourceId & 0xffff),
            externalPortType: rawCommand.readUInt16BE(4),
            internalPortType: rawCommand.readUInt16BE(6),
            name: Util.bufToNullTerminatedString(rawCommand, 8, 64),
        };
        return new AudioRoutingSourceUpdateCommand(sourceId, properties);
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        if (!state.fairlight.audioRouting)
            state.fairlight.audioRouting = {
                outputs: {},
                sources: {},
            };
        state.fairlight.audioRouting.sources[this.id] = this.properties;
        return `fairlight.audioRouting.sources.${this.id}`;
    }
}
exports.AudioRoutingSourceUpdateCommand = AudioRoutingSourceUpdateCommand;
AudioRoutingSourceUpdateCommand.rawName = 'ARSP';
//# sourceMappingURL=AudioRoutingSource.js.map