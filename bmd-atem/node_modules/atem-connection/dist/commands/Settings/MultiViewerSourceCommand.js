"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiViewerSourceUpdateCommand = exports.MultiViewerSourceCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class MultiViewerSourceCommand extends CommandBase_1.BasicWritableCommand {
    constructor(multiviewerId, windowIndex, source) {
        super({ windowIndex, source });
        this.multiViewerId = multiviewerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.properties.windowIndex || 0, 1);
        buffer.writeUInt16BE(this.properties.source || 0, 2);
        return buffer;
    }
}
exports.MultiViewerSourceCommand = MultiViewerSourceCommand;
MultiViewerSourceCommand.rawName = 'CMvI';
class MultiViewerSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(multiviewerId, properties) {
        super(properties);
        this.multiViewerId = multiviewerId;
    }
    static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const properties = {
            windowIndex: rawCommand.readUInt8(1),
            source: rawCommand.readUInt16BE(2),
            supportsVuMeter: rawCommand.readUInt8(4) != 0,
            supportsSafeArea: rawCommand.readUInt8(5) != 0,
        };
        return new MultiViewerSourceUpdateCommand(multiViewerId, properties);
    }
    applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
            throw new state_1.InvalidIdError('MultiViewer', this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        multiviewer.windows[this.properties.windowIndex] = {
            ...multiviewer.windows[this.properties.windowIndex],
            ...this.properties,
        };
        return `settings.multiViewers.${this.multiViewerId}.windows.${this.properties.windowIndex}`;
    }
}
exports.MultiViewerSourceUpdateCommand = MultiViewerSourceUpdateCommand;
MultiViewerSourceUpdateCommand.rawName = 'MvIn';
//# sourceMappingURL=MultiViewerSourceCommand.js.map