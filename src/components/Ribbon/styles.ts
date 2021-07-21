import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { RibbonProps } from '.'

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, textColor }) => css`
    position: absolute;
    top: 0;
    left: 0;
    text-indent: 3rem;
    display: block;
    align-items: center;
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    z-index: ${theme.layers.base};
    height: 0;
    width: 0;
    white-space: nowrap;
    span {
      display: inline-block;
      position: absolute;
      width: 0;
      height: 0;
      top: -1.4rem;
      left: -6.2rem;
      text-transform: lowercase;
      color: ${textColor};
    }
    ${media.greaterThan('medium')`
      span{
        display: inline-block;
        transform-origin: 0 0;
        transform: rotate(-90deg);
        position: absolute;
        width: 0;
        height: 0;
        top: -1rem;
        left: -4.5rem;
      }
      font-size: ${theme.font.sizes.xsmall};
      top: 0;
      left: 0;
    `}
    &::before {
      content: '';
      width: 1.8rem;
      height: 15rem;
      position: absolute;
      top: -6.6rem;
      right: -0.5rem;
      background-color: ${color};
      mask-image: url(/img/new-episode.svg);
      mask-repeat: no-repeat;
      transform: rotate(90deg);
      ${media.greaterThan('medium')`
        transform: rotate(0deg);
        width:  5.9rem;
        height: 43rem;
        top: -14.5rem;
        right: -2.7rem;
        background-position: left;
      `}
    }
  `}
`
