"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolSetClipCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MediaPoolSetClipCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(68);
        buffer.writeUInt8(3, 0);
        buffer.writeUInt8(this.properties.index, 1);
        buffer.write(this.properties.name, 2, 44, 'utf8');
        buffer.writeUInt16BE(this.properties.frames, 66);
        return buffer;
    }
}
exports.MediaPoolSetClipCommand = MediaPoolSetClipCommand;
MediaPoolSetClipCommand.rawName = 'SMPC';
//# sourceMappingURL=MediaPoolSetClipCommand.js.map