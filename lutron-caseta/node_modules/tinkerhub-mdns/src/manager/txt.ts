const BACKTICK = 96;
const EQUALS = 61;

export interface TXTKeyValue {
	key: string;
	value: string | boolean;
}

export function decodeTXT(buffer: Buffer, offset=0, length=buffer.length): TXTKeyValue | null {

	// Attempt to detect RFC-1464 records
	let o = offset;
	let quoted = false;
	let readingValue = false;

	const key: string[] = [];
	const value: string[] = [];

	while(o < length) {
		const v = buffer[o];
		if(quoted) {
			if(v === BACKTICK) {
				key.push('`');
			} else if(v === EQUALS) {
				key.push('=');
			} else {
				// Assume malformed key and push both backtick and value
				key.push('`');
				key.push(String.fromCharCode(v));
			}

			quoted = false;
		} else {
			if(readingValue) {
				value.push(String.fromCharCode(v));
			} else {
				if(v === BACKTICK) {
					quoted = true;
				} else if(v === EQUALS) {
					readingValue = true;
				} else {
					key.push(String.fromCharCode(v));
				}
			}
		}

		o++;
	}

	if(key.length === 0) return null;

	const keyString = key.join('').toLowerCase();
	if(value.length === 0) {
		return {
			key: keyString,
			value: true
		};
	} else {
		return {
			key: keyString,
			value: value.join('')
		};
	}
}
