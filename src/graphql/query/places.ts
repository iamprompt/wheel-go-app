import { gql } from '@apollo/client'
import { LANGUAGE_FIELDS } from '../fragment/language'
import { LOCATION_FIELDS } from '../fragment/location'
import { MEDIA_FIELDS } from '../fragment/media'

export const GetPlaces = gql`
  query GetPlaces {
    ${LANGUAGE_FIELDS}
    ${LOCATION_FIELDS}

    getPlaces {
      id
      name {
        ...LanguageFields
      }
      type
      location {
        ...LocationFields
      }
    }
  }
`

export const GetPlaceById = gql`
  query GetPlaceById($id: String!) {
    ${LANGUAGE_FIELDS}
    ${LOCATION_FIELDS}
    ${MEDIA_FIELDS}

    getPlaceById(id: $id) {
      id
      name {
        ...LanguageFields
      }
      type
      address {
        ...LanguageFields
      }
      location {
        ...LocationFields
      }
      images {
        ...MediaFields
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
  ${LANGUAGE_FIELDS}
  ${LOCATION_FIELDS}

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
        ...LanguageFields
      }
      type
      location {
        ...LocationFields
      }
    }
  }
`

export const SearchPlaces = gql`
  ${LANGUAGE_FIELDS}

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
        ...LanguageFields
      }
      type
    }
  }
`
