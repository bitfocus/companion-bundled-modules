/// <reference types="node" />
import * as Enums from '../enums';
import type { IDeserializedCommand, ISerializableCommand } from '../commands';
export declare function bufToBase64String(buffer: Buffer, start: number, length: number): string;
export declare function bufToNullTerminatedString(buffer: Buffer, start: number, length: number): string;
/**
 * @todo: BALTE - 2018-5-24:
 * Create util functions that handle proper colour spaces in UHD.
 */
export declare function convertRGBAToYUV422(width: number, height: number, data: Buffer): Buffer;
export declare const RLE_HEADER = 18374403900871474942n;
export declare function encodeRLE(data: Buffer): Buffer;
export interface VideoModeInfo {
    format: Enums.VideoFormat;
    width: number;
    height: number;
}
export declare function getVideoModeInfo(videoMode: Enums.VideoMode): VideoModeInfo | undefined;
export declare function convertWAVToRaw(inputBuffer: Buffer, model: Enums.Model | undefined): Buffer;
export declare function UInt16BEToDecibel(input: number): number;
export declare function DecibelToUInt16BE(input: number): number;
export declare function IntToBalance(input: number): number;
export declare function BalanceToInt(input: number): number;
export declare function padToMultiple(val: number, multiple: number): number;
export declare function getComponents(val: number): number[];
export declare function combineComponents(vals: number[]): number;
export declare function commandStringify(command: IDeserializedCommand | ISerializableCommand): string;
export declare function omit<T, K extends keyof T>(o: T, ...keys: K[]): Omit<T, K>;
export declare function assertNever(_val: never): void;
export declare function isRunningInTests(): boolean;
//# sourceMappingURL=atemUtil.d.ts.map