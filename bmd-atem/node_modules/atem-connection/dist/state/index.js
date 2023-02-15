"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIdError = exports.DisplayClock = exports.Fairlight = exports.Streaming = exports.Recording = exports.Settings = exports.Macro = exports.Input = exports.Media = exports.ClassicAudio = exports.Video = exports.Info = exports.AtemStateUtil = void 0;
const Info = require("./info");
exports.Info = Info;
const Video = require("./video");
exports.Video = Video;
const ClassicAudio = require("./audio");
exports.ClassicAudio = ClassicAudio;
const Media = require("./media");
exports.Media = Media;
const Input = require("./input");
exports.Input = Input;
const Macro = require("./macro");
exports.Macro = Macro;
const Settings = require("./settings");
exports.Settings = Settings;
const Recording = require("./recording");
exports.Recording = Recording;
const Streaming = require("./streaming");
exports.Streaming = Streaming;
const Fairlight = require("./fairlight");
exports.Fairlight = Fairlight;
const DisplayClock = require("./displayClock");
exports.DisplayClock = DisplayClock;
const AtemStateUtil = require("./util");
exports.AtemStateUtil = AtemStateUtil;
class InvalidIdError extends Error {
    constructor(message, ...ids) {
        super(InvalidIdError.BuildErrorString(message, ids));
        Object.setPrototypeOf(this, new.target.prototype);
    }
    static BuildErrorString(message, ids) {
        if (ids && ids.length > 0) {
            return `${message} ${ids.join('-')} is not valid`;
        }
        else {
            return message;
        }
    }
}
exports.InvalidIdError = InvalidIdError;
//# sourceMappingURL=index.js.map