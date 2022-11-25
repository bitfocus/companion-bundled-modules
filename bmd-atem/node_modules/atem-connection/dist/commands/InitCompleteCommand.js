"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCompleteCommand = void 0;
const CommandBase_1 = require("./CommandBase");
class InitCompleteCommand extends CommandBase_1.DeserializedCommand {
    constructor() {
        super(null);
    }
    static deserialize() {
        return new InitCompleteCommand();
    }
    applyToState() {
        return `info`;
    }
}
exports.InitCompleteCommand = InitCompleteCommand;
InitCompleteCommand.rawName = 'InCm';
//# sourceMappingURL=InitCompleteCommand.js.map