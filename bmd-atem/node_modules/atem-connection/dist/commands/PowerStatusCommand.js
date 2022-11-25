"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerStatusCommand = void 0;
const CommandBase_1 = require("./CommandBase");
/**
 * This command gets the power status from the Atem. As defined in
 * DeviceProfile/productIdentifierCommand.ts the 2ME, 2ME 4K and the
 * Broadcast Studio have 2 power supplies. All other models have 1.
 */
class PowerStatusCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = [Boolean(rawCommand.readUInt8(0) & (1 << 0)), Boolean(rawCommand.readUInt8(0) & (1 << 1))];
        return new PowerStatusCommand(properties);
    }
    applyToState(state) {
        const count = state.info.power.length;
        state.info.power = this.properties.slice(0, count);
        return `info.power`;
    }
}
exports.PowerStatusCommand = PowerStatusCommand;
PowerStatusCommand.rawName = 'Powr';
//# sourceMappingURL=PowerStatusCommand.js.map