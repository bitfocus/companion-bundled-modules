"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiviewerConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
class MultiviewerConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand, version) {
        if (version >= enums_1.ProtocolVersion.V8_1_1) {
            return new MultiviewerConfigCommand({
                count: -1,
                windowCount: rawCommand.readUInt8(1),
            });
        }
        else {
            return new MultiviewerConfigCommand({
                count: rawCommand.readUInt8(0),
                windowCount: rawCommand.readUInt8(1),
            });
        }
    }
    applyToState(state) {
        if (this.properties.count === -1) {
            state.info.multiviewer = {
                count: -1,
                ...state.info.multiviewer,
                windowCount: this.properties.windowCount,
            };
        }
        else {
            state.info.multiviewer = this.properties;
        }
        return `info.multiviewer`;
    }
}
exports.MultiviewerConfigCommand = MultiviewerConfigCommand;
MultiviewerConfigCommand.rawName = '_MvC';
//# sourceMappingURL=multiviewerConfigCommand.js.map