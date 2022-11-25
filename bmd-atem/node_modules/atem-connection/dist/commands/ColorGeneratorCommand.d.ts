/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from './CommandBase';
import { AtemState, ColorGeneratorState } from '../state';
export declare class ColorGeneratorCommand extends WritableCommand<ColorGeneratorState> {
    static MaskFlags: {
        hue: number;
        saturation: number;
        luma: number;
    };
    static readonly rawName = "CClV";
    readonly index: number;
    constructor(index: number);
    serialize(): Buffer;
}
export declare class ColorGeneratorUpdateCommand extends DeserializedCommand<ColorGeneratorState> {
    static readonly rawName = "ColV";
    readonly index: number;
    constructor(index: number, properties: ColorGeneratorState);
    static deserialize(rawCommand: Buffer): ColorGeneratorUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=ColorGeneratorCommand.d.ts.map