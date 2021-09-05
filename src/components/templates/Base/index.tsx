import { Container } from 'components/atoms/Container'
import Footer, { FooterLinksProps } from 'components/Footer'
import Menu, { MenuLinksProps } from 'components/Menu'

import menuLinks from 'components/Menu/mock'
import footerLinks from 'components/Footer/mock'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const Base = ({
  children,
  outerBarsColor = '29292B',
  innerBarsColor = '451379',
  menuListLinks = menuLinks.listLinks,
  footerListLinks = footerLinks.listLinks
}: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu listLinks={menuListLinks} />
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
