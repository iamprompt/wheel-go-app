import { graphql } from '../gql'

export const GetMyTracedRoutes = graphql(`
  query GetMyTracedRoutes {
    TracedRoutes(limit: 1000) {
      docs {
        id
        route
        duration
        distance
        createdAt
      }
      totalDocs
    }
  }
`)

export const GetRouteById = graphql(`
  query GetRouteById($id: String!) {
    TracedRoute(id: $id) {
      id
      route
      distance
      duration
      createdAt
    }
  }
`)
