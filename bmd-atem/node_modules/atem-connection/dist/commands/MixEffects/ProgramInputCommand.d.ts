/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { InputSource } from './PreviewInputCommand';
export declare class ProgramInputCommand extends BasicWritableCommand<InputSource> {
    static readonly rawName = "CPgI";
    readonly mixEffect: number;
    constructor(mixEffect: number, source: number);
    serialize(): Buffer;
}
export declare class ProgramInputUpdateCommand extends DeserializedCommand<InputSource> {
    static readonly rawName = "PrgI";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: InputSource);
    static deserialize(rawCommand: Buffer): ProgramInputUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=ProgramInputCommand.d.ts.map