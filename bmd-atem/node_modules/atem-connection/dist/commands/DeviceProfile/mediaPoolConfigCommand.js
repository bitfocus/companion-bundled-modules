"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MediaPoolConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        return new MediaPoolConfigCommand({
            stillCount: rawCommand.readUInt8(0),
            clipCount: rawCommand.readUInt8(1),
        });
    }
    applyToState(state) {
        state.info.mediaPool = this.properties;
        return `info.mediaPool`;
    }
}
exports.MediaPoolConfigCommand = MediaPoolConfigCommand;
MediaPoolConfigCommand.rawName = '_mpl';
//# sourceMappingURL=mediaPoolConfigCommand.js.map