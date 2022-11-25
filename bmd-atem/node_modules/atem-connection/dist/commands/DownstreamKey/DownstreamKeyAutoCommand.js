"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamKeyAutoCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class DownstreamKeyAutoCommand extends CommandBase_1.WritableCommand {
    constructor(downstreamKeyerId) {
        super();
        this.downstreamKeyerId = downstreamKeyerId;
    }
    serialize(version) {
        const buffer = Buffer.alloc(4);
        if (version >= enums_1.ProtocolVersion.V8_0_1) {
            buffer.writeUInt8(this.flag, 0);
            buffer.writeUInt8(this.downstreamKeyerId, 1);
            buffer.writeUInt8(this.properties.isTowardsOnAir ? 1 : 0, 2);
        }
        else {
            buffer.writeUInt8(this.downstreamKeyerId, 0);
        }
        return buffer;
    }
}
exports.DownstreamKeyAutoCommand = DownstreamKeyAutoCommand;
DownstreamKeyAutoCommand.MaskFlags = {
    isTowardsOnAir: 1,
};
DownstreamKeyAutoCommand.rawName = 'DDsA';
//# sourceMappingURL=DownstreamKeyAutoCommand.js.map