"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolFrameDescriptionCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
const Util = require("../../lib/atemUtil");
class MediaPoolFrameDescriptionCommand extends CommandBase_1.DeserializedCommand {
    constructor(mediaPool, frameIndex, properties) {
        super(properties);
        this.mediaPool = mediaPool;
        this.frameIndex = frameIndex;
    }
    static deserialize(rawCommand) {
        const mediaPool = rawCommand.readUInt8(0);
        const frameIndex = rawCommand.readUInt16BE(2);
        const properties = {
            isUsed: rawCommand.readUInt8(4) === 1,
            hash: Util.bufToBase64String(rawCommand, 5, 16),
            fileName: Util.bufToNullTerminatedString(rawCommand, 24, rawCommand.readUInt8(23)),
        };
        return new MediaPoolFrameDescriptionCommand(mediaPool, frameIndex, properties);
    }
    applyToState(state) {
        // TODO - validate ids
        if (this.mediaPool === 0) {
            // This is a still
            state.media.stillPool[this.frameIndex] = this.properties;
            return `media.stillPool.${this.frameIndex}`;
        }
        else if (this.mediaPool < 3) {
            const clipId = this.mediaPool - 1;
            // This is a clip
            state_1.AtemStateUtil.getClip(state, clipId).frames[this.frameIndex] = this.properties;
            return `media.clipPool.${clipId}.frames.${this.frameIndex}`;
        }
        return [];
    }
}
exports.MediaPoolFrameDescriptionCommand = MediaPoolFrameDescriptionCommand;
MediaPoolFrameDescriptionCommand.rawName = 'MPfe';
//# sourceMappingURL=MediaPoolFrameDescription.js.map