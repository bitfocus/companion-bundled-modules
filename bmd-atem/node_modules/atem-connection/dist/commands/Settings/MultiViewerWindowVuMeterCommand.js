"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiViewerWindowVuMeterUpdateCommand = exports.MultiViewerWindowVuMeterCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class MultiViewerWindowVuMeterCommand extends CommandBase_1.BasicWritableCommand {
    constructor(multiviewerId, windowIndex, vuEnabled) {
        super({ vuEnabled });
        this.multiViewerId = multiviewerId;
        this.windowIndex = windowIndex;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.windowIndex || 0, 1);
        buffer.writeUInt8(this.properties.vuEnabled ? 1 : 0, 2);
        return buffer;
    }
}
exports.MultiViewerWindowVuMeterCommand = MultiViewerWindowVuMeterCommand;
MultiViewerWindowVuMeterCommand.rawName = 'VuMS';
class MultiViewerWindowVuMeterUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(multiviewerId, windowIndex, vuEnabled) {
        super({ vuEnabled });
        this.multiViewerId = multiviewerId;
        this.windowIndex = windowIndex;
    }
    static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const windowIndex = rawCommand.readUInt8(1);
        const vuEnabled = rawCommand.readUInt8(2) > 0;
        return new MultiViewerWindowVuMeterUpdateCommand(multiViewerId, windowIndex, vuEnabled);
    }
    applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
            throw new state_1.InvalidIdError('MultiViewer', this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        const window = multiviewer.windows[this.windowIndex];
        if (!window) {
            throw new state_1.InvalidIdError('MultiViewer Window', this.multiViewerId, this.windowIndex);
        }
        window.audioMeter = this.properties.vuEnabled;
        return `settings.multiViewers.${this.multiViewerId}.windows.${this.windowIndex}.audioMeter`;
    }
}
exports.MultiViewerWindowVuMeterUpdateCommand = MultiViewerWindowVuMeterUpdateCommand;
MultiViewerWindowVuMeterUpdateCommand.rawName = 'VuMC';
//# sourceMappingURL=MultiViewerWindowVuMeterCommand.js.map