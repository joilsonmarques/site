import { gql } from '@apollo/client'

export const CallToActionFragment = gql`
  fragment CallToActionFragment on Home {
    Section {
      ... on ComponentSectionCallToAction {
        title
        listLinks {
          label
          url
          type
          pagina_interna
          pagina_generica {
            slug
          }
        }
      }
    }
  }
`
