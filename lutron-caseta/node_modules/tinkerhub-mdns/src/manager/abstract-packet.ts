import { Record } from './records';

export class AbstractPacket {
	public readonly answers: Record[];
	public readonly additionals: Record[];

	constructor(
		answers: Record[],
		additionals: Record[] = []
	) {
		this.answers = answers;
		this.additionals = additionals;
	}

	get mergedRecords(): Record[] {
		return [ ...this.answers, ...this.additionals ];
	}
}
