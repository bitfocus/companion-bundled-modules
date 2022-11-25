"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TallyBySourceCommand = void 0;
const CommandBase_1 = require("./CommandBase");
class TallyBySourceCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const sourceCount = rawCommand.readUInt16BE(0);
        const sources = {};
        for (let i = 0; i < sourceCount; i++) {
            const source = rawCommand.readUInt16BE(2 + i * 3);
            const value = rawCommand.readUInt8(4 + i * 3);
            sources[source] = {
                program: (value & 0x01) > 0,
                preview: (value & 0x02) > 0,
            };
        }
        return new TallyBySourceCommand(sources);
    }
    applyToState(_state) {
        return [];
    }
}
exports.TallyBySourceCommand = TallyBySourceCommand;
TallyBySourceCommand.rawName = 'TlSr';
//# sourceMappingURL=TallyBySourceCommand.js.map