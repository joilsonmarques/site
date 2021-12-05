import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    color: ${theme.colors.white};
    column-gap:: ${theme.spacings.large};
    ${media.lessThan('medium')`
      flex-direction: column;
      column-gap:0;
    `}
    ${media.between('medium', 'large')`
      column-gap: ${theme.spacings.small}
    `}

    div {
      flex-grow: 4;
      &:first-child {
        height: auto;
        ${media.lessThan('medium')`
          width: 100%;
          margin-right: 0;
        `}
        ${media.between('medium', 'large')`
          min-width: 300px;
        `}

        img {
          object-fit: cover;
        }
      }
      h4 {
        font-size: ${theme.font.sizes.large};
        margin-bottom: ${theme.spacings.small};
        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.medium};
          margin-bottom: ${theme.spacings.xsmall};
        `}
      }
      p {
        font-size: ${theme.font.sizes.small};
        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.xsmall};
        `}
      }
    }
  `}
`
export const Networks = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 5rem 0 0;
    ${media.lessThan('medium')`
      margin: 1rem 0 0;
    `}
    a {
      text-decoration: none;
      color: ${theme.colors.white};
      margin-right: 1rem;
      transition: color 0.3s ease-in-out;
      ${media.lessThan('medium')`
        margin: 0 3rem 0 0;
      `}
      i {
        height: calc(${theme.font.sizes.medium});
        width: calc(${theme.font.sizes.medium});
      }
      &:hover {
        color: ${theme.colors.lightGreen};
      }
    }
  `}
`
