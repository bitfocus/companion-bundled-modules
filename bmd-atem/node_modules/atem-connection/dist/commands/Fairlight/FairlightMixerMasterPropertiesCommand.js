"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterPropertiesUpdateCommand = exports.FairlightMixerMasterPropertiesCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMasterPropertiesCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.audioFollowVideo ? 1 : 0, 1);
        return buffer;
    }
}
exports.FairlightMixerMasterPropertiesCommand = FairlightMixerMasterPropertiesCommand;
FairlightMixerMasterPropertiesCommand.MaskFlags = {
    audioFollowVideo: 1 << 0,
};
FairlightMixerMasterPropertiesCommand.rawName = 'CMPP';
class FairlightMixerMasterPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const audioFollowVideo = rawCommand.readUInt8(0) > 0;
        return new FairlightMixerMasterPropertiesUpdateCommand({ audioFollowVideo });
    }
    applyToState(state) {
        if (!state.fairlight) {
            throw new state_1.InvalidIdError('Fairlight');
        }
        state.fairlight.audioFollowVideoCrossfadeTransitionEnabled = this.properties.audioFollowVideo;
        return `fairlight.audioFollowVideoCrossfadeTransitionEnabled`;
    }
}
exports.FairlightMixerMasterPropertiesUpdateCommand = FairlightMixerMasterPropertiesUpdateCommand;
FairlightMixerMasterPropertiesUpdateCommand.rawName = 'FMPP';
//# sourceMappingURL=FairlightMixerMasterPropertiesCommand.js.map