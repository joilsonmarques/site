import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '413px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
})

type BackdropProps = {
  src: string
}

type PodcastProps = {
  isOpen: boolean
}

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    width: 100vw;
    height: 100vh;
    min-height: 690px;
    background-color: ${theme.colors.darkPurple};
    overflow: hidden;
    padding: 0;
  `}
`

export const CallWrapper = styled.div<BackdropProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 100vh;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    padding-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-rows: 410px auto;
      justify-content: center;
      align-items: center;
    `}

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100vh;
      background-color: ${theme.colors.darkPurple};
      position: absolute;
      top: 0;
      opacity: 0.95;
      z-index: 0;
    }
  `}
`

export const Cover = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    margin-top: ${theme.spacings.medium};
    mask-repeat: no-repeat;
    mask-position: center;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 555 407'%3E%3Cdefs/%3E%3Cg fill='%23000' clip-path='url(%23clip0)'%3E%3Cpath d='M24.3484 166.5h-5.729v61.667h5.729V166.5zm9.3097-12.333h-5.729v80.166h5.729v-80.166zm9.3096-18.5h-5.7291v78.663h5.7291v-78.663zM5.72903 185H0v30.833h5.72903V185zm9.30967-6.167H9.30969v30.834h5.72901v-30.834zm37.2387 0h-5.7291v74h5.7291v-74zm9.3097-37H55.858v129.5h5.7291v-129.5zm9.3097 18.5h-5.7291v104.834h5.7291V160.333zM80.2065 185h-5.7291v49.333h5.7291V185zm27.9295-15.417h-5.73v74h5.73v-74zm-18.6198-33.916h-5.7291v74h5.7291v-74zM98.8258 111h-5.729v160.333h5.729V111zm18.6192-12.3334h-5.729V308.333h5.729V98.6666zm9.31 70.9164h-5.729v120.25h5.729v-120.25zm9.309-43.166h-5.729V286.75h5.729V126.417zm9.31-49.3336h-5.729V268.25h5.729V77.0834zm9.31-15.4168h-5.729V357.667h5.729V61.6666zm9.31 15.4168h-5.729V348.417h5.729V77.0834zm9.309 43.1666h-5.729v197.333h5.729V120.25zm9.31-64.75h-5.729v231.25h5.729V55.5zm9.31 18.5h-5.729v188.083h5.729V74zm9.309-24.6666h-5.729V370h5.729V49.3334zm9.31 12.3332h-5.729V317.583h5.729V61.6666zm9.31-37h-5.729V286.75h5.729V24.6666zm9.309 6.1668h-5.729V382.333h5.729V30.8334zM555 186.966h-5.729v16.226H555v-16.226zm-9.31-9.482h-5.729v34.726h5.729v-34.726zm-9.309-13.451h-5.729v34.726h5.729v-34.726zm-9.31-11.369h-5.729v74h5.729v-74zm-9.31 6.166h-5.729v53.226h5.729V158.83zm-279.29-97.1634h-5.729V317.583h5.729V61.6666zm9.31-43.1666h-5.729v382.333h5.729V18.5zm9.309 6.1666h-5.729V339.167h5.729V24.6666zm9.31-18.49997h-5.729V407h5.729V6.16663zM275.71 0h-5.729v336.083h5.729V0zm9.309 30.525h-5.729v328.876h5.729V30.525zm9.31-12.025H288.6v366.261h5.729V18.5zm9.31 47.2521h-5.729V400.486h5.729V65.7521zm9.309-31.4886h-5.729V370h5.729V34.2635zm9.31 28.7521h-5.729V383.759h5.729V63.0156zm9.31-5.126h-5.729V354.969h5.729V57.8896zm9.309-18.4615h-5.729V344.909h5.729V39.4281zm9.31 86.3719h-5.729v256.533h5.729V125.8zm9.31-12.642h-5.729v216.296h5.729V113.158zm9.309-100.8246h-5.729V362.215h5.729V12.3334zm9.31 48.0614h-5.729V346.451h5.729V60.3948zm9.31 33.6468h-5.729V363.833h5.729V94.0416zm9.31-53.5343h-5.73V348.686h5.73V40.5073zm9.309 5.7427h-5.729v234.333h5.729V46.25zm9.31 104.833h-5.729V305.25h5.729V151.083zm9.31-46.25h-5.729v171.549h5.729V104.833zm9.309 23.819h-5.729v166.77h5.729v-166.77zm9.31 19.078h-5.729V314.5h5.729V147.73zm9.31-5.897h-5.729V296h5.729V141.833zm9.309-24.666h-5.729v148h5.729v-148zm9.31 33.916h-5.729v148h5.729v-148zm9.309-37h-5.729v166.5h5.729v-166.5zm9.31 77.084h-5.729V277.5h5.729v-86.333zm9.31-20.389h-5.729v86.333h5.729v-86.333zm9.31-18.114h-5.729v86.333h5.729v-86.333z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h555v407H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    ${media.greaterThan('medium')`
      margin: 0 auto;
      height: 45vh;
      width: auto;
      max-width: 100%;
    `}
    ${media.greaterThan('huge')`
      top: ${theme.spacings.large};
    `}
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.containerMobile};
    padding: 0 ${theme.grid.gutter};
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto;
    grid-auto-flow: dense;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;

    div:last-child {
      display: grid;
      justify-content: end;
      margin-top: ${theme.spacings.medium};
    }

    div {
      position: relative;
    }

    ${HeadingStyles.Wrapper} {
      font-size: ${theme.font.sizes.large};
      text-align: center;
      margin-bottom: ${theme.spacings.medium};
      ${customMedia.lessThan('mobileL')`
        font-size: ${theme.font.sizes.medium};
      `}
    }
    p {
      padding-right: ${theme.grid.gutter};
      text-align: center;
      font-size: ${theme.font.sizes.xsmall};
      ${customMedia.lessThan('mobileL')`
        font-size: ${theme.font.sizes.xxsmall};
      `}
    }

    svg {
      color: ${theme.colors.white};
      height: 10vh;
      position: relative;
      bottom: 0.4rem;
      z-index: 1;
      cursor: pointer;
    }
    ${media.greaterThan('medium')`
      width: ${theme.grid.container};
      display: grid;
      grid-template-columns: calc(${theme.grid.collumn} * 7) ${theme.grid.collumn};
      column-gap: calc(${theme.grid.collumn} + ${theme.grid.gutter});
      grid-auto-flow: dense;
      justify-content: center;
      align-items: center;

      div:first-child {
        display: grid;
        justify-content: end;
        padding-left: calc(${theme.grid.collumn} * 2);
      }
      div:last-child{
        margin-top: 0;
      }

      ${HeadingStyles.Wrapper} {
        font-size: ${theme.font.sizes.large};
        margin-bottom: ${theme.spacings.medium};
      }
      p {
        text-align: left;
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.spacings.medium};
      }
    `}
    ${media.between('medium', 'large')`
      width: ${theme.grid.containerTablet};
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: dense;
      div:first-child {
        padding-left: 0;
      }
      ${HeadingStyles.Wrapper} {
        font-size: ${theme.font.sizes.large};
      }
      p{
        font-size: ${theme.font.sizes.small};
      }

    `}
  `}
