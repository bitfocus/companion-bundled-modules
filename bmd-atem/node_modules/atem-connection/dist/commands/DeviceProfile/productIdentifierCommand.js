"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductIdentifierCommand = void 0;
const CommandBase_1 = require("../CommandBase");
const Util = require("../../lib/atemUtil");
const __1 = require("../..");
class ProductIdentifierCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            productIdentifier: Util.bufToNullTerminatedString(rawCommand, 0, 40),
            model: rawCommand.readUInt8(40),
        };
        return new ProductIdentifierCommand(properties);
    }
    applyToState(state) {
        state.info.productIdentifier = this.properties.productIdentifier;
        state.info.model = this.properties.model;
        // Model specific features that aren't specified by the protocol
        switch (state.info.model) {
            case __1.Enums.Model.TwoME:
            case __1.Enums.Model.TwoME4K:
            case __1.Enums.Model.TwoMEBS4K:
            case __1.Enums.Model.Constellation:
            case __1.Enums.Model.Constellation8K:
            case __1.Enums.Model.ConstellationHD4ME:
            case __1.Enums.Model.Constellation4K4ME:
                state.info.power = [false, false];
                break;
            default:
                state.info.power = [false];
                break;
        }
        return `info`;
    }
}
exports.ProductIdentifierCommand = ProductIdentifierCommand;
ProductIdentifierCommand.rawName = '_pin';
//# sourceMappingURL=productIdentifierCommand.js.map