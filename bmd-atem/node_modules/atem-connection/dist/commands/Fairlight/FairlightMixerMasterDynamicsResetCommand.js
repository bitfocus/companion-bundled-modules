"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairlightMixerMasterDynamicsResetCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class FairlightMixerMasterDynamicsResetCommand extends CommandBase_1.WritableCommand {
    serialize() {
        const buffer = Buffer.alloc(4);
        let val = 0;
        if (this.properties.dynamics) {
            val |= 1 << 0;
        }
        if (this.properties.expander) {
            val |= 1 << 1;
        }
        if (this.properties.compressor) {
            val |= 1 << 2;
        }
        if (this.properties.limiter) {
            val |= 1 << 3;
        }
        buffer.writeUInt8(val, 1);
        return buffer;
    }
}
exports.FairlightMixerMasterDynamicsResetCommand = FairlightMixerMasterDynamicsResetCommand;
FairlightMixerMasterDynamicsResetCommand.rawName = 'RMOD';
//# sourceMappingURL=FairlightMixerMasterDynamicsResetCommand.js.map