import { gql } from '@apollo/client'

export const MenuFragment = gql`
  fragment MenuFragment on BarraLateral {
    menu {
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
