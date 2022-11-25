import { ProtocolVersion } from '../enums';
declare type CommandConstructor = any;
export declare class CommandParser {
    readonly commands: {
        [key: string]: Array<CommandConstructor>;
    };
    version: ProtocolVersion;
    constructor();
    commandFromRawName(name: string): CommandConstructor | undefined;
}
export {};
//# sourceMappingURL=atemCommandParser.d.ts.map