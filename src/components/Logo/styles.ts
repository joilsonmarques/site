import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 3.375rem;
    height: 3.6875rem;
  `,

  large: () => css`
    width: 9rem;
    height: 9.938rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 3.375rem;
      height: 1.763rem;
      svg{
        width: 3.375rem;
      }
      .logotype{
        display: none;
        pointer-events: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
