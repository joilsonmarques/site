import { gql } from '@apollo/client'
import { MenuFragment } from 'graphql/fragments/menu'
import { RodapeFragment } from 'graphql/fragments/rodape'

export const QUERY_PODCASTS = gql`
  query QueryPodcasts($limit: Int, $start: Int, $where: JSON, $sort: String) {
    podcasts(limit: $limit, start: $start, where: $where, sort: $sort) {
      slug
      published_at
      title
      producer
    }
  }
`
export const QUERY_PODCAST_BY_SLUG = gql`
  query QueryPodCastBySlug($slug: String!) {
    podcasts(where: { slug: $slug }) {
      id
      cover {
        url
      }
      title
      subtitle
      description
      published_at
      producer
      categories {
        name
        slug
      }
      slug
      producer
      episodes {
        id
        slug
        title
        episodeNumber
        releaseDate
        extraContent
        cover {
          url
        }
        subTitle
        podcast {
          title
          slug
        }
      }
    }
    menuFragment: barraLateral {
      ...MenuFragment
    }
    rodapeFragment: rodape {
      ...RodapeFragment
    }
  }
  ${MenuFragment}
  ${RodapeFragment}
`
