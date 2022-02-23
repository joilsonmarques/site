import { gql } from '@apollo/client'
import { MenuFragment } from 'graphql/fragments/menu'
import { RodapeFragment } from 'graphql/fragments/rodape'

export const QUERY_EPISODE = gql`
  query QueryEpisode($limit: Int, $start: Int, $where: JSON, $sort: String) {
    episodes(limit: $limit, start: $start, where: $where, sort: $sort) {
      slug
      podcast {
        slug
      }
    }
  }
`

export const QUERY_EPISODE_BY_SLUG = gql`
  query QueryEpisodeBySlug($slug: String!) {
    episodes(where: { slug: $slug }) {
      title
      episodeNumber
      embed
      releaseDate
      extraContent
      categories {
        name
        slug
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
