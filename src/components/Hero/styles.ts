import styled, { css, keyframes } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as FullSectionStyles from 'components/FullSection/styles'
import media from 'styled-media-query'

const pulse = keyframes`
    0% {
      transform: scaleY(1);
      transform-origin: 50% 50%;
    }

    50% {
      transform: scaleY(.9);
      transform-origin: left bottom;
    }

    100% {
      transform: scaleY(1);
      transform-origin: 50% 50%;
    }
`
const items = 51
const duration = 4

function template(i: number, items: number, duration: number) {
  return `
      .line_${i + 1} {
        animation-delay: ${`${(duration / items) * i}s`};
       }
    `
}

function getAnimations(items: number, duration: number) {
  let str = ''
  for (let i = 0; i < items; i += 1) {
    str += template(i, items, duration)
  }
  return str
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    ${FullSectionStyles.Wrapper} {
      svg {
        width: ${theme.font.sizes.xxlarge};
        z-index: ${theme.layers.base};
        color: white;
        cursor: pointer;
        position: absolute;
        bottom: 10vh;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        iframe {
          width: calc(${theme.grid.collumn}*4);
          ${media.lessThan('medium')`
            width: 90%;
          `}
        }
      }
    }
    ${HeadingStyles.Wrapper} {
      width: 80%;
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.medium};
      ${media.greaterThan('medium')`
        width: 40%;
        font-size: ${theme.font.sizes.large};
        line-height: ${theme.spacings.xxlarge};
      `}
      text-align: center;
      position: relative;
      z-index: ${theme.layers.base};
    }

    .detail{
      ${media.between('medium', 'large')`
        ${HeadingStyles.Wrapper} {
          font-weight: ${theme.font.normal};
          font-size: ${theme.font.sizes.medium};
          line-height: ${theme.spacings.medium};
        }
      `}

      ${media.greaterThan('medium')`
        ${HeadingStyles.Wrapper} {
          font-weight: ${theme.font.normal};
          font-size: ${theme.font.sizes.medium};
          line-height: ${theme.spacings.medium};
        }
      `}

      ${media.lessThan('medium')`
        ${HeadingStyles.Wrapper} {
          font-weight: ${theme.font.normal};
          font-size: ${theme.font.sizes.small};
          line-height: ${theme.spacings.small};
        }
        `}
      }
  }

  `}
`
export const AnimatedBg = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: ${theme.layers.zero};

    svg {
      fill: ${theme.colors.black};
      opacity: 0.5;
      margin: 0 10px;
      ${media.lessThan('medium')`
        height: auto;
        width: 100%;
        &:first-child {display: block;}
        &.no-mobile{display:none;}
      `}
      ${media.greaterThan('medium')`
        width: 25%;
        margin: 0 5px;
        display: block;
      `}
    }

    /* .path {
      animation: ${pulse} ${duration}s infinite;
    }

    ${getAnimations(items, duration)} */
  `}
`
