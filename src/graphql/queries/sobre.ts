import { gql } from '@apollo/client'

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
    rodape {
      links {
        label
        url
        type
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
        pagina_generica {
          slug
        }
      }
    }
  }
`
