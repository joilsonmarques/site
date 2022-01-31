import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.large} 0;
    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 100%;
      width: 100vw;
      background: ${theme.colors.darkenBlue};
      top: 0;
      z-index: ${theme.layers.base};
    }
    div {
      z-index: ${theme.layers.base};
    }
  `}
`

export const List = styled.div``
