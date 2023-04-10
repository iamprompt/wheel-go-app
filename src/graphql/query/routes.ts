import { graphql } from '../gql'

export const SearchRoutes = graphql(/* GraphQL */ `
  query SearchRoutes($from: String!, $to: String!) {
    Routes(
      limit: 1000
      where: {
        OR: [
          { origin: { equals: $from }, destination: { equals: $to } }
          { origin: { equals: $to }, destination: { equals: $from } }
        ]
      }
    ) {
      docs {
        id
        origin {
          id
          nameTH
          nameEN
          category
        }
        destination {
          id
          nameTH
          nameEN
          category
        }
        distance
        route
      }
    }
  }
`)

export const GetPreDefinedRoutes = graphql(/* GraphQL */ `
  query GetPreDefinedRoutes($limit: Int = 100) {
    Routes(limit: $limit) {
      docs {
        id
        route
      }
    }
  }
`)

export const GetPreDefinedRouteById = graphql(/* GraphQL */ `
  query GetPreDefinedRouteById($id: String!) {
    Route(id: $id) {
      id
      origin {
        id
        nameTH
        nameEN
        category
      }
      destination {
        id
        nameTH
        nameEN
        category
      }
      distance
      route
    }
  }
`)
