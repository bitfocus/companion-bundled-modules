/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { DownstreamKeyer } from '../../state/video/downstreamKeyers';
export declare class DownstreamKeySourcesCommand extends DeserializedCommand<DownstreamKeyer['sources']> {
    static readonly rawName = "DskB";
    readonly downstreamKeyerId: number;
    constructor(downstreamKeyerId: number, properties: DownstreamKeyer['sources']);
    static deserialize(rawCommand: Buffer): DownstreamKeySourcesCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=DownstreamKeySourcesCommand.d.ts.map