/// <reference types="node" />
import { BasicWritableCommand } from '../CommandBase';
export declare class FairlightMixerSendLevelsCommand extends BasicWritableCommand<{
    sendLevels: boolean;
}> {
    static readonly rawName = "SFLN";
    constructor(sendLevels: boolean);
    serialize(): Buffer;
}
//# sourceMappingURL=FairlightMixerSendLevelsCommand.d.ts.map