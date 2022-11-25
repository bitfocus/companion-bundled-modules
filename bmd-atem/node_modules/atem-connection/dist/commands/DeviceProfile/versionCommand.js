"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class VersionCommand extends CommandBase_1.DeserializedCommand {
    constructor(version) {
        super({ version });
    }
    static deserialize(rawCommand) {
        const version = rawCommand.readUInt32BE(0);
        return new VersionCommand(version);
    }
    applyToState(state) {
        state.info.apiVersion = this.properties.version;
        return `info.apiVersion`;
    }
}
exports.VersionCommand = VersionCommand;
VersionCommand.rawName = '_ver';
//# sourceMappingURL=versionCommand.js.map