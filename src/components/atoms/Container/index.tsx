import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    padding: 0 calc(${theme.grid.collumn}*2);
    ${media.lessThan('medium')`
      padding: 0 ${theme.grid.gutter};
    `}
  `}
`

export const FullContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`
