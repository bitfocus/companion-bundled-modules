"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartupStateClearCommand = exports.StartupStateSaveCommand = void 0;
const CommandBase_1 = require("./CommandBase");
class StartupStateSaveCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        // 0 is the 'mode' parameter, which is always 0 for now
        return buffer;
    }
}
exports.StartupStateSaveCommand = StartupStateSaveCommand;
StartupStateSaveCommand.rawName = 'SRsv';
class StartupStateClearCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        // 0 is the 'mode' parameter, which is always 0 for now
        return buffer;
    }
}
exports.StartupStateClearCommand = StartupStateClearCommand;
StartupStateClearCommand.rawName = 'SRcl';
//# sourceMappingURL=StartupStateCommand.js.map