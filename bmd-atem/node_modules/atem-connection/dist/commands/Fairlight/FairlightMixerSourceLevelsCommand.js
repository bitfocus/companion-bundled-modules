"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerSourceLevelsUpdateCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerSourceLevelsUpdateCommand extends CommandBase_1.DeserializedCommand {
    constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
    }
    static deserialize(rawCommand) {
        const source = rawCommand.readBigInt64BE(0);
        const index = rawCommand.readUInt16BE(8);
        const properties = {
            inputLeftLevel: rawCommand.readInt16BE(10),
            inputRightLevel: rawCommand.readInt16BE(12),
            inputLeftPeak: rawCommand.readInt16BE(14),
            inputRightPeak: rawCommand.readInt16BE(16),
            expanderGainReduction: rawCommand.readInt16BE(18),
            compressorGainReduction: rawCommand.readInt16BE(20),
            limiterGainReduction: rawCommand.readInt16BE(22),
            outputLeftLevel: rawCommand.readInt16BE(24),
            outputRightLevel: rawCommand.readInt16BE(26),
            outputLeftPeak: rawCommand.readInt16BE(28),
            outputRightPeak: rawCommand.readInt16BE(30),
            leftLevel: rawCommand.readInt16BE(32),
            rightLevel: rawCommand.readInt16BE(34),
            leftPeak: rawCommand.readInt16BE(36),
            rightPeak: rawCommand.readInt16BE(38),
        };
        return new FairlightMixerSourceLevelsUpdateCommand(index, source, properties);
    }
    applyToState() {
        // Not stored in the state
        return [];
    }
}
exports.FairlightMixerSourceLevelsUpdateCommand = FairlightMixerSourceLevelsUpdateCommand;
FairlightMixerSourceLevelsUpdateCommand.rawName = 'FMLv';
//# sourceMappingURL=FairlightMixerSourceLevelsCommand.js.map