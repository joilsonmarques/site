import Home, { HomeTemplateProps } from 'components/templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { featuredPodcastMapper, selectedPodcastMapper } from 'utils/mappers'

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

  return {
    props: {
      revalidate: 60,
      featuredPodcast: featuredPodcastMapper(data.featuredPodcasts?.Section),
      selectedEpisodes: selectedPodcastMapper(
        data.selectedPodcastsFragment?.Section
      ),
      outerBarsColor,
      innerBarsColor
    }
  }
}
