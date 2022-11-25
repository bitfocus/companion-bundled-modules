import { DeserializedCommand } from './CommandBase';
export declare class InitCompleteCommand extends DeserializedCommand<null> {
    static readonly rawName = "InCm";
    constructor();
    static deserialize(): InitCompleteCommand;
    applyToState(): string;
}
//# sourceMappingURL=InitCompleteCommand.d.ts.map