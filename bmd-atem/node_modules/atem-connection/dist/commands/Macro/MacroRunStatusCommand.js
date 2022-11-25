"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroRunStatusCommand = exports.MacroRunStatusUpdateCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MacroRunStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            isRunning: Boolean(rawCommand.readUInt8(0) & (1 << 0)),
            isWaiting: Boolean(rawCommand.readUInt8(0) & (1 << 1)),
            loop: rawCommand.readUInt8(1) != 0,
            macroIndex: rawCommand.readUInt16BE(2),
        };
        return new MacroRunStatusUpdateCommand(properties);
    }
    applyToState(state) {
        state.macro.macroPlayer = this.properties;
        return `macro.macroPlayer`;
    }
}
exports.MacroRunStatusUpdateCommand = MacroRunStatusUpdateCommand;
MacroRunStatusUpdateCommand.rawName = 'MRPr';
class MacroRunStatusCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.loop ? 1 : 0, 1);
        return buffer;
    }
}
exports.MacroRunStatusCommand = MacroRunStatusCommand;
MacroRunStatusCommand.MaskFlags = {
    loop: 1 << 0,
};
MacroRunStatusCommand.rawName = 'MRCP';
//# sourceMappingURL=MacroRunStatusCommand.js.map