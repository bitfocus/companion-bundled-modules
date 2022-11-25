"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixEffectBlockConfigCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class MixEffectBlockConfigCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, properties) {
        super(properties);
        this.index = index;
    }
    static deserialize(rawCommand) {
        return new MixEffectBlockConfigCommand(rawCommand.readUInt8(0), { keyCount: rawCommand.readUInt8(1) });
    }
    applyToState(state) {
        state.info.mixEffects[this.index] = this.properties;
        return `info.mixEffects`;
    }
}
exports.MixEffectBlockConfigCommand = MixEffectBlockConfigCommand;
MixEffectBlockConfigCommand.rawName = '_MeC';
//# sourceMappingURL=mixEffectBlockConfigCommand.js.map