import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    max-width: 20em;
    transform: translateX(0.5em);
`

export const ImageContainer = styled.div`
    position: relative;
    height: 10em;
    width: 4em;

    > div {
        transform: translate3d(1em, -0.9em, 0);

        @media screen and (max-width: ${Breakpoints.tablet - 1}px) {
            transform: translate3d(0, -0.9em, 0);
        }
    }
`

export const TextContainer = styled.div`
    text-align: left;
    height: 107px;
    width: 120px;
    align-self: flex-end;

    > h2 {
        height: 3em;
    }

    > div {
        height: 40px;
        font-size: 0.8em;
    }
`

export const TextLink = styled.a`
    font-weight: 600;
    color: ${(props) => props.theme.highlight};
    border-bottom: 0.15em solid ${(props) => props.theme.highlight};
`