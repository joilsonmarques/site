import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.medium} 0;
    z-index: ${theme.layers.base};
  `}
`

export const Iframe = styled.iframe`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
  `}
`
