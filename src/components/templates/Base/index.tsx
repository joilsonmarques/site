import { Container } from 'components/atoms/Container'
import Footer, { FooterLinksProps } from 'components/Footer'
import Menu, { MenuLinksProps } from 'components/Menu'
import { SearchProps } from 'components/Search'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

import menuLinks from 'components/Menu/mock'
import footerLinks from 'components/Footer/mock'
import searchResults from 'components/Search/Hits/mock'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
  searchConfig: SearchProps
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

const Base = ({
  children,
  innerBarsColor = 'F95E3C',
  outerBarsColor = '29292B',
  menuListLinks = menuLinks.listLinks,
  footerListLinks = footerLinks.listLinks,
  searchConfig = {
    inputSearch: (
      <InstantSearch searchClient={searchClient} indexName="gfg_dev">
        {/* Adding Search Box */}
        <SearchBox />

        {/* Adding Data */}
        <Hits />
      </InstantSearch>
    ),
    hits: searchResults
  }
}: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu
          listLinks={menuListLinks}
          inputSearch={searchConfig.inputSearch}
          hits={searchConfig.hits}
        />
      </Container>

      <S.Content>{children}</S.Content>

      <Footer
        outerBarsColor={outerBarsColor}
        innerBarsColor={innerBarsColor}
        listLinks={footerListLinks}
      />
    </S.Wrapper>
  )
}

export default Base
