import Constant from 'expo-constants'
import type { FetchResult } from '@apollo/client'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  Observable,
  from,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import type { ReactNode } from 'react'
import { getUserToken, setUserToken } from './asyncStorage'
import { RefreshToken } from '~/graphql/mutation/auth'
import type { RefreshTokenMutation } from '~/generated-types'

const uploadLink = createUploadLink({
  uri: `${Constant.expoConfig?.extra?.WHEELGO_API}/graphql`,
})

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
})

const authLink = setContext(async (_, { headers }) => {
  const { accessToken: token } = await getUserToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

async function refreshToken() {
  const { refreshToken } = await getUserToken()

  if (!refreshToken) {
    throw new Error('Empty RefreshToken')
  }

  try {
    const { data } = await client.mutate<RefreshTokenMutation>({
      mutation: RefreshToken,
      variables: {
        refreshToken,
      },
    })

    if (!data || !data.refresh) {
      throw new Error('Cannot refresh token')
    }

    await setUserToken(data.refresh.accessToken, data.refresh.refreshToken)
    return data.refresh
  } catch (error) {
    console.error(error)
  }
}

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      const observable = new Observable<FetchResult<Record<string, any>>>(
        (observer) => {
          for (const error of graphQLErrors) {
            if (error.extensions?.code === 'UNAUTHENTICATED') {
              ;(async () => {
                try {
                  const context = operation.getContext()
                  const retryHeaderCount = Number(
                    context.headers['x-wheel-go-retry'] || 0
                  )

                  if (retryHeaderCount >= 3) {
                    return observer.error(error)
                  }

                  const accessToken = await refreshToken()
                  operation.setContext(({ headers = {} }) => ({
                    headers: {
                      ...headers,
                      'x-wheel-go-retry': retryHeaderCount + 1,
                    },
                  }))

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
          }
        }
      )

      return observable
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
)

const apolloLinks = from([errorLink, authLink, uploadLink])
client.setLink(apolloLinks)

export function WheelGoApolloProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export { client }
