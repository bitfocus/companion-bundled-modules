/// <reference types="node" />
import { FontFace } from '@julusian/freetype2';
import { Model } from '../enums';
import { AtemState } from '../state';
export interface GenerateMultiviewerLabelProps {
    HD1080: boolean;
    HD720: boolean;
    UHD4K: boolean;
    UHD8K: boolean;
}
/**
 * Generate a label for the multiviewer at multiple resolutions
 * @param face freetype2.FontFace to draw with
 * @param str String to write
 * @param props Specify which resolutions to generate for
 * @returns Buffer
 */
export declare function generateMultiviewerLabel(face: FontFace, fontScale: number, str: string, props: GenerateMultiviewerLabelProps): Buffer;
/**
 * Determine which resolutions should be included in the multiview label drawing
 * @param state Current device state
 * @returns Properties to draw with, or null if they could not be determined
 */
export declare function calculateGenerateMultiviewerLabelProps(state: Readonly<Pick<AtemState, 'info'>> | null): GenerateMultiviewerLabelProps | null;
/**
 * Load a font file to freetype2
 * @param fontPath Path to file
 */
export declare function loadFont(fontPath?: string): Promise<FontFace>;
export declare function hasInternalMultiviewerLabelGeneration(modelId: Model): boolean;
//# sourceMappingURL=multiviewLabel.d.ts.map