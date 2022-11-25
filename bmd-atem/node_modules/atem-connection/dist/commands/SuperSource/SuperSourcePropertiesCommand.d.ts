/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { SuperSourceProperties, SuperSourceBorder } from '../../state/video/superSource';
import { ProtocolVersion } from '../../enums';
export declare class SuperSourcePropertiesCommand extends WritableCommand<SuperSourceProperties & SuperSourceBorder> {
    static MaskFlags: {
        artFillSource: number;
        artCutSource: number;
        artOption: number;
        artPreMultiplied: number;
        artClip: number;
        artGain: number;
        artInvertKey: number;
        borderEnabled: number;
        borderBevel: number;
        borderOuterWidth: number;
        borderInnerWidth: number;
        borderOuterSoftness: number;
        borderInnerSoftness: number;
        borderBevelSoftness: number;
        borderBevelPosition: number;
        borderHue: number;
        borderSaturation: number;
        borderLuma: number;
        borderLightSourceDirection: number;
        borderLightSourceAltitude: number;
    };
    static readonly rawName = "CSSc";
    constructor();
    serialize(): Buffer;
}
export declare class SuperSourcePropertiesV8Command extends WritableCommand<SuperSourceProperties> {
    static MaskFlags: {
        artFillSource: number;
        artCutSource: number;
        artOption: number;
        artPreMultiplied: number;
        artClip: number;
        artGain: number;
        artInvertKey: number;
    };
    static readonly rawName = "CSSc";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly ssrcId: number;
    constructor(ssrcId: number);
    serialize(): Buffer;
}
export declare class SuperSourceBorderCommand extends WritableCommand<SuperSourceBorder> {
    static MaskFlags: {
        borderEnabled: number;
        borderBevel: number;
        borderOuterWidth: number;
        borderInnerWidth: number;
        borderOuterSoftness: number;
        borderInnerSoftness: number;
        borderBevelSoftness: number;
        borderBevelPosition: number;
        borderHue: number;
        borderSaturation: number;
        borderLuma: number;
        borderLightSourceDirection: number;
        borderLightSourceAltitude: number;
    };
    static readonly rawName = "CSBd";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly ssrcId: number;
    constructor(ssrcId: number);
    serialize(): Buffer;
}
export declare class SuperSourcePropertiesUpdateCommand extends DeserializedCommand<{
    properties: SuperSourceProperties;
    border: SuperSourceBorder;
}> {
    static readonly rawName = "SSrc";
    static deserialize(rawCommand: Buffer): SuperSourcePropertiesUpdateCommand;
    applyToState(state: AtemState): string[];
}
export declare class SuperSourcePropertiesUpdateV8Command extends DeserializedCommand<SuperSourceProperties> {
    static readonly rawName = "SSrc";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly ssrcId: number;
    constructor(ssrcId: number, properties: SuperSourceProperties);
    static deserialize(rawCommand: Buffer): SuperSourcePropertiesUpdateV8Command;
    applyToState(state: AtemState): string;
}
export declare class SuperSourceBorderUpdateCommand extends DeserializedCommand<SuperSourceBorder> {
    static readonly rawName = "SSBd";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    readonly ssrcId: number;
    constructor(ssrcId: number, properties: SuperSourceBorder);
    static deserialize(rawCommand: Buffer): SuperSourceBorderUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=SuperSourcePropertiesCommand.d.ts.map