/// <reference types="node" />
import { FairlightAudioCompressorState } from '../../state/fairlight';
import { AtemState } from '../../state';
import { DeserializedCommand, WritableCommand } from '../CommandBase';
import { OmitReadonly } from '../../lib/types';
export declare class FairlightMixerSourceCompressorCommand extends WritableCommand<OmitReadonly<FairlightAudioCompressorState>> {
    static MaskFlags: {
        compressorEnabled: number;
        threshold: number;
        ratio: number;
        attack: number;
        hold: number;
        release: number;
    };
    static readonly rawName = "CICP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint);
    serialize(): Buffer;
}
export declare class FairlightMixerSourceCompressorUpdateCommand extends DeserializedCommand<FairlightAudioCompressorState> {
    static readonly rawName = "AICP";
    readonly index: number;
    readonly source: bigint;
    constructor(index: number, source: bigint, props: FairlightAudioCompressorState);
    static deserialize(rawCommand: Buffer): FairlightMixerSourceCompressorUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=FairlightMixerSourceCompressorCommand.d.ts.map