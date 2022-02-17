import { gql } from '@apollo/client'
import { RodapeFragment } from 'graphql/fragments/rodape'

export const QUERY_POSTS = gql`
  query QueryPosts($limit: Int, $start: Int, $where: JSON, $sort: String) {
    posts(limit: $limit, start: $start, where: $where, sort: $sort) {
      slug
      published_at
      title
      author {
        name
      }
    }
  }
`
export const QUERY_POST_BY_SLUG = gql`
  query QueryPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      cover {
        url
      }
      title
      summary
      content
      published_at
      author {
        name
      }
      categorias {
        slug
        name
      }
      tags {
        name
      }
    }
    rodapeFragment: rodape {
      ...RodapeFragment
    }
    barraLateral {
      menu {
        label
        url
        type
        pagina_generica {
          slug
        }
      }
    }
  }
  ${RodapeFragment}
`
