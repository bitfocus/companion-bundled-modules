"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiViewerWindowSafeAreaCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class MultiViewerWindowSafeAreaCommand extends CommandBase_1.SymmetricalCommand {
    constructor(multiviewerId, windowIndex, safeAreaEnabled) {
        super({ safeAreaEnabled });
        this.multiViewerId = multiviewerId;
        this.windowIndex = windowIndex;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.windowIndex, 1);
        buffer.writeUInt8(this.properties.safeAreaEnabled ? 1 : 0, 2);
        return buffer;
    }
    static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const windowIndex = rawCommand.readUInt8(1);
        const safeAreaEnabled = rawCommand.readUInt8(2) > 0;
        return new MultiViewerWindowSafeAreaCommand(multiViewerId, windowIndex, safeAreaEnabled);
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
        window.safeTitle = this.properties.safeAreaEnabled;
        return `settings.multiViewers.${this.multiViewerId}.windows.${this.windowIndex}.safeTitle`;
    }
}
exports.MultiViewerWindowSafeAreaCommand = MultiViewerWindowSafeAreaCommand;
MultiViewerWindowSafeAreaCommand.rawName = 'SaMw';
MultiViewerWindowSafeAreaCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
//# sourceMappingURL=MultiViewerWindowSafeAreaCommand.js.map