"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMixerPropertiesUpdateCommand = exports.AudioMixerPropertiesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class AudioMixerPropertiesCommand extends CommandBase_1.BasicWritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(1 << 0, 0); // Mask
        buffer.writeUInt8(this.properties.audioFollowVideo ? 1 : 0, 1);
        return buffer;
    }
}
exports.AudioMixerPropertiesCommand = AudioMixerPropertiesCommand;
AudioMixerPropertiesCommand.rawName = 'CAMP';
class AudioMixerPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const audioFollowVideo = rawCommand.readUInt8(0) > 0;
        return new AudioMixerPropertiesUpdateCommand({ audioFollowVideo });
    }
    applyToState(state) {
        if (!state.audio) {
            throw new state_1.InvalidIdError('Classic Audio');
        }
        state.audio.audioFollowVideoCrossfadeTransitionEnabled = this.properties.audioFollowVideo;
        return `audio.audioFollowVideoCrossfadeTransitionEnabled`;
    }
}
exports.AudioMixerPropertiesUpdateCommand = AudioMixerPropertiesUpdateCommand;
AudioMixerPropertiesUpdateCommand.rawName = 'AMPP';
//# sourceMappingURL=AudioMixerPropertiesCommand.js.map