"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraControlUpdateCommand = exports.CameraControlCommand = exports.CameraControlDataType = void 0;
const enums_1 = require("../enums");
const CommandBase_1 = require("./CommandBase");
const atemUtil_1 = require("../lib/atemUtil");
var CameraControlDataType;
(function (CameraControlDataType) {
    CameraControlDataType[CameraControlDataType["BOOL"] = 0] = "BOOL";
    CameraControlDataType[CameraControlDataType["SINT8"] = 1] = "SINT8";
    CameraControlDataType[CameraControlDataType["SINT16"] = 2] = "SINT16";
    CameraControlDataType[CameraControlDataType["SINT32"] = 3] = "SINT32";
    CameraControlDataType[CameraControlDataType["SINT64"] = 4] = "SINT64";
    CameraControlDataType[CameraControlDataType["STRING"] = 5] = "STRING";
    CameraControlDataType[CameraControlDataType["FLOAT"] = 128] = "FLOAT";
})(CameraControlDataType = exports.CameraControlDataType || (exports.CameraControlDataType = {}));
class CameraControlCommand extends CommandBase_1.BasicWritableCommand {
    constructor(source, category, parameter, props) {
        super(props);
        this.source = source;
        this.category = category;
        this.parameter = parameter;
    }
    serialize() {
        const headerSize = 16;
        const header8BitPos = 6;
        const header16BitPos = 8;
        const header32BitPos = 10;
        const header64BitPos = 12;
        let buffer;
        switch (this.properties.type) {
            case CameraControlDataType.BOOL: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.boolData.length, 8));
                buffer.writeUint16BE(this.properties.boolData.length, header8BitPos);
                let offset = headerSize;
                for (let i = 0; i < this.properties.boolData.length; i++) {
                    buffer.writeInt8(this.properties.boolData[i] ? 1 : 0, offset);
                    offset++;
                }
                break;
            }
            case CameraControlDataType.SINT8: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length, 8));
                buffer.writeUint16BE(this.properties.numberData.length, header8BitPos);
                let offset = headerSize;
                for (let i = 0; i < this.properties.numberData.length; i++) {
                    buffer.writeInt8(this.properties.numberData[i], offset);
                    offset++;
                }
                break;
            }
            case CameraControlDataType.SINT16: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length * 2, 8));
                buffer.writeUint16BE(this.properties.numberData.length, header16BitPos);
                let offset = headerSize;
                for (let i = 0; i < this.properties.numberData.length; i++) {
                    buffer.writeInt16BE(this.properties.numberData[i], offset);
                    offset += 2;
                }
                break;
            }
            case CameraControlDataType.SINT32: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length * 4, 8));
                buffer.writeUint16BE(this.properties.numberData.length, header32BitPos);
                let offset = headerSize;
                for (let i = 0; i < this.properties.numberData.length; i++) {
                    buffer.writeInt32BE(this.properties.numberData[i], offset);
                    offset += 4;
                }
                break;
            }
            case CameraControlDataType.SINT64: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.bigintData.length * 8, 8));
                buffer.writeUint16BE(this.properties.bigintData.length, header64BitPos);
                let offset = headerSize;
                for (let i = 0; i < this.properties.bigintData.length; i++) {
                    buffer.writeBigInt64BE(this.properties.bigintData[i], offset);
                    offset += 8;
                }
                break;
            }
            case CameraControlDataType.STRING: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.stringData.length, 8));
                buffer.writeUint16BE(this.properties.stringData.length, header8BitPos);
                buffer.write(this.properties.stringData, headerSize);
                break;
            }
            case CameraControlDataType.FLOAT: {
                buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length * 2, 8));
                buffer.writeUint16BE(this.properties.numberData.length, header16BitPos);
                // TODO - verify this encoding is correct
                let offset = headerSize;
                for (let i = 0; i < this.properties.numberData.length; i++) {
                    const encodedValue = this.properties.numberData[i] * 0x7ff;
                    buffer.writeInt16BE(encodedValue, offset);
                    offset += 2;
                }
                break;
            }
            default:
                (0, atemUtil_1.assertNever)(this.properties.type);
                throw new Error(`Invalid CameraControlDataType: ${this.properties.type}`);
        }
        // add common properties
        buffer.writeUInt8(this.source, 0);
        buffer.writeUInt8(this.category, 1);
        buffer.writeUInt8(this.parameter, 2);
        buffer.writeUInt8(this.properties.relative ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.type, 4);
        return buffer;
    }
}
exports.CameraControlCommand = CameraControlCommand;
CameraControlCommand.rawName = 'CCmd';
CameraControlCommand.minimumVersion = enums_1.ProtocolVersion.V7_2;
class CameraControlUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(source, category, parameter, props) {
        super(props);
        this.source = source;
        this.category = category;
        this.parameter = parameter;
    }
    static deserialize(rawCommand) {
        const source = rawCommand.readUint8(0);
        const category = rawCommand.readUint8(1);
        const parameter = rawCommand.readUint8(2);
        const type = rawCommand.readUint8(3);
        const headerSize = 16;
        const count8Bit = rawCommand.readUint16BE(4);
        const count16Bit = rawCommand.readUint16BE(6);
        const count32Bit = rawCommand.readUint16BE(8);
        const count64Bit = rawCommand.readUint16BE(10);
        const props = {
            type,
            boolData: [],
            numberData: [],
            bigintData: [],
            stringData: '',
            periodicFlushEnabled: rawCommand.readUint8(12) > 0,
        };
        let offset = headerSize;
        switch (type) {
            case CameraControlDataType.BOOL: {
                for (let i = 0; i < count8Bit; i++) {
                    props.boolData.push(rawCommand.readInt8(offset) > 0);
                    offset += 1;
                }
                break;
            }
            case CameraControlDataType.SINT8: {
                for (let i = 0; i < count8Bit; i++) {
                    props.numberData.push(rawCommand.readInt8(offset));
                    offset += 1;
                }
                break;
            }
            case CameraControlDataType.SINT16: {
                for (let i = 0; i < count16Bit; i++) {
                    props.numberData.push(rawCommand.readInt16BE(offset));
                    offset += 2;
                }
                break;
            }
            case CameraControlDataType.SINT32: {
                for (let i = 0; i < count32Bit; i++) {
                    props.numberData.push(rawCommand.readInt32BE(offset));
                    offset += 4;
                }
                break;
            }
            case CameraControlDataType.SINT64: {
                for (let i = 0; i < count64Bit; i++) {
                    props.bigintData.push(rawCommand.readBigInt64BE(offset));
                    offset += 8;
                }
                break;
            }
            case CameraControlDataType.STRING: {
                props.stringData = rawCommand.toString(undefined, offset, offset + count8Bit);
                break;
            }
            case CameraControlDataType.FLOAT: {
                // TODO - verify this encoding is correct
                for (let i = 0; i < count16Bit; i++) {
                    const decodedValue = rawCommand.readInt16BE(offset) / 0x7ff;
                    props.numberData.push(decodedValue);
                    offset += 2;
                }
                break;
            }
            default:
                (0, atemUtil_1.assertNever)(type);
                throw new Error(`Invalid CameraControlDataType: ${type}`);
        }
        return new CameraControlUpdateCommand(source, category, parameter, props);
    }
    applyToState(_state) {
        // TODO: future
        return [];
    }
}
exports.CameraControlUpdateCommand = CameraControlUpdateCommand;
CameraControlUpdateCommand.rawName = 'CCdP';
CameraControlUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V7_2;
//# sourceMappingURL=CameraControlCommand.js.map