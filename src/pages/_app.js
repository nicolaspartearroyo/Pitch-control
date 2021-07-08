/* eslint-disable jsdoc/require-jsdoc */
import React from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import LayoutComponent from '@/components/layout/layout.component'
import { ThemeStyles } from '@/styles/theme.styles'
import { GlobalStyles } from '@/styles/global.styles'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'
import { TitleData } from '@/data/title.data'

export default function MyApp ({ Component, pageProps, err }) {

    return (
        <>
            <RecoilRoot>
                <Helmet
                    htmlAttributes={{ 'lang': 'en' }}
                    title={TitleData}
                    meta={[
                        ...MetaData,
                    ]}
                />
                <GlobalStyles/>
                <ThemeProvider theme={ThemeStyles}>
                    <LayoutComponent>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        <Component {...pageProps} err={err}/>
                    </LayoutComponent>
                </ThemeProvider>
            </RecoilRoot>
        </>
    )

}