/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import EpisodeHeader, { EpisodeHeaderProps } from 'components/EpisodeHeader'

import header from 'components/EpisodeHeader/mock'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'
import ReactHtmlParser from 'react-html-parser'

export type EpisodePageTemplateProps = {
  headerProps: EpisodeHeaderProps
  content: string
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const EpisodePage = ({
  headerProps = header,
  content = header.content,
  outerBarsColor = '29292B',
  innerBarsColor = 'BFCAD4',
  menuListLinks,
  footerListLinks,
}: EpisodePageTemplateProps) =>
(

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
    <Container>
      <S.Section>
        <EpisodeHeader {...headerProps}/>
      </S.Section>
      <S.Section>
        <S.Content>
          <div>{ReactHtmlParser(content)}</div>
        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default EpisodePage
