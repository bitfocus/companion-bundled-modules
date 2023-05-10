/// <reference types="node" />
import { AtemState } from '../state';
import { ProtocolVersion } from '../enums';
import { BasicWritableCommand, DeserializedCommand } from './CommandBase';
export declare enum CameraControlDataType {
    BOOL = 0,
    SINT8 = 1,
    SINT16 = 2,
    SINT32 = 3,
    SINT64 = 4,
    STRING = 5,
    FLOAT = 128
}
export interface CameraControlPacket {
    type: CameraControlDataType;
    boolData: boolean[];
    numberData: number[];
    bigintData: bigint[];
    stringData: string;
    relative: boolean;
}
export interface CameraControlPacket2 {
    type: CameraControlDataType;
    boolData: boolean[];
    numberData: number[];
    bigintData: bigint[];
    stringData: string;
    periodicFlushEnabled: boolean;
}
export declare class CameraControlCommand extends BasicWritableCommand<CameraControlPacket> {
    static readonly rawName = "CCmd";
    static readonly minimumVersion = ProtocolVersion.V7_2;
    readonly source: number;
    readonly category: number;
    readonly parameter: number;
    constructor(source: number, category: number, parameter: number, props: CameraControlPacket);
    serialize(): Buffer;
}
export declare class CameraControlUpdateCommand extends DeserializedCommand<CameraControlPacket2> {
    static readonly rawName = "CCdP";
    static readonly minimumVersion = ProtocolVersion.V7_2;
    readonly source: number;
    readonly category: number;
    readonly parameter: number;
    constructor(source: number, category: number, parameter: number, props: CameraControlPacket2);
    static deserialize(rawCommand: Buffer): CameraControlUpdateCommand;
    applyToState(_state: AtemState): string | string[];
}
//# sourceMappingURL=CameraControlCommand.d.ts.map