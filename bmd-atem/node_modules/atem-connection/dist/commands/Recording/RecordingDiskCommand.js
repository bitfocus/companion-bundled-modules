"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordingDiskInfoUpdateCommand = exports.RecordingRequestSwitchDiskCommand = void 0;
const enums_1 = require("../../enums");
const state_1 = require("../../state");
const CommandBase_1 = require("../CommandBase");
const atemUtil_1 = require("../../lib/atemUtil");
class RecordingRequestSwitchDiskCommand extends CommandBase_1.BasicWritableCommand {
    constructor() {
        super({});
    }
    serialize() {
        return Buffer.alloc(0);
    }
}
exports.RecordingRequestSwitchDiskCommand = RecordingRequestSwitchDiskCommand;
RecordingRequestSwitchDiskCommand.rawName = 'RMSp';
RecordingRequestSwitchDiskCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
class RecordingDiskInfoUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(diskId, properties) {
        super(properties);
        this.diskId = diskId;
    }
    static deserialize(rawCommand) {
        const diskId = rawCommand.readUInt32BE(0);
        const rawStatus = rawCommand.readUInt16BE(8);
        const props = {
            diskId,
            recordingTimeAvailable: rawCommand.readUInt32BE(4),
            status: rawStatus & ~this.DeleteStatusFlag,
            isDelete: (rawStatus & this.DeleteStatusFlag) === this.DeleteStatusFlag,
            volumeName: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 10, 64),
        };
        return new RecordingDiskInfoUpdateCommand(diskId, props);
    }
    applyToState(state) {
        if (!state.recording) {
            throw new state_1.InvalidIdError('Recording');
        }
        if (this.properties.isDelete) {
            delete state.recording.disks[this.diskId];
        }
        else {
            state.recording.disks[this.diskId] = this.properties;
        }
        return `recording.duration`;
    }
}
exports.RecordingDiskInfoUpdateCommand = RecordingDiskInfoUpdateCommand;
RecordingDiskInfoUpdateCommand.rawName = 'RTMD';
RecordingDiskInfoUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
RecordingDiskInfoUpdateCommand.DeleteStatusFlag = 1 << 5;
//# sourceMappingURL=RecordingDiskCommand.js.map