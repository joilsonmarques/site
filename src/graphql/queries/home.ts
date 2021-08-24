import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    featuredPodcasts: home {
      Section {
        ... on ComponentSectionFeaturedPodcast {
          sectionTitle
          background {
            url
          }
          description
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
  }
`
