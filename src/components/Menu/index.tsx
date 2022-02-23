import { useState } from 'react'
import Link from 'next/link'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import Search, { SearchProps } from 'components/Search'
import * as S from './styles'

export type MenuLinksProps = {
  label: string
  url: string
  type: string
}

export type MenuProps = {
  listLinks: MenuLinksProps[]
  searchConfig: SearchProps
}

const Menu = ({ listLinks, searchConfig }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRight, setIsRight] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <S.Wrapper isRight={isRight}>
      <S.LogoWrapper>
        <Link href="/">
          <a>
            <Logo color="white" horizontalOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper
          onClick={() => {
            setIsOpen(!isOpen)
            setIsSearchOpen(false)
            setIsRight(false)
          }}
        >
          <MenuIcon aria-label="Abrir menu" />
        </S.IconWrapper>
        <S.IconWrapper>
          <SearchIcon
            aria-label="Abrir a busca"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen)
              setIsRight(!isRight)
              setIsOpen(false)
            }}
          />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          {listLinks.map((link, index) => (
            <S.MenuLink
              key={index}
              href={link.url}
              target={link.type === 'externo' ? '_blank' : '_self'}
            >
              {link.label}
            </S.MenuLink>
          ))}
        </S.MenuNav>
      </S.MenuFull>

      <S.SearchBox aria-hidden={!isSearchOpen} isSearchOpen={isSearchOpen}>
        <CloseIcon
          aria-label="Fechar Busca"
          onClick={() => {
            setIsSearchOpen(false)
            setIsRight(false)
          }}
        />
        <Search {...searchConfig} />
      </S.SearchBox>
    </S.Wrapper>
  )
}

export default Menu