`

export const PodcastWrapper = styled.div<PodcastProps>`
  ${({ theme, isOpen }) => css`
    padding: 0 ${theme.grid.collumn} 0 calc(${theme.grid.collumn}*2);
    ${media.lessThan('medium')`
      padding: 0;
      top: -4rem;
    `}
    display: flex;
    background-color: ${theme.colors.darkPurple};
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    transform: ${isOpen ? 'translateX(0)' : 'translateX(100vw)'};
    z-index: 1;
    opacity: ${isOpen ? 1 : 0};
    /* transform: translateX(0); */
    /* opacity: 0.8; */
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  `}
`
export const PodcastCover = styled.img`
  width: 28.8rem;
  ${media.lessThan('medium')`
    display: none;
  `}
  ${media.between('medium', 'large')`
    width: 22rem;
  `}
`

export const Podcast = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: ${theme.grid.containerMobile};
    padding: 0 ${theme.grid.gutter};
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
    justify-content: center;
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.large};
      ${customMedia.lessThan('mobileL')`
        font-size: ${theme.font.sizes.medium};
      `}
    }
    div {
      position: relative;
      /* border: 1px solid white; */
    }
    div.arrow-back {
      display: grid;
      justify-content: end;
    }
    p {
      font-size: ${theme.font.sizes.xsmall};
      ${customMedia.lessThan('mobileL')`
        font-size: ${theme.font.sizes.xxsmall};
      `}
    }
    iframe {
      position: relative;
      bottom: 0;
      margin-top: ${theme.spacings.medium};
    }

    a {
      display: inline-block;
      font-size: ${theme.font.sizes.xxxsmall};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
      text-transform: uppercase;
      border: 0.1rem solid ${theme.colors.white};
      margin: 0.5rem 0.3rem;
      padding: 0.5rem 1rem;
      text-decoration: none;
    }

    svg {
      position: relative;
      color: ${theme.colors.white};
      cursor: pointer;
      height: 10vh;
      top: 1rem;
      z-index: 1;
    }

    ${media.greaterThan('medium')`
      width: ${theme.grid.container};
      padding: 0;
      grid-template-columns: calc(${theme.grid.collumn} * 5) calc(
        ${theme.grid.collumn} * 2.4
      );
      column-gap: calc(${theme.grid.collumn} + ${theme.grid.gutter});
      div.arrow-back {
        grid-column: span 2;
      }
      p {
        font-size: ${theme.font.sizes.small};
        line-height: 2.1rem;
      }
      iframe {
        position: relative;
        width: 100%;
      }
      a {
        font-size: ${theme.font.sizes.xsmall};
        border: 0.2rem solid ${theme.colors.white};
        margin: 0 0.5rem 1rem;
        padding: 0.5rem 1rem;
      }
      svg {
        top: auto;
      }
    `}

    ${media.between('medium', 'large')`
      width: ${theme.grid.containerTablet};
      padding: 0;
      grid-template-columns: calc(${theme.grid.collumn} * 4) calc(
        ${theme.grid.collumn} * 2
      );
      column-gap: calc(${theme.grid.gutter} *2);
      div:last-child {
        grid-column: span 2;
        margin-top: 10vh;
      }
      p {
        font-size: ${theme.font.sizes.small};
        line-height: 2.1rem;
        padding: 1vh 0 3vh;
      }
      iframe {
        position: relative;
      }
      a {
        font-size: ${theme.font.sizes.xsmall};
        border: 0.2rem solid ${theme.colors.white};
        margin: 0 0.5rem 1rem;
        padding: 0.5rem 1rem;
      }
      svg {
        top: auto;
      }
    `}
  `}
`
