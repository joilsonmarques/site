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
import menuLinks from 'components/Menu/mock'
import footerLinks from 'components/Footer/mock'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'


export type HomeTemplateProps = {
  siteIntro: HeroProps
  featuredPodcast: FeaturedPodcastProps
  selectedEpisodes: EpisodeCardProps[]
  extraHighlight: ExtraHighlightProps
  callToAction: CallToActionProps
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
  outerBarsColor: string
  innerBarsColor: string
}

const Home = ({
  siteIntro = hero,
  featuredPodcast = podcast,
  selectedEpisodes = episodes,
  extraHighlight = extra,
  callToAction = call,
  menuListLinks = menuLinks.listLinks,
  footerListLinks = footerLinks.listLinks,
  outerBarsColor = '29292B',
  innerBarsColor = 'F95E3C'
}: HomeTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} menuListLinks={menuListLinks} footerListLinks={footerListLinks}>
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
