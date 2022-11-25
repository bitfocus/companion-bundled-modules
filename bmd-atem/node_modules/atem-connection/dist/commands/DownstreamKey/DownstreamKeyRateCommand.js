"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyRateCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DownstreamKeyRateCommand extends CommandBase_1.BasicWritableCommand {
    constructor(downstreamKeyerId, rate) {
        super({ rate });
        this.downstreamKeyerId = downstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt8(this.properties.rate, 1);
        return buffer;
    }
}
exports.DownstreamKeyRateCommand = DownstreamKeyRateCommand;
DownstreamKeyRateCommand.rawName = 'CDsR';
//# sourceMappingURL=DownstreamKeyRateCommand.js.map