"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterEqualizerResetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMasterEqualizerResetCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.equalizer ? 1 : 0, 1);
        buffer.writeUInt8(this.properties.band || 0, 2);
        return buffer;
    }
}
exports.FairlightMixerMasterEqualizerResetCommand = FairlightMixerMasterEqualizerResetCommand;
FairlightMixerMasterEqualizerResetCommand.MaskFlags = {
    equalizer: 1 << 0,
    band: 1 << 1,
};
FairlightMixerMasterEqualizerResetCommand.rawName = 'RMOE';
//# sourceMappingURL=FairlightMixerMasterEqualizerResetCommand.js.map