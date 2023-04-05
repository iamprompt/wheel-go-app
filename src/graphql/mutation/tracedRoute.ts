import { graphql } from '../gql'

export const CreateTracedRoute = graphql(`
  mutation CreateTracedRoute($input: mutationTracedRouteInput!) {
    createTracedRoute(data: $input) {
      id
    }
  }
`)
