/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { SuperSourceBox } from '../../state/video/superSource';
import { ProtocolVersion } from '../../enums';
export declare class SuperSourceBoxParametersCommand extends WritableCommand<SuperSourceBox> {
    static MaskFlags: {
        enabled: number;
        source: number;
        x: number;
        y: number;
        size: number;
        cropped: number;
        cropTop: number;
        cropBottom: number;
        cropLeft: number;
        cropRight: number;
    };
    static readonly rawName = "CSBP";
    readonly ssrcId: number;
    readonly boxId: number;
    constructor(ssrcId: number, boxId: number);
    serialize(version: ProtocolVersion): Buffer;
}
export declare class SuperSourceBoxParametersUpdateCommand extends DeserializedCommand<SuperSourceBox> {
    static readonly rawName = "SSBP";
    readonly ssrcId: number;
    readonly boxId: number;
    constructor(ssrcId: number, boxId: number, properties: SuperSourceBox);
    static deserialize(rawCommand: Buffer, version: ProtocolVersion): SuperSourceBoxParametersUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=SuperSourceBoxParametersCommand.d.ts.map