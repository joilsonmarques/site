import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuProps = {
  isRight: boolean
}

export const Wrapper = styled.menu<MenuProps>`
  ${({ theme, isRight }) => css`
    background: ${theme.colors.black};
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    justify-content: space-between;
    z-index: ${theme.layers.menu};
    ${media.greaterThan('medium')`
      justify-content: center;
      width: 9rem;
      height: 100vh;
      transform: ${
        isRight ? 'translateX(calc(100vw - 9rem))' : 'translateX(0)'
      };
      transition: transform 1.2s ease-in-out;
      `}
  `}
`
export const LogoWrapper = styled.div`
  width: 5.4rem;
  height: 5.9rem;
  position: absolute;
  top: 3rem;
  cursor: pointer;

  ${media.lessThan('medium')`
    > div {
      width: 11.57rem;
      height: 3rem;
    }
    top: 2rem;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2rem;
    cursor: pointer;

    ${media.greaterThan('medium')`
      width: 4rem;
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      > div {
        margin-left: ${theme.spacings.small};
      }
    `}

    ${media.greaterThan('medium')`
      position: absolute;
      bottom: 0;
      margin-bottom: ${theme.spacings.small};;
    `}
  `}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        ${media.greaterThan('medium')`
          height: 0.5rem;
        `}
        margin-top: ${theme.spacings.xxsmall};
        background-color: ${theme.colors.black};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.lightBlue};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    ${media.greaterThan('medium')`
      left: 9rem;
      width: calc(100vw - 9rem);
    `}
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      color: ${theme.colors.white};
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      ${media.greaterThan('medium')`
        width: 3.5rem;
      `}
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;

      ${media.greaterThan('medium')`
        transform: ${isOpen ? 'translateX(3rem)' : 'translateX(0)'};
        font-weight: ${theme.font.light};
        font-size: ${theme.font.sizes.xxlarge};
      `}
    }
  `}
`

type SearchBoxProps = {
  isSearchOpen: boolean
}

export const SearchBox = styled.div<SearchBoxProps>`
  ${({ theme, isSearchOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.lightBlue};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isSearchOpen ? 'all' : 'none'};
    ${media.greaterThan('medium')`
      input{
        padding-left: 60px
      }
      left: calc(-100vw + 9rem);
      width: calc(100vw - 9rem);
    `}
    ${media.lessThan('medium')`
      width: 100vw;
      left: 0;
      opacity: ${isSearchOpen ? 1 : 0};
      transition: opacity 0.2s ease-in-out;
      input{
        padding-left: 30px
      }
    `}

    > svg {
      color: ${theme.colors.white};
      position: absolute;
      top: ${theme.spacings.small};
      left: ${theme.spacings.small};
      margin-top: 1rem;
      cursor: pointer;
      width: 2.4rem;
      z-index: 1;
      ${media.greaterThan('medium')`
        color: ${theme.colors.white};
        position: absolute;
        top: ${theme.spacings.large};
        left: ${theme.spacings.large};
        width: 5rem;
      `}
  `}
`
