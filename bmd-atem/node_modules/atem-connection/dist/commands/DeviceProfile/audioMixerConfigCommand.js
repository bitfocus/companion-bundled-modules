"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class AudioMixerConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        return new AudioMixerConfigCommand({
            inputs: rawCommand.readUInt8(0),
            monitors: rawCommand.readUInt8(1),
            headphones: rawCommand.readUInt8(2),
        });
    }
    applyToState(state) {
        state.info.audioMixer = this.properties;
        state.audio = {
            numberOfChannels: this.properties.inputs,
            hasMonitor: this.properties.monitors != 0,
            channels: [],
        };
        return [`info.audioMixer`, `audio`];
    }
}
exports.AudioMixerConfigCommand = AudioMixerConfigCommand;
AudioMixerConfigCommand.rawName = '_AMC';
//# sourceMappingURL=audioMixerConfigCommand.js.map