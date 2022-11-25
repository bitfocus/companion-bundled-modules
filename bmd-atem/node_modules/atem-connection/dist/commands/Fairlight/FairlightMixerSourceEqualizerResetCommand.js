"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceEqualizerResetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceEqualizerResetCommand extends CommandBase_1.WritableCommand {
    constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.equalizer ? 1 : 0, 16);
        buffer.writeUInt8(this.properties.band || 0, 17);
        return buffer;
    }
}
exports.FairlightMixerSourceEqualizerResetCommand = FairlightMixerSourceEqualizerResetCommand;
FairlightMixerSourceEqualizerResetCommand.MaskFlags = {
    equalizer: 1 << 0,
    band: 1 << 1,
};
FairlightMixerSourceEqualizerResetCommand.rawName = 'RICE';
//# sourceMappingURL=FairlightMixerSourceEqualizerResetCommand.js.map