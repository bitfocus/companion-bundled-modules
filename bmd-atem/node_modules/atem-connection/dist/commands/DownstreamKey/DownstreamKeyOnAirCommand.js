"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyOnAirCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DownstreamKeyOnAirCommand extends CommandBase_1.BasicWritableCommand {
    constructor(downstreamKeyerId, onAir) {
        super({ onAir });
        this.downstreamKeyerId = downstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt8(this.properties.onAir ? 1 : 0, 1);
        return buffer;
    }
}
exports.DownstreamKeyOnAirCommand = DownstreamKeyOnAirCommand;
DownstreamKeyOnAirCommand.rawName = 'CDsL';
//# sourceMappingURL=DownstreamKeyOnAirCommand.js.map