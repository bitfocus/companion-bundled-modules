/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { ProtocolVersion } from '../../enums';
export interface MediaPoolProps {
    maxFrames: number[];
}
export declare class MediaPoolSettingsSetCommand extends BasicWritableCommand<MediaPoolProps> {
    static readonly rawName = "CMPS";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    constructor(maxFrames: number[]);
    serialize(): Buffer;
}
export declare class MediaPoolSettingsGetCommand extends DeserializedCommand<MediaPoolProps & {
    unassignedFrames: number;
}> {
    static readonly rawName = "MPSp";
    static readonly minimumVersion = ProtocolVersion.V8_0;
    constructor(maxFrames: number[], unassignedFrames: number);
    static deserialize(rawCommand: Buffer): MediaPoolSettingsGetCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=MediaPool.d.ts.map