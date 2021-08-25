import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    background: ${theme.colors.orange};
    padding-top: ${theme.spacings.xxlarge};
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge};
      padding-left: ${theme.grid.collumn};
    `}
    ${media.between('medium', 'large')`
      padding: ${theme.spacings.xxlarge} 0;
    `}
    h2 {
      word-wrap: break-word;
      font-size: ${theme.font.sizes.medium};
      ${media.greaterThan('medium')`
        text-align: right;
        font-size: ${theme.font.sizes.huge};
        line-height: 9.5rem;
        max-width: calc((${theme.grid.collumn}*2) + (${theme.grid.gutter}));
      `}
    }

    nav {
      display: flex;
      flex-direction: column;
      ${media.lessThan('medium')`
        padding: ${theme.grid.mobile.collumn};
      `}
      ${media.greaterThan('medium')`
        max-width: calc(${theme.grid.collumn}*3);
        margin-top: 1rem;
        margin-left: ${theme.grid.collumn};
      `}
      a {
        text-decoration: none;
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.small};
        margin-bottom: ${theme.spacings.medium};
        ${media.greaterThan('medium')`
          font-size: ${theme.font.sizes.medium};
          line-height: 3.5rem;
          margin-bottom: ${theme.spacings.xxlarge};
        `}

        transition: color 0.5s;
        svg {
          width: 3rem;
        }

        &:hover {
          color: ${theme.colors.darkGray};
        }
      }
    }
  `}
`
