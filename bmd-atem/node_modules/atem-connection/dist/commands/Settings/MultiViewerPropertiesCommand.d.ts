/// <reference types="node" />
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MultiViewerPropertiesState } from '../../state/settings';
import { ProtocolVersion } from '../../enums';
export declare class MultiViewerPropertiesCommand extends WritableCommand<MultiViewerPropertiesState> {
    static MaskFlags: {
        layout: number;
        programPreviewSwapped: number;
    };
    static readonly rawName = "CMvP";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly multiViewerId: number;
    constructor(multiviewerId: number);
    serialize(): Buffer;
}
export declare class MultiViewerPropertiesUpdateCommand extends DeserializedCommand<MultiViewerPropertiesState> {
    static readonly rawName = "MvPr";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly multiViewerId: number;
    constructor(multiviewerId: number, properties: MultiViewerPropertiesState);
    static deserialize(rawCommand: Buffer): MultiViewerPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MultiViewerPropertiesCommand.d.ts.map