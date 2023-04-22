import { gql } from '@apollo/client'

export const SearchRoutes = gql`
  query SearchRoutes($from: String!, $to: String!) {
    getRoutes(options: { origin: $from, destination: $to }) {
      id
      type
      distance
      duration
    }
  }
`

export const GetPreDefinedRoutes = gql`
  query GetPreDefinedRoutes {
    getRoutes {
      id
      type
      paths {
        lat
        lng
      }
      distance
      duration
      createdAt
    }
  }
`
export const GetMyTracedRoutes = gql`
  query GetMyTracedRoutes {
    getRoutes {
      id
      type
      paths {
        lat
        lng
      }
      distance
      duration
      createdAt
    }
  }
`

export const GetRouteById = gql`
  query GetRouteById($id: String!) {
    getRouteById(id: $id) {
      id
      type
      paths {
        lat
        lng
      }
      distance
      duration
      createdAt
    }
  }
`
