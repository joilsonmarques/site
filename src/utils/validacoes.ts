import { QueryHome } from 'graphql/generated/QueryHome'

export const hasNullValue = (data: QueryHome) => {
  return Object.values(data).every((propertie) => {
    return propertie === null
  })
}
