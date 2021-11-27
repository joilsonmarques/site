import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    height: 100vh;
    overflow: hidden;
    padding: ${theme.spacings.small};
    padding-bottom: 0;
    display: grid;
    grid-template-rows: 60px auto minmax(10px, 60px);
    ${media.greaterThan('medium')`
      grid-template-rows: 100px auto minmax(10px, 60px);
      padding: ${theme.spacings.large};
    `}
  `}
`

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const SearchInput = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    input {
      font-size: ${theme.font.sizes.xsmall};
      font-weight  ${theme.font.normal};
      font-family: ${theme.font.family};
      width: 100%;
      background: transparent;
      color: ${theme.colors.white};
      border: none;
      border-bottom: 2px solid white;
      padding: ${theme.spacings.xxsmall};
      padding-left: 0;
      outline: none;
      text-indent: 5rem;
      ${media.greaterThan('medium')`
        height: 42px;
        font-size: ${theme.font.sizes.large};
        padding: ${theme.spacings.medium};
        padding-left: 0;
      `}
    }
  `}
`
