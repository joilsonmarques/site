import Base from 'components/templates/Base'

import { Container } from 'components/atoms/Container'
import Hero from 'components/Hero'

import FeaturedPodcast from 'components/FeaturedPodcast'
import { FeaturedPodcastProps } from 'components/FeaturedPodcast'
import { EpisodeCardProps } from 'components/EpisodeCard'
import SelectedEpisodes from 'components/SelectedEpisodes'

//Mocks
import podcast from 'components/FeaturedPodcast/mock'
import episodes from 'components/SelectedEpisodes/mock'

import * as S from './styles'

export type HomeTemplateProps = {
  featuredPodcast: FeaturedPodcastProps[]
  selectedEpisodes: EpisodeCardProps[]
  outerBarsColor: string
  innerBarsColor: string
}

const Home = ({
  featuredPodcast = podcast,
  selectedEpisodes = episodes,
  outerBarsColor = '29292B',
  innerBarsColor = 'aab1bd'
}: HomeTemplateProps) => (
  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor}>
    <Container>
      <S.Section>
        <Hero />
      </S.Section>
      <S.Section>
        <FeaturedPodcast {...featuredPodcast} />
      </S.Section>
      <S.Section>
        <SelectedEpisodes items={selectedEpisodes} />
      </S.Section>
    </Container>
  </Base>
)

export default Home
