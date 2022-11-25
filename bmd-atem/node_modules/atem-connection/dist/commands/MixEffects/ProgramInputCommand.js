"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramInputUpdateCommand = exports.ProgramInputCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class ProgramInputCommand extends CommandBase_1.BasicWritableCommand {
    constructor(mixEffect, source) {
        super({ source });
        this.mixEffect = mixEffect;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt16BE(this.properties.source, 2);
        return buffer;
    }
}
exports.ProgramInputCommand = ProgramInputCommand;
ProgramInputCommand.rawName = 'CPgI';
class ProgramInputUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
    }
    static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
            source: rawCommand.readUInt16BE(2),
        };
        return new ProgramInputUpdateCommand(mixEffect, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
            throw new state_1.InvalidIdError('MixEffect', this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.programInput = this.properties.source;
        return `video.mixEffects.${this.mixEffect}.programInput`;
    }
}
exports.ProgramInputUpdateCommand = ProgramInputUpdateCommand;
ProgramInputUpdateCommand.rawName = 'PrgI';
//# sourceMappingURL=ProgramInputCommand.js.map