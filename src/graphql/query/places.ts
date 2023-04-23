import { gql } from '@apollo/client'

export const GetPlaces = gql`
  query GetPlaces {
    getPlaces {
      id
      name {
        th
        en
      }
      type
      location {
        lat
        lng
      }
    }
  }
`

export const GetPlaceById = gql`
  query GetPlaceById($id: String!) {
    getPlaceById(id: $id) {
      id
      name {
        th
        en
      }
      type
      address {
        th
        en
      }
      location {
        lat
        lng
      }
      images {
        id
        url
        width
        height
      }
      metadata {
        phone
        website
        busLines
        tramLines
      }
    }

    getRatingSummaryByPlaceId(id: $id) {
      id
      overall
      reviewCount
      facilities {
        RAMP {
          status
          rating
        }
        ASSISTANCE {
          status
          rating
        }
        TOILET {
          status
          rating
        }
        ELEVATOR {
          status
          rating
        }
        PARKING {
          status
          rating
        }
        SURFACE {
          status
          rating
        }
      }
    }
  }
`

export const GetNearbyPlaces = gql`
  query GetNearbyPlaces(
    $lat: Float!
    $lng: Float!
    $radius: Float!
    $limit: Float = 100
    $type: [PLACE_TYPES!]
    $exclude: [String!]
  ) {
    getPlaces(
      options: {
        location: { lat: $lat, lng: $lng }
        radius: $radius
        limit: $limit
        types: $type
        exclude: $exclude
      }
    ) {
      id
      name {
        th
        en
      }
      type
      location {
        lat
        lng
      }
    }
  }
`

export const SearchPlaces = gql`
  query SearchPlaces(
    $query: String!
    $limit: Float = 100
    $type: [PLACE_TYPES!]
    $excludeTypes: [PLACE_TYPES!]
    $exclude: [String!]
  ) {
    getPlaces(
      options: {
        keyword: $query
        limit: $limit
        types: $type
        exclude: $exclude
        excludeTypes: $excludeTypes
      }
    ) {
      id
      name {
        th
        en
      }
      type
    }
  }
`
