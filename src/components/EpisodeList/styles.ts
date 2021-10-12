import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
`

export const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-content: space-around;
    padding: ${theme.spacings.medium} 0;
    border-top: 1px solid ${theme.colors.black};
    article {
      width: 215px;
      height: 215px;
      margin-right: ${theme.spacings.medium};
      div:last-child {
        opacity: 0;
      }
    }
    span {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
    }
    h3 {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.spacings.small};
      a {
        color: ${theme.colors.black};
      }
    }
    p {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};
    }

    ${media.lessThan('medium')`
      flex-flow: column;
      article {
        display: none;
      }
    `}
  `}
`
