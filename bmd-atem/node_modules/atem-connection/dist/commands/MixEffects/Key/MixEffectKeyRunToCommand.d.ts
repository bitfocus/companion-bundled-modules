/// <reference types="node" />
import { BasicWritableCommand } from '../../CommandBase';
import { FlyKeyKeyFrame, FlyKeyDirection } from '../../../enums';
export declare class MixEffectKeyRunToCommand extends BasicWritableCommand<{
    keyFrameId: FlyKeyKeyFrame;
    direction: FlyKeyDirection;
}> {
    static readonly rawName = "RFlK";
    readonly mixEffect: number;
    readonly upstreamKeyerId: number;
    constructor(mixEffect: number, upstreamKeyerId: number, keyFrameId: FlyKeyKeyFrame, direction: FlyKeyDirection);
    serialize(): Buffer;
}
//# sourceMappingURL=MixEffectKeyRunToCommand.d.ts.map