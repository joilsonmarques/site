/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'

import { Container } from 'components/atoms/Container'
import Hero, { HeroProps } from 'components/Hero'
import FeaturedPodcast, { FeaturedPodcastProps } from 'components/FeaturedPodcast'
import { EpisodeCardProps } from 'components/EpisodeCard'
import SelectedEpisodes from 'components/SelectedEpisodes'
import ExtraHighlight, {ExtraHighlightProps} from 'components/ExtraHighlight'
import CallToAction, { CallToActionProps } from 'components/CallToAction'

//Mocks
import hero from 'components/Hero/mock'
import episodes from 'components/SelectedEpisodes/mock'
import podcast from 'components/FeaturedPodcast/mock'
import extra from 'components/ExtraHighlight/mock'
import call from 'components/CallToAction/mock'

import * as S from './styles'


export type HomeTemplateProps = {
  siteIntro: HeroProps
  featuredPodcast: FeaturedPodcastProps
  selectedEpisodes: EpisodeCardProps[]
  extraHighlight: ExtraHighlightProps
  callToAction: CallToActionProps
  outerBarsColor: string
  innerBarsColor: string
}

const Home = ({
  siteIntro = hero,
  featuredPodcast = podcast,
  selectedEpisodes = episodes,
  extraHighlight = extra,
  callToAction = call,
  outerBarsColor = '29292B',
  innerBarsColor = 'F95E3C'
}: HomeTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor}>
    <Container>      
      <S.Section>
        <Hero {...siteIntro}/>
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
      <S.Section>
        <CallToAction {...callToAction} />
      </S.Section>
    </Container>
  </Base>
)

export default Home
