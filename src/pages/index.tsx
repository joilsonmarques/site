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
import { hasNullValue } from 'utils/validacoes'

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

  if (hasNullValue(data)) {
    return returnPropsDefault()
  } else {
    console.log('não estou nulo')
  }

  return {
    props: {
      siteIntro: siteIntroMapper(data.siteInfroFragment?.Section),
      featuredPodcast:
        featuredPodcastMapper(data.featuredPodcasts?.Section) || [],
      selectedEpisodes:
        selectedPodcastMapper(data.selectedPodcastsFragment?.Section) || [],
      extraHighlight:
        extraHighLightMapper(data.extraHighLightFragment?.Section) || null,
      callToAction: callToActionMapper(data.callToAction?.Section),
      menuListLinks: linksMenuMapper(data.barraLateral?.menu) || [],
      footerListLinks: linksFooterMapper(data.rodape?.links) || [],
      outerBarsColor,
      innerBarsColor
    },
    revalidate: 60
  }
}

export function returnPropsDefault() {
  return {
    props: {
      siteIntro: null,
      featuredPodcast: null,
      selectedEpisodes: null,
      extraHighlight: null,
      callToAction: null,
      menuListLinks: [],
      footerListLinks: []
    }
  }
}
