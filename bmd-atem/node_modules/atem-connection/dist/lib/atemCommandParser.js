"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandParser = void 0;
const Commands = require("../commands");
const enums_1 = require("../enums");
class CommandParser {
    constructor() {
        this.commands = {};
        this.version = enums_1.ProtocolVersion.V7_2; // Default to the minimum supported
        for (const cmd in Commands) {
            try {
                const cmdConstructor = Commands[cmd];
                const rawName = cmdConstructor.rawName;
                if (rawName) {
                    if (!this.commands[rawName])
                        this.commands[rawName] = [];
                    this.commands[rawName].push(cmdConstructor);
                }
            }
            catch (e) {
                // probably not a valid command
            }
        }
    }
    commandFromRawName(name) {
        const commands = this.commands[name];
        if (commands) {
            if (!this.version) {
                // edge case for the version command itself:
                return commands[0];
            }
            else {
                // now we should have a version defined
                const baseline = commands.find((cmd) => !cmd.minimumVersion);
                const overrides = commands.filter((cmd) => cmd.minimumVersion && cmd.minimumVersion <= this.version);
                if (overrides.length === 0)
                    return baseline;
                let highestProtoCommand = overrides[0];
                for (const cmd of overrides) {
                    // find highest version in overrides
                    if (highestProtoCommand.minimumVersion &&
                        cmd.minimumVersion &&
                        cmd.minimumVersion > highestProtoCommand.minimumVersion) {
                        highestProtoCommand = cmd;
                    }
                }
                return highestProtoCommand;
            }
        }
        return undefined;
    }
}
exports.CommandParser = CommandParser;
//# sourceMappingURL=atemCommandParser.js.map