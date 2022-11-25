/// <reference types="node" />
import { BasicWritableCommand, DeserializedCommand } from './CommandBase';
import { AtemState } from '../state';
export interface AuxSourceProps {
    source: number;
}
export declare class AuxSourceCommand extends BasicWritableCommand<AuxSourceProps> {
    static readonly rawName = "CAuS";
    readonly auxBus: number;
    constructor(auxBus: number, source: number);
    serialize(): Buffer;
}
export declare class AuxSourceUpdateCommand extends DeserializedCommand<AuxSourceProps> {
    static readonly rawName = "AuxS";
    readonly auxBus: number;
    constructor(auxBus: number, properties: AuxSourceProps);
    static deserialize(rawCommand: Buffer): AuxSourceUpdateCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=AuxSourceCommand.d.ts.map