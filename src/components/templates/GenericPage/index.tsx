/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import PageHeader, { PageHeaderProps } from 'components/PageHeader'

import header from 'components/PageHeader/mock'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'

export type GenericPageTemplateProps = {
  outerBarsColor: string
  innerBarsColor: string
  headerInfo: PageHeaderProps
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const GenericPage = ({
  outerBarsColor = '29292B',
  innerBarsColor = 'BFCAD4',
  headerInfo = header,
  menuListLinks,
  footerListLinks,
}: GenericPageTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
    <Container>
      <S.Section>
        <PageHeader {...headerInfo}/>
      </S.Section>
      <S.Section>
        <S.Content>

        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default GenericPage
