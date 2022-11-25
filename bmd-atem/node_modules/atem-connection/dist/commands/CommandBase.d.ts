/// <reference types="node" />
import { AtemState } from '../state';
import { ProtocolVersion } from '../enums';
export interface IDeserializedCommand {
    properties: any;
    applyToState(state: AtemState): string | string[];
}
/** Base type for a receivable command */
export declare abstract class DeserializedCommand<T> implements IDeserializedCommand {
    static readonly rawName?: string;
    static readonly minimumVersion?: ProtocolVersion;
    readonly properties: Readonly<T>;
    constructor(properties: T);
    abstract applyToState(state: AtemState): string | string[];
}
export interface ISerializableCommand {
    serialize(version: ProtocolVersion): Buffer;
}
/** Base command type for a simple writable command, which has a few values which must all be sent */
export declare abstract class BasicWritableCommand<T> implements ISerializableCommand {
    static readonly rawName?: string;
    static readonly minimumVersion?: ProtocolVersion;
    protected _properties: T;
    get properties(): Readonly<T>;
    constructor(properties: T);
    abstract serialize(version: ProtocolVersion): Buffer;
}
/** Base command type for a full writable command, which uses flags to indicate the changed properties */
export declare abstract class WritableCommand<T> extends BasicWritableCommand<Partial<T>> {
    static readonly MaskFlags?: {
        [key: string]: number;
    };
    flag: number;
    constructor();
    /** Update the values of some properties with this command */
    updateProps(newProps: Partial<T>): boolean;
    protected _updateProps(newProps: {
        [key: string]: any;
    }): boolean;
}
/** Base command type for a command which gets sent in both directions */
export declare abstract class SymmetricalCommand<T> extends DeserializedCommand<T> implements ISerializableCommand {
    abstract serialize(version: ProtocolVersion): Buffer;
}
//# sourceMappingURL=CommandBase.d.ts.map