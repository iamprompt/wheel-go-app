import { graphql } from '../gql'

export const allPlaces = graphql(/* GraphQL */ `
  query AllPlaces {
    Places (limit: 100) {
      docs {
        id
        nameTH
        nameEN
        category
        geolocation
      }
    }
  }
`)
