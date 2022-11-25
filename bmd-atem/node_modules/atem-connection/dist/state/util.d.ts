import { AtemState } from '.';
import { MultiViewer } from './settings';
import { MediaPlayerState, ClipBank } from './media';
import { MixEffect, SuperSource, DSK, USK } from './video';
export declare function Create(): AtemState;
export declare function getMultiViewer(state: AtemState, index: number): MultiViewer;
export declare function getMediaPlayer(state: AtemState, index: number, dontCreate?: boolean): MediaPlayerState;
export declare function getClip(state: AtemState, index: number): ClipBank;
export declare function getMixEffect(state: AtemState, index: number, dontCreate?: boolean): MixEffect;
export declare function getSuperSource(state: AtemState, index: number, dontCreate?: boolean): SuperSource.SuperSource;
export declare function getDownstreamKeyer(state: AtemState, index: number, dontCreate?: boolean): DSK.DownstreamKeyer;
export declare function getUpstreamKeyer(mixEffect: MixEffect, index: number, dontCreate?: boolean): USK.UpstreamKeyer;
//# sourceMappingURL=util.d.ts.map