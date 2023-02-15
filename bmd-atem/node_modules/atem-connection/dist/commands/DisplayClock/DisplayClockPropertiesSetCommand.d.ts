/// <reference types="node" />
import { DisplayClockProperties } from '../../state/displayClock';
import { WritableCommand } from '../CommandBase';
export interface DisplayClockPropertiesExt extends DisplayClockProperties {
    startFromFrames: number;
}
export declare class DisplayClockPropertiesSetCommand extends WritableCommand<DisplayClockPropertiesExt> {
    static MaskFlags: {
        enabled: number;
        size: number;
        opacity: number;
        positionX: number;
        positionY: number;
        autoHide: number;
        startFrom: number;
        startFromFrames: number;
        clockMode: number;
    };
    static readonly rawName = "DCPC";
    serialize(): Buffer;
}
//# sourceMappingURL=DisplayClockPropertiesSetCommand.d.ts.map