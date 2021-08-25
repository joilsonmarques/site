/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'

import { Container } from 'components/atoms/Container'
import Hero from 'components/Hero'
import FeaturedPodcast, { FeaturedPodcastProps } from 'components/FeaturedPodcast'
import { EpisodeCardProps } from 'components/EpisodeCard'
import SelectedEpisodes from 'components/SelectedEpisodes'
import ExtraHighlight, {ExtraHighlightProps} from 'components/ExtraHighlight'

//Mocks
import episodes from 'components/SelectedEpisodes/mock'
import podcast from 'components/FeaturedPodcast/mock'
import extra from 'components/ExtraHighlight/mock'

import * as S from './styles'

export type HomeTemplateProps = {
  featuredPodcast: FeaturedPodcastProps
  selectedEpisodes: EpisodeCardProps[]
  extraHighlight: ExtraHighlightProps
  outerBarsColor: string
  innerBarsColor: string
}



const Home = ({
  featuredPodcast = podcast,
  selectedEpisodes = episodes,
  extraHighlight = extra,
  outerBarsColor = '29292B',
  innerBarsColor = '451379'
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
      <S.Section>
        <ExtraHighlight {...extraHighlight} />
      </S.Section>
    </Container>
  </Base>
)

export default Home
