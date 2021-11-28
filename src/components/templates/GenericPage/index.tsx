/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import PageHeader, { PageHeaderProps } from 'components/Headers/PageHeader'

import header from 'components/Headers/PageHeader/mock'
import ReactHtmlParser from 'react-html-parser'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'

export type GenericPageTemplateProps = {
  content: string
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
  content = header.content,
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
          <div>{ReactHtmlParser(content)}</div>
        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default GenericPage
