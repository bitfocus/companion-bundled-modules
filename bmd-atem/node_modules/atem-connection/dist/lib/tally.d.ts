import { AtemState } from '../state';
/**
 * Emulates the ATEM's own tally logic as it appears
 * in the ATEM multiviewer.
 *
 * Useful for any code which needs a full list of all
 * sources present in Preview and/or Program.
 */
export declare function listVisibleInputs(mode: 'program' | 'preview', state: AtemState, me?: number): number[];
//# sourceMappingURL=tally.d.ts.map