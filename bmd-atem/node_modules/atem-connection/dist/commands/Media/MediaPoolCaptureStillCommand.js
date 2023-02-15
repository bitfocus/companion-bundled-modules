"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolCaptureStillCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MediaPoolCaptureStillCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        return Buffer.alloc(0);
    }
}
exports.MediaPoolCaptureStillCommand = MediaPoolCaptureStillCommand;
MediaPoolCaptureStillCommand.rawName = 'Capt';
//# sourceMappingURL=MediaPoolCaptureStillCommand.js.map