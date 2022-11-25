/// <reference types="node" />
import { DeserializedCommand } from '../CommandBase';
import { AtemState } from '../../state';
import { DeviceInfo } from '../../state/info';
export declare class ProductIdentifierCommand extends DeserializedCommand<Pick<DeviceInfo, 'model' | 'productIdentifier'>> {
    static readonly rawName = "_pin";
    static deserialize(rawCommand: Buffer): ProductIdentifierCommand;
    applyToState(state: AtemState): string;
}
//# sourceMappingURL=productIdentifierCommand.d.ts.map