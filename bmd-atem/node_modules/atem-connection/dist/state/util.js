"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpstreamKeyer = exports.getDownstreamKeyer = exports.getSuperSource = exports.getMixEffect = exports.getClip = exports.getMediaPlayer = exports.getMultiViewer = exports.Create = void 0;
const Enums = require("../enums");
function Create() {
    return {
        info: {
            apiVersion: 0,
            model: Enums.Model.Unknown,
            superSources: [],
            mixEffects: [],
            power: [],
        },
        video: {
            mixEffects: [],
            downstreamKeyers: [],
            auxilliaries: [],
            superSources: [],
        },
        media: {
            stillPool: [],
            clipPool: [],
            players: [],
        },
        inputs: {},
        macro: {
            macroPlayer: {
                isRunning: false,
                isWaiting: false,
                loop: false,
                macroIndex: 0,
            },
            macroRecorder: {
                isRecording: false,
                macroIndex: 0,
            },
            macroProperties: [],
        },
        settings: {
            multiViewers: [],
            videoMode: 0,
            mediaPool: undefined,
        },
    };
}
exports.Create = Create;
function getMultiViewer(state, index) {
    const multiViewer = state.settings.multiViewers[index];
    if (!multiViewer) {
        return (state.settings.multiViewers[index] = { index, windows: [] });
    }
    return multiViewer;
}
exports.getMultiViewer = getMultiViewer;
function getMediaPlayer(state, index, dontCreate) {
    let player = state.media.players[index];
    if (!player) {
        player = {
            playing: false,
            loop: false,
            atBeginning: true,
            clipFrame: 0,
            sourceType: Enums.MediaSourceType.Still,
            clipIndex: 0,
            stillIndex: 0,
        };
        if (!dontCreate) {
            state.media.players[index] = player;
        }
    }
    return player;
}
exports.getMediaPlayer = getMediaPlayer;
function getClip(state, index) {
    const clip = state.media.clipPool[index];
    if (!clip) {
        return (state.media.clipPool[index] = {
            isUsed: false,
            name: '',
            frameCount: 0,
            frames: [],
        });
    }
    return clip;
}
exports.getClip = getClip;
function getMixEffect(state, index, dontCreate) {
    let me = state.video.mixEffects[index];
    if (!me) {
        me = {
            index,
            programInput: 0,
            previewInput: 0,
            transitionPreview: false,
            transitionPosition: {
                inTransition: false,
                handlePosition: 0,
                remainingFrames: 0,
            },
            transitionProperties: {
                style: Enums.TransitionStyle.MIX,
                selection: [Enums.TransitionSelection.Background],
                nextStyle: Enums.TransitionStyle.MIX,
                nextSelection: [Enums.TransitionSelection.Background],
            },
            transitionSettings: {},
            upstreamKeyers: [],
        };
        if (!dontCreate) {
            state.video.mixEffects[index] = me;
        }
    }
    return me;
}
exports.getMixEffect = getMixEffect;
function getSuperSource(state, index, dontCreate) {
    let ssrc = state.video.superSources[index];
    if (!ssrc) {
        ssrc = {
            index,
            boxes: [undefined, undefined, undefined, undefined],
        };
        if (!dontCreate) {
            state.video.superSources[index] = ssrc;
        }
    }
    return ssrc;
}
exports.getSuperSource = getSuperSource;
function getDownstreamKeyer(state, index, dontCreate) {
    let dsk = state.video.downstreamKeyers[index];
    if (!dsk) {
        dsk = {
            isAuto: false,
            remainingFrames: 0,
            onAir: false,
            inTransition: false,
        };
        if (!dontCreate) {
            state.video.downstreamKeyers[index] = dsk;
        }
    }
    return dsk;
}
exports.getDownstreamKeyer = getDownstreamKeyer;
function getUpstreamKeyer(mixEffect, index, dontCreate) {
    let usk = mixEffect.upstreamKeyers[index];
    if (!usk) {
        usk = {
            canFlyKey: false,
            upstreamKeyerId: index,
            mixEffectKeyType: 0,
            cutSource: 0,
            fillSource: 0,
            onAir: false,
            flyEnabled: false,
            flyKeyframes: [undefined, undefined],
            maskSettings: {
                maskEnabled: false,
                maskTop: 0,
                maskBottom: 0,
                maskLeft: 0,
                maskRight: 0,
            },
        };
        if (!dontCreate) {
            mixEffect.upstreamKeyers[index] = usk;
        }
    }
    return usk;
}
exports.getUpstreamKeyer = getUpstreamKeyer;
//# sourceMappingURL=util.js.map