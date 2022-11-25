/// <reference types="node" />
import { WritableCommand } from '../CommandBase';
import { FairlightDynamicsResetProps } from './common';
export declare class FairlightMixerMasterDynamicsResetCommand extends WritableCommand<FairlightDynamicsResetProps> {
    static readonly rawName = "RMOD";
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerMasterDynamicsResetCommand.d.ts.map