import { gql } from '@apollo/client'

export const SelectedPodcastsFragment = gql`
  fragment SelectedPodcastsFragment on Home {
    Section {
      ... on ComponentSectionSelectedEpisodes {
        sectionTitle
        episodes {
          id
          slug
          title
          cover {
            url
          }
          subTitle
          podcast {
            title
            slug
          }
          releaseDate
        }
      }
    }
  }
`
