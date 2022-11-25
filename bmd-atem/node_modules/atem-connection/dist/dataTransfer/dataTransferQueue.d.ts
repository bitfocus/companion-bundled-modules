import { IDeserializedCommand, ISerializableCommand } from '../commands/CommandBase';
import { DataTransfer, DataTransferState, ProgressTransferResult } from './dataTransfer';
import { LockStateCommand } from '../commands/DataTransfer';
import PQueue from 'p-queue';
export interface ActiveTransfer {
    id: number;
    state: DataTransferState;
    job: DataTransfer<any>;
    queuedCommands: ISerializableCommand[];
}
export declare abstract class DataTransferQueueBase {
    protected readonly taskQueue: Array<DataTransfer<any>>;
    protected readonly nextTransferId: () => number;
    protected readonly handleCommandQueue: PQueue<import("p-queue/dist/priority-queue").default, import("p-queue").DefaultAddOptions>;
    protected activeTransfer: ActiveTransfer | undefined;
    constructor(nextTransferId: () => number);
    get currentTransferId(): number | null;
    /** Clear the pending queue, and abort any in-progress transfers */
    clearQueueAndAbort(reason: Error): void;
    /** Pop some queued commands from the active transfer */
    popQueuedCommands(maxCount: number): ISerializableCommand[] | null;
    /** Queue a transfer to be performed */
    enqueue<T>(transfer: DataTransfer<T>): Promise<T>;
    private dequeueAndRun;
    /**
     * Try and start the 'activeTransfer' if it is sat at pending
     * This is done in the queue, and calls back out to this.startTransfer
     */
    protected tryStartTransfer(): void;
    /**
     * Try and abort the 'activeTransfer' if there is one
     */
    tryAbortTransfer(reason: Error): void;
    protected abstract startTransfer(transfer: DataTransfer<any>, transferId: number): Promise<ProgressTransferResult>;
    protected abstract transferCompleted(): void;
    handleCommand(command: IDeserializedCommand): void;
}
export declare class DataTransferLockingQueue extends DataTransferQueueBase {
    #private;
    private isLocked;
    constructor(storeId: number, sendLockCommand: (cmd: LockStateCommand) => void, nextTransferId: () => number);
    protected startTransfer(transfer: DataTransfer<any>, transferId: number): Promise<ProgressTransferResult>;
    /** We have obtained the lock! */
    lockObtained(): void;
    /** The status of the lock has changed */
    updateLock(locked: boolean): void;
    protected transferCompleted(): void;
}
export declare class DataTransferSimpleQueue extends DataTransferQueueBase {
    protected startTransfer(transfer: DataTransfer<any>, transferId: number): Promise<ProgressTransferResult>;
    protected transferCompleted(): void;
}
//# sourceMappingURL=dataTransferQueue.d.ts.map