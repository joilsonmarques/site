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
          height: 100px;
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
        width: 33%;
        margin: 0 5px;
        display: block;
      `}
    }
    /*
    .path {
      animation: ${pulse} ${duration}s infinite;
    }

    .line_1 {
      animation-delay: ${`${(duration / items) * 1}s`};
    }
    .line_2 {
      animation-delay: ${`${(duration / items) * 2}s`};
    }
    .line_4 {
      animation-delay: ${`${(duration / items) * 4}s`};
    }
    .line_5 {
      animation-delay: ${`${(duration / items) * 5}s`};
    }
    .line_6 {
      animation-delay: ${`${(duration / items) * 6}s`};
    }
    .line_7 {
      animation-delay: ${`${(duration / items) * 7}s`};
    }
    .line_8 {
      animation-delay: ${`${(duration / items) * 8}s`};
    }
    .line_9 {
      animation-delay: ${`${(duration / items) * 8}s`};
    }
    .line_10 {
      animation-delay: ${`${(duration / items) * 10}s`};
    }
    .line_11 {
      animation-delay: ${`${(duration / items) * 11}s`};
    }
    .line_12 {
      animation-delay: ${`${(duration / items) * 12}s`};
    }
    .line_13 {
      animation-delay: ${`${(duration / items) * 13}s`};
    }
    .line_14 {
      animation-delay: ${`${(duration / items) * 14}s`};
    }
    .line_15 {
      animation-delay: ${`${(duration / items) * 15}s`};
    }
    .line_16 {
      animation-delay: ${`${(duration / items) * 16}s`};
    }
    .line_17 {
      animation-delay: ${`${(duration / items) * 17}s`};
    }
    .line_18 {
      animation-delay: ${`${(duration / items) * 18}s`};
    }
    .line_19 {
      animation-delay: ${`${(duration / items) * 19}s`};
    }
    .line_20 {
      animation-delay: ${`${(duration / items) * 20}s`};
    }
    .line_21 {
      animation-delay: ${`${(duration / items) * 21}s`};
    }
    .line_22 {
      animation-delay: ${`${(duration / items) * 22}s`};
    }
    .line_23 {
      animation-delay: ${`${(duration / items) * 23}s`};
    }
    .line_24 {
      animation-delay: ${`${(duration / items) * 24}s`};
    }
    .line_25 {
      animation-delay: ${`${(duration / items) * 25}s`};
    }
    .line_26 {
      animation-delay: ${`${(duration / items) * 26}s`};
    }
    .line_27 {
      animation-delay: ${`${(duration / items) * 27}s`};
    }
    .line_28 {
      animation-delay: ${`${(duration / items) * 28}s`};
    }
    .line_29 {
      animation-delay: ${`${(duration / items) * 29}s`};
    }
    .line_30 {
      animation-delay: ${`${(duration / items) * 30}s`};
    }
    .line_31 {
      animation-delay: ${`${(duration / items) * 31}s`};
    }
    .line_32 {
      animation-delay: ${`${(duration / items) * 32}s`};
    }
    .line_33 {
      animation-delay: ${`${(duration / items) * 33}s`};
    }
    .line_34 {
      animation-delay: ${`${(duration / items) * 34}s`};
    }
    .line_35 {
      animation-delay: ${`${(duration / items) * 35}s`};
    }
    .line_36 {
      animation-delay: ${`${(duration / items) * 36}s`};
    }
    .line_37 {
      animation-delay: ${`${(duration / items) * 37}s`};
    }
    .line_38 {
      animation-delay: ${`${(duration / items) * 38}s`};
    }
    .line_39 {
      animation-delay: ${`${(duration / items) * 39}s`};
    }
    .line_40 {
      animation-delay: ${`${(duration / items) * 40}s`};
    }
    .line_41 {
      animation-delay: ${`${(duration / items) * 41}s`};
    }
    .line_42 {
      animation-delay: ${`${(duration / items) * 42}s`};
    }
    .line_43 {
      animation-delay: ${`${(duration / items) * 43}s`};
    }
    .line_44 {
      animation-delay: ${`${(duration / items) * 44}s`};
    }
    .line_45 {
      animation-delay: ${`${(duration / items) * 45}s`};
    }
    .line_46 {
      animation-delay: ${`${(duration / items) * 46}s`};
    }
    .line_47 {
      animation-delay: ${`${(duration / items) * 47}s`};
    }
    .line_48 {
      animation-delay: ${`${(duration / items) * 48}s`};
    }
    .line_49 {
      animation-delay: ${`${(duration / items) * 49}s`};
    }
    .line_50 {
      animation-delay: ${`${(duration / items) * 50}s`};
    }
    .line_51 {
      animation-delay: ${`${(duration / items) * 51}s`};
    }
    */

    /* ${getAnimations(items, duration)} */
  `}
`
