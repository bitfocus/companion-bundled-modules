import { Record } from '../manager';

/**
 * Helper class for keeping a handle to a record.
 */
export class RecordHandle<T extends Record> {
	private readonly onSet: (record: T) => void;
	private readonly onRemove: (record: T) => void;

	private _record?: T;

	constructor(onSet: (record: T) => void, onRemove: (record: T) => void) {
		this.onSet = onSet;
		this.onRemove = onRemove;
	}

	get record(): T | null {
		return this._record || null;
	}

	public update(v: T | null): void {
		if(this._record === v) return;

		if(this._record) {
			this.onRemove(this._record);
		}

		this._record = v || undefined;

		if(v) {
			this.onSet(v);
		}
	}
}

