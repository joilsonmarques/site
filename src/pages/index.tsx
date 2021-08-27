import Home, { HomeTemplateProps } from 'components/templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import {
  featuredPodcastMapper,
  selectedPodcastMapper,
  siteIntroMapper
} from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const outerBarsColor = '29292B'
  const innerBarsColor = 'aab1bd'

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME,
    fetchPolicy: 'no-cache'
  })

  console.log(data.siteInfroFragment?.Section)

  return {
    props: {
      revalidate: 60,
      siteIntro: siteIntroMapper(data.siteInfroFragment?.Section),
      featuredPodcast:
        featuredPodcastMapper(data.featuredPodcasts?.Section) || null,
      selectedEpisodes:
        selectedPodcastMapper(data.selectedPodcastsFragment?.Section) || null,
      callToAction: data.callToAction?.Section,
      outerBarsColor,
      innerBarsColor
    }
  }
}
