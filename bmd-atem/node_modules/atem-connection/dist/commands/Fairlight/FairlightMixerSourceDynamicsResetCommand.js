"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceDynamicsResetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceDynamicsResetCommand extends CommandBase_1.WritableCommand {
    constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
    }
    serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.index, 0);
        buffer.writeBigInt64BE(this.source, 8);
        let val = 0;
        if (this.properties.dynamics) {
            val |= 1 << 0;
        }
        if (this.properties.expander) {
            val |= 1 << 1;
        }
        if (this.properties.compressor) {
            val |= 1 << 2;
        }
        if (this.properties.limiter) {
            val |= 1 << 3;
        }
        buffer.writeUInt8(val, 17);
        return buffer;
    }
}
exports.FairlightMixerSourceDynamicsResetCommand = FairlightMixerSourceDynamicsResetCommand;
FairlightMixerSourceDynamicsResetCommand.rawName = 'RICD';
//# sourceMappingURL=FairlightMixerSourceDynamicsResetCommand.js.map