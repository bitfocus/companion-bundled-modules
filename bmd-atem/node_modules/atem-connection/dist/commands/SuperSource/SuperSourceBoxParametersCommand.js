"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperSourceBoxParametersUpdateCommand = exports.SuperSourceBoxParametersCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class SuperSourceBoxParametersCommand extends CommandBase_1.WritableCommand {
    constructor(ssrcId, boxId) {
        super();
        this.ssrcId = ssrcId;
        this.boxId = boxId;
    }
    serialize(version) {
        const buffer = Buffer.alloc(24);
        let i = 0;
        if (version >= enums_1.ProtocolVersion.V8_0) {
            i = 1;
            buffer.writeUInt8(this.ssrcId, i + 1);
        }
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.boxId, i + 2);
        buffer.writeUInt8(this.properties.enabled ? 1 : 0, i + 3);
        if (i === 1)
            i++; // Needs to be 2 byte aligned now
        buffer.writeUInt16BE(this.properties.source || 0, i + 4);
        buffer.writeInt16BE(this.properties.x || 0, i + 6);
        buffer.writeInt16BE(this.properties.y || 0, i + 8);
        buffer.writeUInt16BE(this.properties.size || 0, i + 10);
        buffer.writeUInt8(this.properties.cropped ? 1 : 0, i + 12);
        buffer.writeUInt16BE(this.properties.cropTop || 0, i + 14);
        buffer.writeUInt16BE(this.properties.cropBottom || 0, i + 16);
        buffer.writeUInt16BE(this.properties.cropLeft || 0, i + 18);
        buffer.writeUInt16BE(this.properties.cropRight || 0, i + 20);
        return buffer;
    }
}
exports.SuperSourceBoxParametersCommand = SuperSourceBoxParametersCommand;
SuperSourceBoxParametersCommand.MaskFlags = {
    enabled: 1 << 0,
    source: 1 << 1,
    x: 1 << 2,
    y: 1 << 3,
    size: 1 << 4,
    cropped: 1 << 5,
    cropTop: 1 << 6,
    cropBottom: 1 << 7,
    cropLeft: 1 << 8,
    cropRight: 1 << 9,
};
SuperSourceBoxParametersCommand.rawName = 'CSBP';
class SuperSourceBoxParametersUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(ssrcId, boxId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
        this.boxId = boxId;
    }
    static deserialize(rawCommand, version) {
        let ssrcId = 0;
        let i = 0;
        if (version >= enums_1.ProtocolVersion.V8_0) {
            i = 2;
            ssrcId = rawCommand.readUInt8(0);
        }
        const boxId = rawCommand.readUInt8(i > 0 ? 1 : 0);
        const properties = {
            enabled: rawCommand.readUInt8(i > 0 ? 2 : 1) === 1,
            source: rawCommand.readUInt16BE(i + 2),
            x: rawCommand.readInt16BE(i + 4),
            y: rawCommand.readInt16BE(i + 6),
            size: rawCommand.readUInt16BE(i + 8),
            cropped: rawCommand.readUInt8(i + 10) === 1,
            cropTop: rawCommand.readUInt16BE(i + 12),
            cropBottom: rawCommand.readUInt16BE(i + 14),
            cropLeft: rawCommand.readUInt16BE(i + 16),
            cropRight: rawCommand.readUInt16BE(i + 18),
        };
        return new SuperSourceBoxParametersUpdateCommand(ssrcId, boxId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.ssrcId >= state.info.capabilities.superSources) {
            throw new state_1.InvalidIdError('SuperSource', this.ssrcId);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, this.ssrcId);
        supersource.boxes[this.boxId] = {
            ...this.properties,
        };
        return `video.superSources.${this.ssrcId}.boxes.${this.boxId}`;
    }
}
exports.SuperSourceBoxParametersUpdateCommand = SuperSourceBoxParametersUpdateCommand;
SuperSourceBoxParametersUpdateCommand.rawName = 'SSBP';
//# sourceMappingURL=SuperSourceBoxParametersCommand.js.map