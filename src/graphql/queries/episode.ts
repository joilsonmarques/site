import { gql } from '@apollo/client'

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
      authors {
        name
      }
      episodeNumber
      embed
      releaseDate
      extraContent
      categories {
        name
        slug
      }
    }
    rodape {
      links {
        label
        url
        type
        paginas_interna {
          Slug
        }
        pagina_generica {
          slug
        }
      }
    }
    barraLateral {
      menu {
        label
        url
        type
        paginas_interna {
          Slug
        }
        pagina_generica {
          slug
        }
      }
    }
  }
`
