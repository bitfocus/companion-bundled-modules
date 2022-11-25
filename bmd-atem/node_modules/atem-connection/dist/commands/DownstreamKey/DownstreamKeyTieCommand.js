"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyTieCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DownstreamKeyTieCommand extends CommandBase_1.BasicWritableCommand {
    constructor(downstreamKeyerId, tie) {
        super({ tie });
        this.downstreamKeyerId = downstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt8(this.properties.tie ? 1 : 0, 1);
        return buffer;
    }
}
exports.DownstreamKeyTieCommand = DownstreamKeyTieCommand;
DownstreamKeyTieCommand.rawName = 'CDsT';
//# sourceMappingURL=DownstreamKeyTieCommand.js.map