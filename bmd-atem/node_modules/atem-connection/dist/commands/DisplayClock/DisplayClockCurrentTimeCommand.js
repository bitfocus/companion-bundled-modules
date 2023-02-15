"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClockCurrentTimeCommand = void 0;
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
class DisplayClockCurrentTimeCommand extends CommandBase_1.DeserializedCommand {
    constructor(time) {
        super({ time });
    }
    static deserialize(rawCommand) {
        // Future: id at byte 0
        const time = {
            hours: rawCommand.readUint8(1),
            minutes: rawCommand.readUint8(2),
            seconds: rawCommand.readUint8(3),
            frames: rawCommand.readUint8(4),
        };
        return new DisplayClockCurrentTimeCommand(time);
    }
    applyToState(state) {
        if (!state.displayClock) {
            throw new state_1.InvalidIdError('DisplayClock');
        }
        state.displayClock.currentTime = this.properties.time;
        return 'displayClock.currentTime';
    }
}
exports.DisplayClockCurrentTimeCommand = DisplayClockCurrentTimeCommand;
DisplayClockCurrentTimeCommand.rawName = 'DSTV';
//# sourceMappingURL=DisplayClockCurrentTimeCommand.js.map