"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolClearStillCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MediaPoolClearStillCommand extends CommandBase_1.BasicWritableCommand {
    constructor(index) {
        super({ index });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.index, 0);
        return buffer;
    }
}
exports.MediaPoolClearStillCommand = MediaPoolClearStillCommand;
MediaPoolClearStillCommand.rawName = 'CSTL';
//# sourceMappingURL=MediaPoolClearStillCommand.js.map