"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyGeneralCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DownstreamKeyGeneralCommand extends CommandBase_1.WritableCommand {
    constructor(downstreamKeyerId) {
        super();
        this.downstreamKeyerId = downstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.downstreamKeyerId, 1);
        buffer.writeUInt8(this.properties.preMultiply ? 1 : 0, 2);
        buffer.writeInt16BE(this.properties.clip || 0, 4);
        buffer.writeInt16BE(this.properties.gain || 0, 6);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 8);
        return buffer;
    }
}
exports.DownstreamKeyGeneralCommand = DownstreamKeyGeneralCommand;
DownstreamKeyGeneralCommand.MaskFlags = {
    preMultiply: 1 << 0,
    clip: 1 << 1,
    gain: 1 << 2,
    invert: 1 << 3,
};
DownstreamKeyGeneralCommand.rawName = 'CDsG';
//# sourceMappingURL=DownstreamKeyGeneralCommand.js.map