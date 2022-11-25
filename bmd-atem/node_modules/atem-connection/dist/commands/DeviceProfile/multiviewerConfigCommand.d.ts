/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { MultiviewerInfo } from '../../state/info';
import { ProtocolVersion } from '../../enums';
export declare class MultiviewerConfigCommand extends DeserializedCommand<MultiviewerInfo> {
    static readonly rawName = "_MvC";
    constructor(properties: MultiviewerInfo);
    static deserialize(rawCommand: Buffer, version: ProtocolVersion): MultiviewerConfigCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=multiviewerConfigCommand.d.ts.map