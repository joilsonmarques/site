import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    featuredPodcasts: paginaInicial {
      Section {
        ... on ComponentSectionFeaturedPodcast {
          sectionTitle
          background {
            url
          }
          showLastEpisode
          podcast {
            title
            subtitle
            cover {
              url
            }
            description
            slug
            categories {
              name
              slug
            }
            episodes(limit: 1) {
              embed
            }
          }
        }
      }
    }
    selectedEpisodes: paginaInicial {
      Section {
        ... on ComponentSectionExtra {
          title
        }
      }
    }
  }
`
