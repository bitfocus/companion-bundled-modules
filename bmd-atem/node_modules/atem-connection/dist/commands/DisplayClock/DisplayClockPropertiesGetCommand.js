"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClockPropertiesGetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class DisplayClockPropertiesGetCommand extends CommandBase_1.DeserializedCommand {
    constructor(props) {
        super(props);
    }
    static deserialize(rawCommand) {
        // Future: id at byte 0
        const props = {
            enabled: !!rawCommand.readUint8(1),
            size: rawCommand.readUint8(3),
            opacity: rawCommand.readUint8(5),
            positionX: rawCommand.readInt16BE(6),
            positionY: rawCommand.readInt16BE(8),
            autoHide: !!rawCommand.readUint8(10),
            startFrom: {
                hours: rawCommand.readUint8(11),
                minutes: rawCommand.readUint8(12),
                seconds: rawCommand.readUint8(13),
                frames: rawCommand.readUint8(14),
            },
            clockMode: rawCommand.readUint8(15),
            clockState: rawCommand.readUint8(16),
        };
        return new DisplayClockPropertiesGetCommand(props);
    }
    applyToState(state) {
        state.displayClock = {
            currentTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
                frames: 0,
            },
            ...state.displayClock,
            properties: this.properties,
        };
        return 'displayClock.properties';
    }
}
exports.DisplayClockPropertiesGetCommand = DisplayClockPropertiesGetCommand;
DisplayClockPropertiesGetCommand.rawName = 'DCPV';
//# sourceMappingURL=DisplayClockPropertiesGetCommand.js.map