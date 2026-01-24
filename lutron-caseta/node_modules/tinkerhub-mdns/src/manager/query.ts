import { AddressInfo } from 'dgram';

import { AbstractPacket } from './abstract-packet';
import { Record } from './records';

export interface Question {
	name: string;

	type: string;

	class?: string;
}

export class MDNSQuery extends AbstractPacket {
	public readonly questions: Question[];

	constructor(
		questions: Question[],
		answers: Record[]=[],
		additionals: Record[]=[]
	) {
		super(answers, additionals);

		this.questions = questions;
	}
}
