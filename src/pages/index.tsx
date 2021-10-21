import Home, { HomeTemplateProps } from 'components/templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import {
  callToActionMapper,
  extraHighLightMapper,
  featuredPodcastMapper,
  linksFooterMapper,
  linksMenuMapper,
  selectedPodcastMapper,
  siteIntroMapper
} from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const outerBarsColor = '29292B'
  const innerBarsColor = 'F95E3C'

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME,
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      siteIntro: siteIntroMapper(data.siteInfroFragment?.Section),
      featuredPodcast:
        featuredPodcastMapper(data.featuredPodcasts?.Section) || null,
      selectedEpisodes:
        selectedPodcastMapper(data.selectedPodcastsFragment?.Section) || null,
      extraHighlight:
        extraHighLightMapper(data.extraHighLightFragment?.Section) || null,
      callToAction: callToActionMapper(data.callToAction?.Section),
      menuListLinks: linksMenuMapper(data.barraLateral?.menu) || null,
      footerListLinks: linksFooterMapper(data.rodape?.links) || null,
      outerBarsColor,
      innerBarsColor
    },
    revalidate: 60
  }
}
