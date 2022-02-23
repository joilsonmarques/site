import { gql } from '@apollo/client'
import { CallToActionFragment } from 'graphql/fragments/callToAction'
import { ExtraHighLightFragment } from 'graphql/fragments/extraHighLight'
import { FeaturedPodcastsFragment } from 'graphql/fragments/featuredPodcasts'
import { MenuFragment } from 'graphql/fragments/menu'
import { RodapeFragment } from 'graphql/fragments/rodape'
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
    extraHighLightFragment: home {
      ...ExtraHighLightFragment
    }
    callToAction: home {
      ...CallToActionFragment
    }
    menuFragment: barraLateral {
      ...MenuFragment
    }
    rodapeFragment: rodape {
      ...RodapeFragment
    }
  }
  ${SiteIntroFragment}
  ${FeaturedPodcastsFragment}
  ${SelectedPodcastsFragment}
  ${ExtraHighLightFragment}
  ${CallToActionFragment}
  ${MenuFragment}
  ${RodapeFragment}
`
