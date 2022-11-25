import { IDeserializedCommand, ISerializableCommand } from '../commands/CommandBase';
export declare enum DataTransferState {
    /** Waiting for strt */
    Pending = 0,
    /** Started, waiting for first response */
    Ready = 1,
    /** In progress */
    Transferring = 2,
    /** Finished */
    Finished = 3
}
export declare abstract class DataTransfer<T> {
    #private;
    protected resolvePromise: (value: T | PromiseLike<T>) => void;
    protected rejectPromise: (reason?: any) => void;
    constructor();
    /** Get the promise that will resolve upon completion/failure of the transfer */
    get promise(): Promise<T>;
    /** Start the transfer */
    abstract startTransfer(transferId: number): Promise<ProgressTransferResult>;
    /** Restart the current transfer */
    restartTransfer(transferId: number): Promise<ProgressTransferResult>;
    /** Handle a received command that is for the transfer */
    abstract handleCommand(command: IDeserializedCommand, oldState: DataTransferState): Promise<ProgressTransferResult>;
    /** The current transfer has been aborted and should report failure */
    abort(reason: Error): void;
}
export interface ProgressTransferResult {
    newState: DataTransferState;
    commands: ISerializableCommand[];
    newId?: number;
}
//# sourceMappingURL=dataTransfer.d.ts.map