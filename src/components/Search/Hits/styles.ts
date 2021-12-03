import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
  `}
`

export const List = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.darkBlue};
    a {
      padding-right: ${theme.spacings.xsmall};
      padding-bottom: ${theme.spacings.xsmall};
      display: block;
      cursor: pointer;
      color: ${theme.colors.white};
      text-decoration: none;
      border-left: 0px solid ${theme.colors.white};
      padding-left: 0px;
      transition: 0.2s linear;
      &:hover {
        border-width: 0.5rem;
        padding-left: 1rem;
        background: ${theme.colors.darkBlue};
      }
    }
    em {
      font-style: normal;
      color: ${theme.colors.lightGreen};
    }
    span {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxsmall};
      &.light-emphasis {
        font-size: calc(${theme.font.sizes.xxsmall} - 10%);
        font-weight: ${theme.font.normal};
        color: ${theme.colors.white};
        em {
          color: ${theme.colors.white};
          font-style: italic;
        }
      }
    }
    h3 {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xsmall};
    }
    p {
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xxsmall};
    }
    ${media.greaterThan('medium')`
        div{
            padding-right: 0;
        }
        span {
            font-weight: ${theme.font.bold};
            font-size: ${theme.font.sizes.xsmall};
        }
        h3 {
            font-weight: ${theme.font.bold};
            font-size: ${theme.font.sizes.small};
        }
        p {
            font-weight: ${theme.font.normal};
            font-size: ${theme.font.sizes.small};
        }
        `}
  `}
`
