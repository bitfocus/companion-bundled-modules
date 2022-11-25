/// <reference types="node" />
import { DeserializedCommand } from './CommandBase';
import { AtemState } from '../state';
/**
 * This command gets the power status from the Atem. As defined in
 * DeviceProfile/productIdentifierCommand.ts the 2ME, 2ME 4K and the
 * Broadcast Studio have 2 power supplies. All other models have 1.
 */
export declare class PowerStatusCommand extends DeserializedCommand<boolean[]> {
    static readonly rawName = "Powr";
    static deserialize(rawCommand: Buffer): PowerStatusCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=PowerStatusCommand.d.ts.map