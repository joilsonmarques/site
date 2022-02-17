import { gql } from '@apollo/client'
import { CallToActionFragment } from 'graphql/fragments/callToAction'
import { ExtraHighLightFragment } from 'graphql/fragments/extraHighLight'
import { FeaturedPodcastsFragment } from 'graphql/fragments/featuredPodcasts'
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
    rodapeFragment: rodape {
      ...RodapeFragment
    }
    barraLateral {
      menu {
        label
        url
        type
        pagina_generica {
          slug
        }
      }
    }
  }
  ${SiteIntroFragment}
  ${FeaturedPodcastsFragment}
  ${SelectedPodcastsFragment}
  ${ExtraHighLightFragment}
  ${CallToActionFragment}
  ${RodapeFragment}
`
