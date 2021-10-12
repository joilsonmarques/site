/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import PodcastHeader, { PodcastHeaderProps } from 'components/PodcastHeader'
import EpisodeList, { EpisodeProps } from 'components/EpisodeList'

import header from 'components/PodcastHeader/mock'
import episodes from 'components/EpisodeList/mock'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'

export type PodcastPageTemplateProps = {
  podcastHeader: PodcastHeaderProps
  podcastEpisodes: EpisodeProps[]
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const PodcastPage = ({
  podcastHeader = header,
  podcastEpisodes = episodes,
  outerBarsColor = '29292B',
  innerBarsColor = 'BFCAD4',
  menuListLinks,
  footerListLinks,
}: PodcastPageTemplateProps) => 
(

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
    <Container>
      <S.Section>
        <PodcastHeader {...podcastHeader}/>
      </S.Section>
      <S.Section>
        <S.Content>
          <EpisodeList items={podcastEpisodes} {...podcastEpisodes} />
        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default PodcastPage
