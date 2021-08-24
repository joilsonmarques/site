import { gql } from '@apollo/client'

export const FeaturedPodcastsFragment = gql`
  fragment FeaturedPodcastsFragment on Home {
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
`
