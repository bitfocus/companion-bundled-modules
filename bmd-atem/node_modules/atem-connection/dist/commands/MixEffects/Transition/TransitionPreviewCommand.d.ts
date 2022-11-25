/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../../CommandBase';
import { AtemState } from '../../../state';
export interface PreviewProps {
    preview: boolean;
}
export declare class PreviewTransitionCommand extends BasicWritableCommand<PreviewProps> {
    static readonly rawName = "CTPr";
    readonly mixEffect: number;
    constructor(mixEffect: number, preview: boolean);
    serialize(): Buffer;
}
export declare class PreviewTransitionUpdateCommand extends DeserializedCommand<PreviewProps> {
    static readonly rawName = "TrPr";
    readonly mixEffect: number;
    constructor(mixEffect: number, properties: PreviewProps);
    static deserialize(rawCommand: Buffer): PreviewTransitionUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=TransitionPreviewCommand.d.ts.map