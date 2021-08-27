import { gql } from '@apollo/client'
import { CallToActionFragment } from 'graphql/fragments/callToAction'
import { FeaturedPodcastsFragment } from 'graphql/fragments/featuredPodcasts'
import { SelectedPodcastsFragment } from 'graphql/fragments/selectedPodcasts'
import { SiteIntroFragment } from 'graphql/fragments/siteIntro'

export const QUERY_HOME = gql`
  query QueryHome {
    siteInfroFragment: home {
      ...SiteIntroFragment
    }
    featuredPodcasts: home {
      ...FeaturedPodcastsFragment
    }
    selectedPodcastsFragment: home {
      ...SelectedPodcastsFragment
    }
    callToAction: home {
      ...CallToActionFragment
    }
  }
  ${SiteIntroFragment}
  ${FeaturedPodcastsFragment}
  ${SelectedPodcastsFragment}
  ${CallToActionFragment}
`
