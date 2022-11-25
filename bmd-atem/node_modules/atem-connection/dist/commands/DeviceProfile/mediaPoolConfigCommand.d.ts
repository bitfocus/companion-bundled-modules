/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MediaPoolInfo } from '../../state/info';
export declare class MediaPoolConfigCommand extends DeserializedCommand<MediaPoolInfo> {
    static readonly rawName = "_mpl";
    constructor(properties: MediaPoolInfo);
    static deserialize(rawCommand: Buffer): MediaPoolConfigCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=mediaPoolConfigCommand.d.ts.map