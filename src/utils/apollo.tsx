import Constant from 'expo-constants'
import type { FetchResult } from '@apollo/client'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  Observable,
  createHttpLink,
  from,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import type { ReactNode } from 'react'
import { GraphQLError } from 'graphql'
import { getUserToken, setUserToken } from './asyncStorage'
import { RefreshToken } from '~/graphql/mutation/auth'

const httpLink = createHttpLink({
  uri: `${Constant.expoConfig?.extra?.WHEELGO_API}/graphql`,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const authLink = setContext(async (_, { headers }) => {
  const { accessToken: token } = await getUserToken()

  console.log('token', token)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

async function refreshToken() {
  const { refreshToken } = await getUserToken()

  const { data } = await client.mutate({
    mutation: RefreshToken,
    variables: {
      refreshToken,
    },
  })

  if (
    data?.refresh &&
    data?.refresh?.accessToken &&
    data?.refresh?.refreshToken
  ) {
    await setUserToken(data.refresh.accessToken, data.refresh.refreshToken)
    return data.refresh
  }
}

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      const observable = new Observable<FetchResult<Record<string, any>>>(
        (observer) => {
          // used an annonymous function for using an async function
          ;(async () => {
            try {
              const accessToken = await refreshToken()

              if (!accessToken) {
                throw new GraphQLError('Empty AccessToken')
              }

              // Retry the failed request
              const subscriber = {
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              }

              forward(operation).subscribe(subscriber)
            } catch (err) {
              observer.error(err)
            }
          })()
        }
      )

      return observable
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
)

const apolloLinks = from([errorLink, authLink, httpLink])
client.setLink(apolloLinks)

export function WheelGoApolloProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
