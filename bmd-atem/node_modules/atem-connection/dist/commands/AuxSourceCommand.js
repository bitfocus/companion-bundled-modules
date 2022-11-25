"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxSourceUpdateCommand = exports.AuxSourceCommand = void 0;
const CommandBase_1 = require("./CommandBase");
class AuxSourceCommand extends CommandBase_1.BasicWritableCommand {
    constructor(auxBus, source) {
        super({ source });
        this.auxBus = auxBus;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(0x01, 0);
        buffer.writeUInt8(this.auxBus, 1);
        buffer.writeUInt16BE(this.properties.source, 2);
        return buffer;
    }
}
exports.AuxSourceCommand = AuxSourceCommand;
AuxSourceCommand.rawName = 'CAuS';
class AuxSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(auxBus, properties) {
        super(properties);
        this.auxBus = auxBus;
    }
    static deserialize(rawCommand) {
        const auxBus = rawCommand.readUInt8(0);
        const properties = {
            source: rawCommand.readUInt16BE(2),
        };
        return new AuxSourceUpdateCommand(auxBus, properties);
    }
    applyToState(state) {
        state.video.auxilliaries[this.auxBus] = this.properties.source;
        return `video.auxilliaries.${this.auxBus}`;
    }
}
exports.AuxSourceUpdateCommand = AuxSourceUpdateCommand;
AuxSourceUpdateCommand.rawName = 'AuxS';
//# sourceMappingURL=AuxSourceCommand.js.map