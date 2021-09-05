import { gql } from '@apollo/client'

export const ExtraHighLightFragment = gql`
  fragment ExtraHighLightFragment on Home {
    Section {
      ... on ComponentSectionExtra {
        cover {
          url
        }
        title
        subtitle
        primaryInfo
        secondaryInfo
        embed
        link {
          url
          isExternal
        }
      }
    }
  }
`
