import styled, { css } from 'styled-components'

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
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    background: ${theme.colors.gray};
    padding: ${theme.spacings.large} 0;
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
  `}
`
export const Cover = styled.div`
  width: 28.8rem;
  height: 28.8rem;
  flex-grow: 0;
`
export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0;
    margin-left: 10rem;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    align-content: space-between;
    z-index: ${theme.layers.base};

    span {
      display: block;
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xsmall};
    }
    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.large};
    }
    h4 {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.normal};
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

export const Description = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: calc(${theme.spacings.medium} + 1rem);
    font-size: ${theme.font.sizes.small};
    p {
      margin: ${theme.spacings.xsmall} 0;
      line-height: ${theme.font.sizes.medium};
      &:last-child {
        margin: 0;
      }
    }
  `}
`
