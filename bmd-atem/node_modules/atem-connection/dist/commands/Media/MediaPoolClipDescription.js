"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPoolClipDescriptionCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
const Util = require("../../lib/atemUtil");
class MediaPoolClipDescriptionCommand extends CommandBase_1.DeserializedCommand {
    constructor(mediaPool, properties) {
        super(properties);
        this.clipId = mediaPool;
    }
    static deserialize(rawCommand) {
        const mediaPool = rawCommand.readUInt8(0);
        const properties = {
            isUsed: rawCommand.readUInt8(1) === 1,
            name: Util.bufToNullTerminatedString(rawCommand, 2, 64),
            frameCount: rawCommand.readUInt16BE(66),
        };
        return new MediaPoolClipDescriptionCommand(mediaPool, properties);
    }
    applyToState(state) {
        // TODO - validate ids
        state.media.clipPool[this.clipId] = {
            ...this.properties,
            frames: state_1.AtemStateUtil.getClip(state, this.clipId).frames, // TODO - lengthen/shorten array of frames?
        };
        return `media.clipPool.${this.clipId}`;
    }
}
exports.MediaPoolClipDescriptionCommand = MediaPoolClipDescriptionCommand;
MediaPoolClipDescriptionCommand.rawName = 'MPCS';
//# sourceMappingURL=MediaPoolClipDescription.js.map