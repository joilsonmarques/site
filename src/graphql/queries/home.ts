import { gql } from '@apollo/client'
import { FeaturedPodcastsFragment } from 'graphql/fragments/featuredPodcasts'
import { SelectedPodcastsFragment } from 'graphql/fragments/selectedPodcasts'

export const QUERY_HOME = gql`
  query QueryHome {
    featuredPodcasts: home {
      ...FeaturedPodcastsFragment
    }
    selectedPodcastsFragment: home {
      ...SelectedPodcastsFragment
    }
  }
  ${FeaturedPodcastsFragment}
  ${SelectedPodcastsFragment}
`
