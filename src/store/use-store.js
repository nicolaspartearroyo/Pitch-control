import create from 'zustand'

export const useStore = create (
    (set) => ({
        // load
        'isLoaded': false,
        'setIsLoaded': (v) => set (() => ({ 'isLoaded': v })),
        // play-pause
        'isPlaying': false,
        'togglePlayPause': () => set ((s) => ({ 'isPlaying': !s.isPlaying })),
        'play': () => set (() => ({ 'isPlaying': true })),
        'pause': () => set (() => ({ 'isPlaying': false })),
        // repeat
        'isRepeat': true,
        'toggleRepeat': () => set ((s) => ({ 'isRepeat': !s.isRepeat })),
        // volume
        'volume': 1,
        'setVolume': (newVolume) => set ({
            'volume': parseFloat (newVolume),
        }),
        // speed
        'speed': 1,
        'setSpeed': (newSpeed) => set (
            () => {

                let speed = parseFloat (newSpeed)

                if (newSpeed < 0.5) speed = 0.5

                if (newSpeed > 1.5) speed = 1.5

                return { speed }
            
            },
        ),
        // audio title
        'audioTitle': undefined,
        'setAudioTitle': (newAudioTitle) => set ({
            'audioTitle': newAudioTitle.toString (),
        }),
    }),
)