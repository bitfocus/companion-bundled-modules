"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioRoutingOutputUpdateCommand = exports.AudioRoutingOutputCommand = void 0;
const CommandBase_1 = require("../../CommandBase");
const state_1 = require("../../../state");
const Util = require("../../../lib/atemUtil");
class AudioRoutingOutputCommand extends CommandBase_1.WritableCommand {
    constructor(outputId) {
        super();
        this.id = outputId;
    }
    serialize() {
        const buffer = Buffer.alloc(76);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt32BE(this.id, 4);
        buffer.writeUInt32BE(this.properties.sourceId ?? 0, 8);
        buffer.write(this.properties.name ?? '', 12, 64);
        return buffer;
    }
}
exports.AudioRoutingOutputCommand = AudioRoutingOutputCommand;
AudioRoutingOutputCommand.MaskFlags = {
    sourceId: 1 << 0,
    name: 1 << 1,
};
AudioRoutingOutputCommand.rawName = 'AROC';
class AudioRoutingOutputUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(outputId, properties) {
        super(properties);
        this.id = outputId;
    }
    static deserialize(rawCommand) {
        const outputId = rawCommand.readUInt32BE(0);
        const properties = {
            audioOutputId: outputId >> 16,
            audioChannelPair: (outputId & 0xffff),
            sourceId: rawCommand.readUInt32BE(4),
            externalPortType: rawCommand.readUInt16BE(8),
            internalPortType: rawCommand.readUInt16BE(10),
            name: Util.bufToNullTerminatedString(rawCommand, 12, 64),
        };
        return new AudioRoutingOutputUpdateCommand(outputId, properties);
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
        state.fairlight.audioRouting.outputs[this.id] = this.properties;
        return `fairlight.audioRouting.outputs.${this.id}`;
    }
}
exports.AudioRoutingOutputUpdateCommand = AudioRoutingOutputUpdateCommand;
AudioRoutingOutputUpdateCommand.rawName = 'AROP';
//# sourceMappingURL=AudioRoutingOutput.js.map