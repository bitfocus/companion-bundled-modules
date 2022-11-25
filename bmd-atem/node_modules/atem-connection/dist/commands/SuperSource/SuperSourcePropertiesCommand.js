"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperSourceBorderUpdateCommand = exports.SuperSourcePropertiesUpdateV8Command = exports.SuperSourcePropertiesUpdateCommand = exports.SuperSourceBorderCommand = exports.SuperSourcePropertiesV8Command = exports.SuperSourcePropertiesCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const state_1 = require("../../state");
const enums_1 = require("../../enums");
class SuperSourcePropertiesCommand extends CommandBase_1.WritableCommand {
    constructor() {
        super();
    }
    serialize() {
        const buffer = Buffer.alloc(36);
        buffer.writeUInt32BE(this.flag, 0);
        buffer.writeUInt16BE(this.properties.artFillSource || 0, 4);
        buffer.writeUInt16BE(this.properties.artCutSource || 0, 6);
        buffer.writeUInt8(this.properties.artOption || 0, 8);
        buffer.writeUInt8(this.properties.artPreMultiplied ? 1 : 0, 9);
        buffer.writeUInt16BE(this.properties.artClip || 0, 10);
        buffer.writeUInt16BE(this.properties.artGain || 0, 12);
        buffer.writeUInt8(this.properties.artInvertKey ? 1 : 0, 14);
        buffer.writeUInt8(this.properties.borderEnabled ? 1 : 0, 15);
        buffer.writeUInt8(this.properties.borderBevel || 0, 16);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 18);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 20);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 22);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 23);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 24);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 25);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 26);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 28);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 30);
        buffer.writeUInt16BE(this.properties.borderLightSourceDirection || 0, 32);
        buffer.writeUInt8(this.properties.borderLightSourceAltitude || 0, 34);
        return buffer;
    }
}
exports.SuperSourcePropertiesCommand = SuperSourcePropertiesCommand;
SuperSourcePropertiesCommand.MaskFlags = {
    artFillSource: 1 << 0,
    artCutSource: 1 << 1,
    artOption: 1 << 2,
    artPreMultiplied: 1 << 3,
    artClip: 1 << 4,
    artGain: 1 << 5,
    artInvertKey: 1 << 6,
    borderEnabled: 1 << 7,
    borderBevel: 1 << 8,
    borderOuterWidth: 1 << 9,
    borderInnerWidth: 1 << 10,
    borderOuterSoftness: 1 << 11,
    borderInnerSoftness: 1 << 12,
    borderBevelSoftness: 1 << 13,
    borderBevelPosition: 1 << 14,
    borderHue: 1 << 15,
    borderSaturation: 1 << 16,
    borderLuma: 1 << 17,
    borderLightSourceDirection: 1 << 18,
    borderLightSourceAltitude: 1 << 19,
};
SuperSourcePropertiesCommand.rawName = 'CSSc';
class SuperSourcePropertiesV8Command extends CommandBase_1.WritableCommand {
    constructor(ssrcId) {
        super();
        this.ssrcId = ssrcId;
    }
    serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.ssrcId, 1);
        buffer.writeUInt16BE(this.properties.artFillSource || 0, 2);
        buffer.writeUInt16BE(this.properties.artCutSource || 0, 4);
        buffer.writeUInt8(this.properties.artOption || 0, 6);
        buffer.writeUInt8(this.properties.artPreMultiplied ? 1 : 0, 7);
        buffer.writeUInt16BE(this.properties.artClip || 0, 8);
        buffer.writeUInt16BE(this.properties.artGain || 0, 10);
        buffer.writeUInt8(this.properties.artInvertKey ? 1 : 0, 12);
        return buffer;
    }
}
exports.SuperSourcePropertiesV8Command = SuperSourcePropertiesV8Command;
SuperSourcePropertiesV8Command.MaskFlags = {
    artFillSource: 1 << 0,
    artCutSource: 1 << 1,
    artOption: 1 << 2,
    artPreMultiplied: 1 << 3,
    artClip: 1 << 4,
    artGain: 1 << 5,
    artInvertKey: 1 << 6,
};
SuperSourcePropertiesV8Command.rawName = 'CSSc';
SuperSourcePropertiesV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0;
class SuperSourceBorderCommand extends CommandBase_1.WritableCommand {
    constructor(ssrcId) {
        super();
        this.ssrcId = ssrcId;
    }
    serialize() {
        const buffer = Buffer.alloc(24);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.ssrcId, 2);
        buffer.writeUInt8(this.properties.borderEnabled ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.borderBevel || 0, 4);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 6);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 8);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 10);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 11);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 12);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 13);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 14);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 16);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 18);
        buffer.writeUInt16BE(this.properties.borderLightSourceDirection || 0, 20);
        buffer.writeUInt8(this.properties.borderLightSourceAltitude || 0, 22);
        return buffer;
    }
}
exports.SuperSourceBorderCommand = SuperSourceBorderCommand;
SuperSourceBorderCommand.MaskFlags = {
    borderEnabled: 1 << 0,
    borderBevel: 1 << 1,
    borderOuterWidth: 1 << 2,
    borderInnerWidth: 1 << 3,
    borderOuterSoftness: 1 << 4,
    borderInnerSoftness: 1 << 5,
    borderBevelSoftness: 1 << 6,
    borderBevelPosition: 1 << 7,
    borderHue: 1 << 8,
    borderSaturation: 1 << 9,
    borderLuma: 1 << 10,
    borderLightSourceDirection: 1 << 11,
    borderLightSourceAltitude: 1 << 12,
};
SuperSourceBorderCommand.rawName = 'CSBd';
SuperSourceBorderCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
class SuperSourcePropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            properties: {
                artFillSource: rawCommand.readUInt16BE(0),
                artCutSource: rawCommand.readUInt16BE(2),
                artOption: rawCommand.readUInt8(4),
                artPreMultiplied: rawCommand.readUInt8(5) === 1,
                artClip: rawCommand.readUInt16BE(6),
                artGain: rawCommand.readUInt16BE(8),
                artInvertKey: rawCommand.readUInt8(10) === 1,
            },
            border: {
                borderEnabled: rawCommand.readUInt8(11) === 1,
                borderBevel: rawCommand.readUInt8(12),
                borderOuterWidth: rawCommand.readUInt16BE(14),
                borderInnerWidth: rawCommand.readUInt16BE(16),
                borderOuterSoftness: rawCommand.readUInt8(18),
                borderInnerSoftness: rawCommand.readUInt8(19),
                borderBevelSoftness: rawCommand.readUInt8(20),
                borderBevelPosition: rawCommand.readUInt8(21),
                borderHue: rawCommand.readUInt16BE(22),
                borderSaturation: rawCommand.readUInt16BE(24),
                borderLuma: rawCommand.readUInt16BE(26),
                borderLightSourceDirection: rawCommand.readUInt16BE(28),
                borderLightSourceAltitude: rawCommand.readUInt8(30),
            },
        };
        return new SuperSourcePropertiesUpdateCommand(properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || !state.info.capabilities.superSources) {
            throw new state_1.InvalidIdError('SuperSource', 0);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, 0);
        supersource.properties = this.properties.properties;
        supersource.border = this.properties.border;
        return [`video.superSources.0.properties`, `video.superSources.0.border`];
    }
}
exports.SuperSourcePropertiesUpdateCommand = SuperSourcePropertiesUpdateCommand;
SuperSourcePropertiesUpdateCommand.rawName = 'SSrc';
class SuperSourcePropertiesUpdateV8Command extends CommandBase_1.DeserializedCommand {
    constructor(ssrcId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
    }
    static deserialize(rawCommand) {
        const ssrcId = rawCommand.readUInt8(0);
        const properties = {
            artFillSource: rawCommand.readUInt16BE(2),
            artCutSource: rawCommand.readUInt16BE(4),
            artOption: rawCommand.readUInt8(6),
            artPreMultiplied: rawCommand.readUInt8(7) === 1,
            artClip: rawCommand.readUInt16BE(8),
            artGain: rawCommand.readUInt16BE(10),
            artInvertKey: rawCommand.readUInt8(12) === 1,
        };
        return new SuperSourcePropertiesUpdateV8Command(ssrcId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.ssrcId >= state.info.capabilities.superSources) {
            throw new state_1.InvalidIdError('SuperSource', this.ssrcId);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, this.ssrcId);
        supersource.properties = {
            ...this.properties,
        };
        return `video.superSources.${this.ssrcId}.properties`;
    }
}
exports.SuperSourcePropertiesUpdateV8Command = SuperSourcePropertiesUpdateV8Command;
SuperSourcePropertiesUpdateV8Command.rawName = 'SSrc';
SuperSourcePropertiesUpdateV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0;
class SuperSourceBorderUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(ssrcId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
    }
    static deserialize(rawCommand) {
        const ssrcId = rawCommand.readUInt8(0);
        const properties = {
            borderEnabled: rawCommand.readUInt8(1) === 1,
            borderBevel: rawCommand.readUInt8(2),
            borderOuterWidth: rawCommand.readUInt16BE(4),
            borderInnerWidth: rawCommand.readUInt16BE(6),
            borderOuterSoftness: rawCommand.readUInt8(8),
            borderInnerSoftness: rawCommand.readUInt8(9),
            borderBevelSoftness: rawCommand.readUInt8(10),
            borderBevelPosition: rawCommand.readUInt8(11),
            borderHue: rawCommand.readUInt16BE(12),
            borderSaturation: rawCommand.readUInt16BE(14),
            borderLuma: rawCommand.readUInt16BE(16),
            borderLightSourceDirection: rawCommand.readUInt16BE(18),
            borderLightSourceAltitude: rawCommand.readUInt8(20),
        };
        return new SuperSourceBorderUpdateCommand(ssrcId, properties);
    }
    applyToState(state) {
        if (!state.info.capabilities || this.ssrcId >= state.info.capabilities.superSources) {
            throw new state_1.InvalidIdError('SuperSource', this.ssrcId);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, this.ssrcId);
        supersource.border = this.properties;
        return `video.superSources.${this.ssrcId}.border`;
    }
}
exports.SuperSourceBorderUpdateCommand = SuperSourceBorderUpdateCommand;
SuperSourceBorderUpdateCommand.rawName = 'SSBd';
SuperSourceBorderUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
//# sourceMappingURL=SuperSourcePropertiesCommand.js.map