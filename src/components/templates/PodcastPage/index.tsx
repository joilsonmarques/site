/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import PageHeader from 'components/PageHeader'
import EpisodeList from 'components/EpisodeList'

import header from 'components/PageHeader/mock'
import episodes from 'components/EpisodeList/mock'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'

export type PodcastPageTemplateProps = {
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const PodcastPage = ({
  outerBarsColor = '29292B',
  innerBarsColor = 'BFCAD4',
  menuListLinks,
  footerListLinks,
}: PodcastPageTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
    <Container>
      <S.Section>
        <PageHeader {...header}/>
      </S.Section>
      <S.Section>
        <S.Content>
          <EpisodeList items={episodes} {...episodes} />
        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default PodcastPage
