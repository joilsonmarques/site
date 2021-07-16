import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large}
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
