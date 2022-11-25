/// <reference types="node" />
import { AtemState } from '../../state';
import { FairlightAudioInputProperties } from '../../state/fairlight';
import { ProtocolVersion } from '../../enums';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerInputCommand extends WritableCommand<Omit<OmitReadonly<FairlightAudioInputProperties>, 'activeInputLevel'> & {
    rcaToXlrEnabled: boolean;
}> {
    static MaskFlags: {
        rcaToXlrEnabled: number;
        activeConfiguration: number;
    };
    static readonly rawName = "CFIP";
    readonly index: number;
    constructor(index: number);
    serialize(): Buffer;
}
export declare class FairlightMixerInputV8Command extends WritableCommand<OmitReadonly<FairlightAudioInputProperties>> {
    static MaskFlags: {
        activeConfiguration: number;
        activeInputLevel: number;
    };
    static readonly rawName = "CFIP";
    static readonly minimumVersion = ProtocolVersion.V8_1_1;
    readonly index: number;
    constructor(index: number);
    serialize(): Buffer;
}
export declare class FairlightMixerInputUpdateCommand extends DeserializedCommand<FairlightAudioInputProperties> {
    static readonly rawName = "FAIP";
    readonly index: number;
    constructor(index: number, properties: FairlightAudioInputProperties);
    static deserialize(rawCommand: Buffer, version: ProtocolVersion): FairlightMixerInputUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerInputCommand.d.ts.map