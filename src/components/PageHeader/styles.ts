import styled, { css } from 'styled-components'
export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    span {
      font-size: ${theme.font.sizes.xxsmall};
    }
    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    p {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const Categories = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 1rem;
        a {
          font-size: ${theme.font.sizes.xxsmall};
          color: ${theme.colors.black};
          font-weight: ${theme.font.bold};
          text-transform: uppercase;
          text-decoration: none;
          border: 0.3rem solid black;
          padding: 0.5rem;
          transition: all 0.5s ease-in-out;
          &:hover {
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
  `}
`
