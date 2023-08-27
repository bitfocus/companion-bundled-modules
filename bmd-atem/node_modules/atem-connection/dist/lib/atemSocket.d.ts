import { EventEmitter } from 'eventemitter3';
import { ISerializableCommand, IDeserializedCommand } from '../commands';
export interface AtemSocketOptions {
    address: string;
    port: number;
    debugBuffers: boolean;
    disableMultithreaded: boolean;
    childProcessTimeout: number;
}
export declare type AtemSocketEvents = {
    disconnect: [];
    info: [string];
    debug: [string];
    error: [string];
    commandsReceived: [IDeserializedCommand[]];
    commandsAck: [number[]];
};
export declare class AtemSocket extends EventEmitter<AtemSocketEvents> {
    private readonly _debugBuffers;
    private readonly _disableMultithreaded;
    private readonly _childProcessTimeout;
    private readonly _commandParser;
    private _nextCommandTrackingId;
    private _isDisconnecting;
    private _address;
    private _port;
    private _socketProcess;
    private _creatingSocket;
    private _exitUnsubscribe?;
    constructor(options: AtemSocketOptions);
    connect(address?: string, port?: number): Promise<void>;
    destroy(): Promise<void>;
    disconnect(): Promise<void>;
    get nextCommandTrackingId(): number;
    sendCommands(commands: Array<{
        rawCommand: ISerializableCommand;
        trackingId: number;
    }>): Promise<void>;
    private _createSocketProcess;
    private _parseCommands;
}
//# sourceMappingURL=atemSocket.d.ts.map