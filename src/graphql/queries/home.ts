import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query getHome {
    paginaInicial {
      id
      Section {
        __typename
        ... on ComponentSiteIntroducao {
          id
          description
          embed
        }
      }
    }
  }
`
