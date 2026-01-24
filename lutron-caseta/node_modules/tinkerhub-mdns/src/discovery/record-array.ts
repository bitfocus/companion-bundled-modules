import { SubscriptionHandle } from 'atvik';
import { Record } from '../manager';

/**
 * Helper class for dealing with an array of records. Will subscribe/unsubscribe
 * the refresher function as needed.
 */
export class RecordArray<T extends Record> {
	private refresher: () => void;

	private _items: T[];
	private _handles: SubscriptionHandle[];

	constructor(refresher: () => void) {
		this.refresher = refresher;
		this._items = [];
		this._handles = [];
	}

	get items(): T[] {
		return this._items;
	}

	set items(v: T[]) {
		const records = [];
		const handles = [];
		const remainingHandles = new Set(this._handles);

		for(const record of v) {
			records.push(record);

			const idx = this._items.indexOf(record);
			if(idx < 0) {
				handles.push(
					record.onExpire(this.refresher)
				);
			} else {
				const handle = this._handles[idx];

				remainingHandles.delete(handle);
				handles.push(handle);
			}
		}

		for(const handle of remainingHandles) {
			handle.unsubscribe();
		}

		this._items = records;
		this._handles = handles;
	}
}
