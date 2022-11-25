"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightAudioMixerConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightAudioMixerConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        return new FairlightAudioMixerConfigCommand({
            inputs: rawCommand.readUInt8(0),
            monitors: rawCommand.readUInt8(1),
        });
    }
    applyToState(state) {
        state.info.fairlightMixer = this.properties;
        state.fairlight = {
            inputs: {},
        };
        return [`info.fairlightMixer`, `fairlight.inputs`];
    }
}
exports.FairlightAudioMixerConfigCommand = FairlightAudioMixerConfigCommand;
FairlightAudioMixerConfigCommand.rawName = '_FAC';
//# sourceMappingURL=fairlightAudioMixerConfigCommand.js.map