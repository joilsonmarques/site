/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import MemberList from 'components/MemberList'

import members from 'components/MemberList/mock'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'

export type InternalPageTemplateProps = {
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const InternalPage = ({
  outerBarsColor = '29292B',
  innerBarsColor = '0E3C63',
  menuListLinks,
  footerListLinks
}: InternalPageTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
    <Container>
      <S.Section>
        <MemberList members={members}/>
      </S.Section>
    </Container>
  </Base>
)

export default InternalPage
