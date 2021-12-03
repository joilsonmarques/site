import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const getCSSVars = (props) =>
  Object.entries(props)
    .filter(([v]) => typeof v === 'string' || typeof v === 'number')
    .map(([k, v]) => `--${k}:${v};`)

const WrapperBase = styled.div`
  --outerHeight: auto;
  display: block;
  height: var(--outerHeight);
`

export const Wrapper = styled(WrapperBase)`
  ${({ theme }) => css`
    ${getCSSVars}
    height: auto;
    background: ${theme.colors.gray};
    padding: ${theme.spacings.large} 0 ${theme.spacings.medium};
    ${media.lessThan('medium')`
      padding-top: ${theme.spacings.small};
    `}
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: calc(var(--outerHeight) + ${theme.spacings.large} + 1rem);
      background: ${theme.colors.lightGray};
      position: absolute;
      top: 0;
      left: 0;
      z-index: ${theme.layers.zero};
    }

    > div:first-child {
      display: flex;
      flex-wrap: no-wrap;
      ${media.lessThan('medium')`
        flex-wrap: wrap;
      `}
    }
  `}
`
export const Cover = styled.div`
  width: 28.8rem;
  min-width: 28.8rem;
  height: 28.8rem;
  margin-right: 12rem;
  ${media.lessThan('medium')`
    margin: 0;
    width: 100%;
    height: auto;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    align-content: space-between;
    z-index: ${theme.layers.base};
  `}
`

export const ContentText = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xsmall};
    }
    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.large};
    }
    h4 {
      font-size: calc(${theme.font.sizes.medium} - 0.2rem);
      line-height: calc(${theme.font.sizes.medium} + 20%);
      font-weight: ${theme.font.normal};
      margin: 1rem 0;
    }
    p {
      font-style: italic;
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Categories = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      li {
        margin: 0 1rem 1rem 0;
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

export const Description = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.small};
    margin-top: calc(${theme.spacings.medium} + 1rem);
    ${media.lessThan('medium')`
    margin-top: 0;
    `}
    p {
      margin: ${theme.spacings.xsmall} 0;
      line-height: ${theme.font.sizes.medium};
      &:last-child {
        margin: 0;
      }
    }
  `}
`
