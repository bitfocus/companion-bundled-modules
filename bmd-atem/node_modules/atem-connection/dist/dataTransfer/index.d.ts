/// <reference types="node" />
import { IDeserializedCommand, ISerializableCommand } from '../commands/CommandBase';
export interface UploadStillEncodingOptions {
    disableRLE?: boolean;
}
export declare class DataTransferManager {
    #private;
    private interval?;
    private exitUnsubscribe?;
    constructor(rawSendCommands: (cmds: ISerializableCommand[]) => Array<Promise<void>>);
    private get allLocks();
    /**
     * Start sending of commands
     * This is called once the connection has received the initial state data
     */
    startCommandSending(skipUnlockAll?: boolean): void;
    /**
     * Stop sending of commands
     * This is called once the connection is disconnected
     */
    stopCommandSending(): void;
    /**
     * Queue the handling of a received command
     * We do it via a queue as some of the handlers need to be async, and we don't want to block state updates from happening in parallel
     */
    queueHandleCommand(command: IDeserializedCommand): void;
    uploadStill(index: number, data: Buffer, name: string, description: string, options?: UploadStillEncodingOptions): Promise<void>;
    uploadClip(index: number, data: Iterable<Buffer> | AsyncIterable<Buffer>, name: string, options?: UploadStillEncodingOptions): Promise<void>;
    uploadAudio(index: number, data: Buffer, name: string): Promise<void>;
    downloadMacro(index: number): Promise<Buffer>;
    uploadMacro(index: number, data: Buffer, name: string): Promise<void>;
    uploadMultiViewerLabel(index: number, data: Buffer): Promise<void>;
    private getClipLock;
}
//# sourceMappingURL=index.d.ts.map