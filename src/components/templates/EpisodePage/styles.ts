import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      z-index: ${theme.layers.base};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    p {
      font-size: ${theme.font.sizes.small};
      line-height: calc(${theme.font.sizes.small} + 50%);
      margin-bottom: 2rem;
      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xsmall};
      `}
    }
    margin-bottom: 10rem;
    ${media.greaterThan('medium')`
      z-index: ${theme.layers.base};
    `}
  `}
`
