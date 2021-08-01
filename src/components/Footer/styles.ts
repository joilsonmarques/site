import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

import { FooterProps } from '.'

export const Wrapper = styled.footer<FooterProps>`
  ${({ theme, outerBarsColor, innerBarsColor }) => css`
    ${HeadingStyles.Wrapper} {
      height: 0px;
      opacity: 0;
    }
    position: relative;
    background: ${theme.colors.darkGray};
    margin-top: 7rem;
    padding-top: 7rem;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -6rem;
      left: 0;
      width: 100%;
      height: 6rem;
      background-position: bottom;
      background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 120"%3E%3Cpath fill="%23${outerBarsColor}" d="M10 90H5v30h5V90zM80 90h-5v30h5V90zM90 55h-5v65h5V55zM100 30h-5v90h5V30zM110 105h-5v15h5v-15zM30 80h-5v40h5V80zM40 70h-5v50h5V70zM50 40h-5v80h5V40zM60 15h-5v105h5V15zM140 20.3h-5V120h5V20.3zM70 60h-5v60h5V60zM150 60h-5v60h5V60zM20 35h-5v85h5V35zM10 50H5v5h5v-5zM110 95h-5v5h5v-5zM20 20h-5v5h5v-5zM50.2002 24.8h-5v5h5v-5zM80 50h-5v5h5v-5zM90 35h-5v5h5v-5zM150 40h-5v5h5v-5zM140 5h-5v5h5V5zM60 0h-5v5h5V0zM40 50.2h-5v10h5v-10zM160 70h-5v50h5V70zM160 50h-5v10h5V50zM130 70h-5v50h5V70zM130 35h-5v10h5V35zM70 35h-5v10h5V35zM80 65h-5v10h5V65zM120 90h-5v30h5V90zM120 50h-5v5h5v-5zM120 65h-5v10h5V65z"/%3E%3C/svg%3E');
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 160 120'%3E%3Cpath fill='%23${innerBarsColor}' d='M10 90H5v30h5V90zM80 90h-5v30h5V90zM90 55h-5v65h5V55zM100 30h-5v90h5V30zM110 105h-5v15h5v-15zM30 80h-5v40h5V80zM40 70h-5v50h5V70zM50 40h-5v80h5V40zM60 15h-5v105h5V15zM140 20.3h-5V120h5V20.3zM70 60h-5v60h5V60zM150 60h-5v60h5V60zM20 35h-5v85h5V35zM10 50H5v5h5v-5zM110 95h-5v5h5v-5zM20 20h-5v5h5v-5zM50.2002 24.8h-5v5h5v-5zM80 50h-5v5h5v-5zM90 35h-5v5h5v-5zM150 40h-5v5h5v-5zM140 5h-5v5h5V5zM60 0h-5v5h5V0zM40 50.2h-5v10h5v-10zM160 70h-5v50h5V70zM160 50h-5v10h5V50zM130 70h-5v50h5V70zM130 35h-5v10h5V35zM70 35h-5v10h5V35zM80 65h-5v10h5V65zM120 90h-5v30h5V90zM120 50h-5v5h5v-5zM120 65h-5v10h5V65z'/%3E%3C/svg%3E");
      transform: rotate(180deg);
    }

    ${media.greaterThan('medium')`
      margin-top: 14rem;
      padding: ${theme.spacings.large};
      &::before {
      top: -12rem;
      height: 12rem;
    }
    &::after {
      height: 12rem;
      background-position: 0rem 0rem;
    }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 99rem;
    margin: 0 auto;
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: ${theme.grid.gutter};
      margin-top: ${theme.spacings.medium};
    `}
    padding: ${theme.spacings.medium} 0;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    justify-content: center;

    div{
      width: 18rem;
      height: 4.66rem;
    }
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
      `}
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
    }

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.medium};
      justify-content: center;
      text-align: center;
      span{
        font-size: ${theme.font.sizes.xxsmall};
        font-weight: ${theme.font.light};
      }
    `}

    #social-media {
      ${media.lessThan('medium')`
        justify-content: center;
      `}
      display: flex;
      margin-bottom: ${theme.spacings.xxsmall};
      a {
        margin-right: ${theme.spacings.xxsmall};
        > svg {
          width: 2.2rem;
        }
      }
    }
  `}
`
