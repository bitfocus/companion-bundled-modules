"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyCutSourceCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DownstreamKeyCutSourceCommand extends CommandBase_1.BasicWritableCommand {
    constructor(downstreamKeyerId, input) {
        super({ input });
        this.downstreamKeyerId = downstreamKeyerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt16BE(this.properties.input, 2);
        return buffer;
    }
}
exports.DownstreamKeyCutSourceCommand = DownstreamKeyCutSourceCommand;
DownstreamKeyCutSourceCommand.rawName = 'CDsC';
//# sourceMappingURL=DownstreamKeyCutSourceCommand.js.map