"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayerStatusUpdateCommand = exports.MediaPlayerStatusCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class MediaPlayerStatusCommand extends CommandBase_1.WritableCommand {
    constructor(mediaPlayerId) {
        super();
        this.mediaPlayerId = mediaPlayerId;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mediaPlayerId, 1);
        buffer.writeUInt8(this.properties.playing ? 1 : 0, 2);
        buffer.writeUInt8(this.properties.loop ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.atBeginning ? 1 : 0, 4);
        buffer.writeUInt16BE(this.properties.clipFrame || 0, 6);
        return buffer;
    }
}
exports.MediaPlayerStatusCommand = MediaPlayerStatusCommand;
MediaPlayerStatusCommand.MaskFlags = {
    playing: 1 << 0,
    loop: 1 << 1,
    atBeginning: 1 << 2,
    clipFrame: 1 << 3,
};
MediaPlayerStatusCommand.rawName = 'SCPS';
class MediaPlayerStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mediaPlayerId, properties) {
        super(properties);
        this.mediaPlayerId = mediaPlayerId;
    }
    static deserialize(rawCommand) {
        const mediaPlayerId = rawCommand.readUInt8(0);
        const properties = {
            playing: rawCommand.readUInt8(1) === 1,
            loop: rawCommand.readUInt8(2) === 1,
            atBeginning: rawCommand.readUInt8(3) === 1,
            clipFrame: (rawCommand.readUInt8(4) << 8) | rawCommand.readUInt8(5),
        };
        return new MediaPlayerStatusUpdateCommand(mediaPlayerId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.mediaPlayerId >= state.info.capabilities.mediaPlayers) {
            throw new state_1.InvalidIdError('MediaPlayer', this.mediaPlayerId);
        }
        state.media.players[this.mediaPlayerId] = {
            ...state_1.AtemStateUtil.getMediaPlayer(state, this.mediaPlayerId),
            ...this.properties,
        };
        return `media.players.${this.mediaPlayerId}`;
    }
}
exports.MediaPlayerStatusUpdateCommand = MediaPlayerStatusUpdateCommand;
MediaPlayerStatusUpdateCommand.rawName = 'RCPS';
//# sourceMappingURL=MediaPlayerStatusCommand.js.map