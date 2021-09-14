import { gql } from '@apollo/client'
import { CallToActionFragment } from 'graphql/fragments/callToAction'
import { ExtraHighLightFragment } from 'graphql/fragments/extraHighLight'
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
    extraHighLightFragment: home {
      ...ExtraHighLightFragment
    }
    callToAction: home {
      ...CallToActionFragment
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
  ${SiteIntroFragment}
  ${FeaturedPodcastsFragment}
  ${SelectedPodcastsFragment}
  ${ExtraHighLightFragment}
  ${CallToActionFragment}
`
