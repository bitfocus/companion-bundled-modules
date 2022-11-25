"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockStateUpdateCommand = exports.LockStateCommand = void 0;
const CommandBase_1 = require("../CommandBase");
class LockStateCommand extends CommandBase_1.BasicWritableCommand {
    constructor(index, locked) {
        super({ index, locked });
    }
    serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.index, 0);
        buffer.writeUInt8(this.properties.locked ? 1 : 0, 2);
        return buffer;
    }
}
exports.LockStateCommand = LockStateCommand;
LockStateCommand.rawName = 'LOCK';
class LockStateUpdateCommand extends CommandBase_1.DeserializedCommand {
    static deserialize(rawCommand) {
        const properties = {
            index: rawCommand.readUInt16BE(0),
            locked: rawCommand.readUInt8(2) === 1,
        };
        return new LockStateUpdateCommand(properties);
    }
    applyToState() {
        // Nothing to do
        return [];
    }
}
exports.LockStateUpdateCommand = LockStateUpdateCommand;
LockStateUpdateCommand.rawName = 'LKST';
//# sourceMappingURL=LockStateCommand.js.map