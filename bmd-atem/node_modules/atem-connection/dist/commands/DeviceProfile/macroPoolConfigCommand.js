"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroPoolConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MacroPoolConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        return new MacroPoolConfigCommand({
            macroCount: rawCommand.readUInt8(0),
        });
    }
    applyToState(state) {
        state.info.macroPool = this.properties;
        return `info.macroPool`;
    }
}
exports.MacroPoolConfigCommand = MacroPoolConfigCommand;
MacroPoolConfigCommand.rawName = '_MAC';
//# sourceMappingURL=macroPoolConfigCommand.js.map