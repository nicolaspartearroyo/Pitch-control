import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { IndicatorsComponent } from '../../components/indicators/indicators.component'
import { LoadingComponent } from '../../components/loading/loading.component'
import { MetaComponent } from '../../components/meta/meta.component'
import { PlayerSpeedComponent } from '../../components/player-speed/player-speed.component'
import { DefaultLayout } from '../default/default.layout'
import { AudioModule } from '../../modules/audio/audio.module'
import { PlayerModule } from '../../modules/player/player.module'
import { useStore } from '../../store/use-store'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired,
}

/**
 * @param {object} props props
 * @param {string} props.title audio title
 * @param {string} props.image audio thumbnail url
 * @param {string} props.url audio url
 * @param {number} props.speed audio initial speed
 * @returns {React.ReactElement} react component
 */
export function PlayerLayout ({
    title,
    image,
    url,
    speed,
}) {

    const router = useRouter ()
    const isLoaded = useStore ((state) => state.isLoaded)
    const setIsLoaded = useStore ((state) => state.setIsLoaded)
    const setSpeed = useStore ((state) => state.setSpeed)
    const setSeek = useStore ((state) => state.setSeek)
    const setProgress = useStore ((state) => state.setProgress)
    const setAudioTitle = useStore ((state) => state.setAudioTitle)
    const [description] = useState (`${title} - ${speed} - YouTube - ScrewMyCode.In`)

    useEffect (() => setSpeed (speed), [setSpeed, speed])

    useEffect (() => setAudioTitle (title), [setAudioTitle, title])

    useEffect (() => setSeek (0), [setSeek])

    useEffect (() => setProgress (0), [setProgress])

    useEffect (() => setIsLoaded (false), [setIsLoaded])

    return (
        <>
            <Head>
                <title>{description}</title>
            </Head>
            <MetaComponent
                customTitle
                description={description}
                image={image}
                url={'https://www.screwmycode.in' + router.asPath}
            />
            <DefaultLayout customMeta>
                <AudioModule url={url}/>
                {!isLoaded
                    ? <>
                        <LoadingComponent/>
                    </>
                    : <>
                        <PlayerModule/>
                        <IndicatorsComponent/>
                        <PlayerSpeedComponent/>
                    </>
                }
            </DefaultLayout>
        </>
    )

}

PlayerLayout.propTypes = propTypes