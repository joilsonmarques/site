import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 5.4rem;
    height: 5.9rem;
  `,

  large: () => css`
    width: 14.4rem;
    height: 15.9rem;
  `,

  horizontalOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 8.5rem;
      height: 3.8rem;
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, horizontalOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!horizontalOnMobile && wrapperModifiers.horizontalOnMobile}
  `}
`
