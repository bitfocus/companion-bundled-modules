"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiViewerVuOpacityCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
class MultiViewerVuOpacityCommand extends CommandBase_1.SymmetricalCommand {
    constructor(multiviewerId, opacity) {
        super({ opacity });
        this.multiViewerId = multiviewerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.properties.opacity, 1);
        return buffer;
    }
    static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const opacity = rawCommand.readUInt8(1);
        return new MultiViewerVuOpacityCommand(multiViewerId, opacity);
    }
    applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
            throw new state_1.InvalidIdError('MultiViewer', this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        multiviewer.vuOpacity = this.properties.opacity;
        return `settings.multiViewers.${this.multiViewerId}.vuOpacity`;
    }
}
exports.MultiViewerVuOpacityCommand = MultiViewerVuOpacityCommand;
MultiViewerVuOpacityCommand.rawName = 'VuMo';
//# sourceMappingURL=MultiViewerVuOpacityCommand.js.map