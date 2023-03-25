import { graphql } from '../gql'

export const allPlaces = graphql(/* GraphQL */ `
  query AllPlaces {
    Places(limit: 100) {
      docs {
        id
        nameTH
        nameEN
        category
        geolocation
      }
    }

    Facilities(limit: 100, where: { type: { in: [curbCut, transportation] } }) {
      docs {
        id
        type
        detailTH
        detailEN
        geolocation
      }
    }
  }
`)
