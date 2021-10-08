import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  ${media.lessThan('medium')`
    padding-top: 7rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    background: ${theme.colors.gray};
    padding-bottom: ${theme.spacings.xlarge};
  `}
`
