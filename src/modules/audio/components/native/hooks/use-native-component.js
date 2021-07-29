import React, { useRef } from 'react'
import { useNativePlaybackRate } from './use-native-playback-rate'
import { useNativeLoop } from './use-native-loop'
import { useNativePitch } from './use-native-pitch'
import { useNativeVolume } from './use-native-volume'
import { useNativeLoad } from './use-native-load'
import { useNativePlayPause } from './use-native-play-pause'

/**
 * @param {string} url audio url
 * @typedef {React.Ref} Ref
 * @typedef {boolean} Autoplay
 * @returns {{Ref, Autoplay}} audio attributes
 */
export function useNativeComponent (url) {

    const ref = useRef (null)

    useNativeLoad (ref, url)

    useNativeLoop (ref)

    useNativePitch (ref)

    useNativePlaybackRate (ref)

    useNativeVolume (ref)

    useNativePlayPause (ref.current)

    return { ref }

}
