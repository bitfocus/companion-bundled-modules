"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperSourceConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class SuperSourceConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(ssrcId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
    }
    static deserialize(rawCommand, version) {
        if (version >= enums_1.ProtocolVersion.V8_0) {
            return new SuperSourceConfigCommand(rawCommand.readUInt8(0), { boxCount: rawCommand.readUInt8(2) });
        }
        else {
            return new SuperSourceConfigCommand(0, { boxCount: rawCommand.readUInt8(0) });
        }
    }
    applyToState(state) {
        state.info.superSources[this.ssrcId] = this.properties;
        return `info.superSources`;
    }
}
exports.SuperSourceConfigCommand = SuperSourceConfigCommand;
SuperSourceConfigCommand.rawName = '_SSC';
//# sourceMappingURL=superSourceConfigCommand.js.map