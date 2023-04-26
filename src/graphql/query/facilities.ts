import { gql } from '@apollo/client'

export const GetFacilitiesByPlaceId = gql`
  query GetFacilitiesByPlaceId($id: String!) {
    getFacilitiesByPlaceId(placeId: $id) {
      id
      type
      detail {
        th
        en
      }
    }
  }
`
