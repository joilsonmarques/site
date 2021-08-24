import { gql } from '@apollo/client'

export const SelectedPodcastsFragment = gql`
  fragment SelectedPodcastsFragment on Home {
    Section {
      ... on ComponentSectionSelectedEpisodes {
        sectionTitle
        episodes {
          title
          cover {
            url
          }
          subTitle
          embed
        }
      }
    }
  }
`
