import { gql } from '@apollo/client'

export const RodapeFragment = gql`
  fragment RodapeFragment on Rodape {
    links {
      ... on ComponentFragmentListaDeLinks {
        label
        type
        url
        pagina_interna
        pagina_generica {
          slug
        }
      }
    }
  }
`
