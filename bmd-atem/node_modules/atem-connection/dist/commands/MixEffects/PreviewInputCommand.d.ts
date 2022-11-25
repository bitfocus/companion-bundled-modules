/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
export interface InputSource {
    source: number;
}
export declare class PreviewInputCommand extends BasicWritableCommand<InputSource> {
    static readonly rawName = "CPvI";
    readonly mixEffect: number;
    constructor(mixEffect: number, source: number);
    serialize(): Buffer;
}
export declare class PreviewInputUpdateCommand extends DeserializedCommand<InputSource> {
    static readonly rawName = "PrvI";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: InputSource);
    static deserialize(rawCommand: Buffer): PreviewInputUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=PreviewInputCommand.d.ts.map