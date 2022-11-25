"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGeneratorUpdateCommand = exports.ColorGeneratorCommand = void 0;
const CommandBase_1 = require("./CommandBase");
class ColorGeneratorCommand extends CommandBase_1.WritableCommand {
    constructor(index) {
        super();
        this.index = index;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.index, 1);
        buffer.writeUInt16BE(this.properties.hue || 0, 2);
        buffer.writeUInt16BE(this.properties.saturation || 0, 4);
        buffer.writeUInt16BE(this.properties.luma || 0, 6);
        return buffer;
    }
}
exports.ColorGeneratorCommand = ColorGeneratorCommand;
ColorGeneratorCommand.MaskFlags = {
    hue: 1 << 0,
    saturation: 1 << 1,
    luma: 1 << 2,
};
ColorGeneratorCommand.rawName = 'CClV';
class ColorGeneratorUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, properties) {
        super(properties);
        this.index = index;
    }
    static deserialize(rawCommand) {
        const auxBus = rawCommand.readUInt8(0);
        const properties = {
            hue: rawCommand.readUInt16BE(2),
            saturation: rawCommand.readUInt16BE(4),
            luma: rawCommand.readUInt16BE(6),
        };
        return new ColorGeneratorUpdateCommand(auxBus, properties);
    }
    applyToState(state) {
        if (!state.colorGenerators)
            state.colorGenerators = {};
        state.colorGenerators[this.index] = this.properties;
        return `colorGenerators.${this.index}`;
    }
}
exports.ColorGeneratorUpdateCommand = ColorGeneratorUpdateCommand;
ColorGeneratorUpdateCommand.rawName = 'ColV';
//# sourceMappingURL=ColorGeneratorCommand.js.map