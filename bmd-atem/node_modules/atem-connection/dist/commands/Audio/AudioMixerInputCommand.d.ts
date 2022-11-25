/// <reference types="node" />
import { AtemState } from '../../state';
import { AudioChannel } from '../../state/audio';
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { ProtocolVersion } from '../../enums';
import { OmitReadonly } from '../../lib/types';
export declare class AudioMixerInputCommand extends WritableCommand<OmitReadonly<AudioChannel>> {
    static MaskFlags: {
        mixOption: number;
        gain: number;
        balance: number;
        rcaToXlrEnabled: number;
    };
    static readonly rawName = "CAMI";
    readonly index: number;
    constructor(index: number);
    serialize(): Buffer;
}
export declare class AudioMixerInputUpdateCommand extends DeserializedCommand<Omit<AudioChannel, 'rcaToXlrEnabled' | 'supportsRcaToXlrEnabled'>> {
    static readonly rawName = "AMIP";
    readonly index: number;
    constructor(index: number, properties: AudioMixerInputUpdateCommand['properties']);
    static deserialize(rawCommand: Buffer): AudioMixerInputUpdateCommand;
    applyToState(state: AtemState): string;
}
export declare class AudioMixerInputUpdateV8Command extends DeserializedCommand<AudioChannel> {
    static readonly minimumVersion = ProtocolVersion.V8_0;
    static readonly rawName = "AMIP";
    readonly index: number;
    constructor(index: number, properties: AudioChannel);
    static deserialize(rawCommand: Buffer): AudioMixerInputUpdateV8Command;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AudioMixerInputCommand.d.ts.map