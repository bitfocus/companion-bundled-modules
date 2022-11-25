"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiViewerPropertiesUpdateCommand = exports.MultiViewerPropertiesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class MultiViewerPropertiesCommand extends CommandBase_1.WritableCommand {
    constructor(multiviewerId) {
        super();
        this.multiViewerId = multiviewerId;
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.multiViewerId, 1);
        buffer.writeUInt8(this.properties.layout || 0, 2);
        buffer.writeUInt8(this.properties.programPreviewSwapped ? 1 : 0, 3);
        return buffer;
    }
}
exports.MultiViewerPropertiesCommand = MultiViewerPropertiesCommand;
MultiViewerPropertiesCommand.MaskFlags = {
    layout: 1 << 0,
    programPreviewSwapped: 1 << 1,
};
MultiViewerPropertiesCommand.rawName = 'CMvP';
MultiViewerPropertiesCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
class MultiViewerPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(multiviewerId, properties) {
        super(properties);
        this.multiViewerId = multiviewerId;
    }
    static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const properties = {
            layout: rawCommand.readUInt8(1),
            programPreviewSwapped: rawCommand.readUInt8(2) > 0,
        };
        return new MultiViewerPropertiesUpdateCommand(multiViewerId, properties);
    }
    applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
            throw new state_1.InvalidIdError('MultiViewer', this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        multiviewer.properties = this.properties;
        return `settings.multiViewers.${this.multiViewerId}.properties`;
    }
}
exports.MultiViewerPropertiesUpdateCommand = MultiViewerPropertiesUpdateCommand;
MultiViewerPropertiesUpdateCommand.rawName = 'MvPr';
MultiViewerPropertiesUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
//# sourceMappingURL=MultiViewerPropertiesCommand.js.map