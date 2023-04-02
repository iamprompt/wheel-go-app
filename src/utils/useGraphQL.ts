import { request } from 'graphql-request/build/esm'
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import Constants from 'expo-constants'

const WHEELGO_CMS_API = Constants.expoConfig?.extra?.WHEELGO_CMS_API

export function useGraphQL<TResult, TVariables>(
  enabled: boolean,
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      request(
        `${WHEELGO_CMS_API}/graphql`,
        document,
        queryKey[1] ? queryKey[1] : undefined
      ),
    {
      enabled,
    }
  )
}
