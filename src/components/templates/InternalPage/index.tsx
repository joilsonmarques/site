/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import PageHeader from 'components/Headers/PageHeader'

import header from 'components/Headers/PageHeader/mock'

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
  innerBarsColor = 'BFCAD4',
  menuListLinks,
  footerListLinks
}: InternalPageTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
    <Container>
      <S.Section>
        <PageHeader {...header}/>
      </S.Section>
      <S.Section>
        <S.Content>

        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default InternalPage
