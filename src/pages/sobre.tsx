import AboutPage, {
  AboutPageTemplateProps
} from 'components/templates/AboutPage'
import { initializeApollo } from 'utils/apollo'
import { QUERY_SOBRE } from 'graphql/queries/sobre'
import { QuerySobre } from 'graphql/generated/QuerySobre'
import { sobreMapper, linksFooterMapper, linksMenuMapper } from 'utils/mappers'

export default function Index(props: AboutPageTemplateProps) {
  return <AboutPage {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QuerySobre>({
    query: QUERY_SOBRE,
    fetchPolicy: 'no-cache'
  })

  const dataSobre = sobreMapper(data.sobre) // Não está colocando o 'img' do header, pois não estava no mock

  if (!dataSobre) {
    return { notFound: true }
  }

  return {
    props: {
      members: dataSobre?.members,
      header: dataSobre?.header,
      menuListLinks: linksMenuMapper(data.menuFragment?.menu) || null,
      footerListLinks: linksFooterMapper(data.rodapeFragment?.links) || null
    }
  }
}
