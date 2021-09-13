import { useRouter } from 'next/router'
import GenericPage, {
  GenericPageTemplateProps
} from 'components/templates/GenericPage'
import { initializeApollo } from 'utils/apollo'
import {
  QueryPostBySlug,
  QueryPostBySlugVariables
} from 'graphql/generated/QueryPostBySlug'
import { QUERY_POSTS, QUERY_POST_BY_SLUG } from 'graphql/queries/post'
import { QueryPosts, QueryPostsVariables } from 'graphql/generated/QueryPosts'
import { headerMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: GenericPageTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <GenericPage {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryPosts, QueryPostsVariables>({
    query: QUERY_POSTS,
    variables: { limit: 9 }
  })

  const paths = data.posts.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps() {
  const { data } = await apolloClient.query<
    QueryPostBySlug,
    QueryPostBySlugVariables
  >({
    query: QUERY_POST_BY_SLUG,
    variables: { slug: `teste-de-post` },
    fetchPolicy: 'no-cache'
  })

  if (!data.posts.length) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: {
      headerInfo: headerMapper(data.posts)
    }
  }
}
