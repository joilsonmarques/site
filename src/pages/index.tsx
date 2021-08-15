import Home, { HomeTemplateProps } from 'components/templates/Home'
// import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
// import { QUERY_HOME } from 'graphql/queries/home';

import podcast from 'components/FeaturedPodcast/mock'
import episodes from 'components/SelectedEpisodes/mock'

export default function Index(props: HomeTemplateProps) {
  //if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  // const TODAY = new Date().toISOString().slice(0, 10)
  const outerBarsColor = '29292B'
  const innerBarsColor = 'aab1bd'

  // const {
  //   data: { featuredPodcast, selectedEpisodes }
  // } = await apolloClient.query<QueryHome, QueryHomeVariables>({
  //   query: QUERY_HOME,
  //   variables: { date: TODAY },
  //   fetchPolicy: 'no-cache' // garantir sempre dado novo na geração do estático!
  // })

  return {
    props: {
      podcast,
      episodes,
      outerBarsColor,
      innerBarsColor
    }
  }
}
