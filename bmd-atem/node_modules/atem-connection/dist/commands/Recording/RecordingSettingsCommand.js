"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordingSettingsUpdateCommand = exports.RecordingSettingsCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const enums_1 = require("../../enums");
const atemUtil_1 = require("../../lib/atemUtil");
class RecordingSettingsCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(144);
        buffer.writeUInt8(this.flag, 0);
        buffer.write(this.properties.filename || '', 1, 128, 'utf8');
        buffer.writeUInt32BE(this.properties.workingSet1DiskId || 0, 132);
        buffer.writeUInt32BE(this.properties.workingSet2DiskId || 0, 136);
        buffer.writeUInt8(this.properties.recordInAllCameras ? 1 : 0, 140);
        return buffer;
    }
}
exports.RecordingSettingsCommand = RecordingSettingsCommand;
RecordingSettingsCommand.rawName = 'CRMS';
RecordingSettingsCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
RecordingSettingsCommand.MaskFlags = {
    filename: 1 << 0,
    workingSet1DiskId: 1 << 1,
    workingSet2DiskId: 1 << 2,
    recordInAllCameras: 1 << 3,
};
class RecordingSettingsUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(properties) {
        super(properties);
    }
    static deserialize(rawCommand) {
        const props = {
            filename: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 0, 128),
            workingSet1DiskId: rawCommand.readUInt32BE(128),
            workingSet2DiskId: rawCommand.readUInt32BE(132),
            recordInAllCameras: rawCommand.readUInt8(136) != 0,
        };
        return new RecordingSettingsUpdateCommand(props);
    }
    applyToState(state) {
        if (!state.recording) {
            state.recording = {
                properties: this.properties,
                disks: {},
            };
        }
        else {
            state.recording.properties = this.properties;
        }
        return `recording.properties`;
    }
}
exports.RecordingSettingsUpdateCommand = RecordingSettingsUpdateCommand;
RecordingSettingsUpdateCommand.rawName = 'RMSu';
RecordingSettingsUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
//# sourceMappingURL=RecordingSettingsCommand.js.map