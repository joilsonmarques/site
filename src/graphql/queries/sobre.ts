import { gql } from '@apollo/client'
import { MenuFragment } from 'graphql/fragments/menu'
import { RodapeFragment } from 'graphql/fragments/rodape'

export const QUERY_SOBRE = gql`
  query QuerySobre {
    sobre {
      Title
      Embed
      Summary
      Members {
        id
        name
        avatar {
          url
        }
        bio
        links {
          network
          url
        }
      }
    }
    menuFragment: barraLateral {
      ...MenuFragment
    }
    rodapeFragment: rodape {
      ...RodapeFragment
    }
  }
  ${MenuFragment}
  ${RodapeFragment}
`
