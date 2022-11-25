"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayerSourceUpdateCommand = exports.MediaPlayerSourceCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class MediaPlayerSourceCommand extends CommandBase_1.WritableCommand {
    constructor(mediaPlayerId) {
        super();
        this.mediaPlayerId = mediaPlayerId;
    }
    serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mediaPlayerId, 1);
        buffer.writeUInt8(this.properties.sourceType || 0, 2);
        buffer.writeUInt8(this.properties.stillIndex || 0, 3);
        buffer.writeUInt8(this.properties.clipIndex || 0, 4);
        return buffer;
    }
}
exports.MediaPlayerSourceCommand = MediaPlayerSourceCommand;
MediaPlayerSourceCommand.MaskFlags = {
    sourceType: 1 << 0,
    stillIndex: 1 << 1,
    clipIndex: 1 << 2,
};
MediaPlayerSourceCommand.rawName = 'MPSS';
class MediaPlayerSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(mediaPlayerId, properties) {
        super(properties);
        this.mediaPlayerId = mediaPlayerId;
    }
    static deserialize(rawCommand) {
        const mediaPlayerId = rawCommand.readUInt8(0);
        const properties = {
            sourceType: rawCommand.readUInt8(1),
            stillIndex: rawCommand.readUInt8(2),
            clipIndex: rawCommand.readUInt8(3),
        };
        return new MediaPlayerSourceUpdateCommand(mediaPlayerId, properties);
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
exports.MediaPlayerSourceUpdateCommand = MediaPlayerSourceUpdateCommand;
MediaPlayerSourceUpdateCommand.rawName = 'MPCE';
//# sourceMappingURL=MediaPlayerSourceCommand.js.map