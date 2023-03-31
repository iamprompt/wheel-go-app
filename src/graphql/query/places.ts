import { graphql } from '../gql'

export const allPlaces = graphql(/* GraphQL */ `
  query AllPlaces {
    Places(limit: 1000) {
      docs {
        id
        nameTH
        nameEN
        category
        geolocation
      }
    }

    Facilities(
      limit: 1000
      where: { type: { in: [curbCut, transportation, ramp] } }
    ) {
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

export const getPlaceById = graphql(/* GraphQL */ `
  query GetPlaceById($id: String!) {
    Place(id: $id) {
      id
      nameTH
      nameEN
      category
      geolocation
    }
  }
`)
