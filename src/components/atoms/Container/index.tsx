import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    padding: 0 calc(${theme.grid.collumn}*2);
  `}
`

export const FullContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`
