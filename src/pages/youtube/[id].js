// http://localhost:3000/youtube/gNUClEERcXI
// https://www.youtube.com/watch?v=gNUClEERcXI

import React from 'react'
import { IsYoutubeIdValidUtils } from '@/utils/is-youtube-id-valid.utils'
import IndicatorsComponent from '@/components/indicators/indicators.component'
import SliderComponent from '@/components/slider/slider.component'
import PlayerComponent from '@/components/player/player.component'
import axios from 'axios'
import Head from 'next/head'
import { TitleData } from '@/data/title.data'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'
import { StyledContainer, StyledTitle } from '../../pages-styles/youtube/[id].styles'

/**
 * @function
 * @name YoutubeIdPage
 * @description /youtube/:id
 * @param {*} props - react component props
 * @param {string} props.title - title corresponding to the current youtube id
 * @param {string} props.url - audio corresponding to the current youtube id
 * @returns {React.ReactNode} - react component
 */
export default function YoutubeIdPage ({ title, url }) {

    const windowTitle = `${title} - speed - ${TitleData}`

    return (
        <>
            <Head>
                <title>
                    {windowTitle}
                </title>
            </Head>
            <Helmet
                title={windowTitle}
                meta={[
                    ...MetaData,
                    {
                        'property': 'og:description',
                        'content': windowTitle,
                    },
                ]}
            />
            <StyledContainer>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <PlayerComponent url={url}/>
                <IndicatorsComponent/>
                <SliderComponent/>
            </StyledContainer>
        </>
    )

}

/**
 * @function
 * @name getServerSideProps
 * @description next.js convention
 * @param {*} context - next.js context
 * @returns {*} - props to feed the above component
 */
export async function getServerSideProps (context) {

    const { id } = context.params

    const redirectResponse = {
        'redirect': {
            'destination': '/',
            'permanent': false,
        },
    }

    if (!IsYoutubeIdValidUtils (id)) return redirectResponse

    const request = await axios.get (`https://api.screwmycode.in/youtube/${id}`)
    const { 'data': response } = request

    if (!response.success) return redirectResponse

    const { title, url } = response.data

    return {
        'props': {
            title,
            url,
        },
    }

}