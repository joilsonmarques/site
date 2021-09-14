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
          paginas_interna {
            Slug
          }
          pagina_generica {
            slug
          }
        }
      }
    }
  }
`
