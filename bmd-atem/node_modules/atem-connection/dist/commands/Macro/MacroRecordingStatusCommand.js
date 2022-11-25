"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroRecordingStatusCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MacroRecordingStatusCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            isRecording: rawCommand.readUInt8(0) != 0,
            macroIndex: rawCommand.readUInt16BE(2),
        };
        return new MacroRecordingStatusCommand(properties);
    }
    applyToState(state) {
        state.macro.macroRecorder = {
            ...state.macro.macroRecorder,
            ...this.properties,
        };
        return `macro.macroRecorder`;
    }
}
exports.MacroRecordingStatusCommand = MacroRecordingStatusCommand;
MacroRecordingStatusCommand.rawName = 'MRcS';
//# sourceMappingURL=MacroRecordingStatusCommand.js.map