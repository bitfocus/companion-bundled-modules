/// <reference types="node" />
import { WritableCommand, DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { InputChannel } from '../../state/input';
import { OmitReadonly } from '../../lib/types';
export declare class InputPropertiesCommand extends WritableCommand<OmitReadonly<InputChannel>> {
    static MaskFlags: {
        longName: number;
        shortName: number;
        externalPortType: number;
    };
    static readonly rawName = "CInL";
    readonly inputId: number;
    constructor(inputId: number);
    serialize(): Buffer;
}
export declare class InputPropertiesUpdateCommand extends DeserializedCommand<InputChannel> {
    static readonly rawName = "InPr";
    readonly inputId: number;
    constructor(inputId: number, properties: InputChannel);
    static deserialize(rawCommand: Buffer): InputPropertiesUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=InputPropertiesCommand.d.ts.map