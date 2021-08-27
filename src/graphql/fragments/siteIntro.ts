import { gql } from '@apollo/client'

export const SiteIntroFragment = gql`
  fragment SiteIntroFragment on Home {
    Section {
      ... on ComponentSiteIntro {
        call
        description
        hasDetail
        embed
      }
    }
  }
`
