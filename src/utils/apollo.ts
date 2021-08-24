import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
// import { Session } from 'next-auth'
import { useMemo } from 'react'
// import apolloCache from './apolloCache'
import { getPublicUrl } from './getPublicUrl'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(/*session?: Session | null*/) {
  const httpLink = new HttpLink({
    uri: `${getPublicUrl}/graphql`
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache()
  })
}

export function initializeApollo(
  initialState = null /*,
  session?: Session | null*/
) {
  // serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient(/*session*/)

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null /*, session?: Session*/) {
  const store = useMemo(
    () => initializeApollo(initialState /*, session*/),
    [initialState /*, session*/]
  )
  return store
}
