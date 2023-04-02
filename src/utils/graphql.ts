import Constants from 'expo-constants'
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { request } from 'graphql-request/build/esm'
import { getUserToken } from './asyncStorage'

const WHEELGO_CMS_API = Constants.expoConfig?.extra?.WHEELGO_CMS_API
const WHEELGO_GRAPHQL = `${WHEELGO_CMS_API}/graphql`

export async function WheelGoGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables
) {
  console.log('document', JSON.stringify(document))
  console.log('variables', variables)

  const token = await getUserToken()

  try {
    const response = await request(
      WHEELGO_GRAPHQL,
      document,
      variables as any,
      {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }
    )
    console.log('response', response)
    return response
  } catch (error) {
    console.log(error)
  }
}
