import { gql } from '@apollo/client'

export const GetMyReviews = gql`
  query GetMyReviews {
    getReviews {
      id
      place {
        name {
          th
          en
        }
        type
      }
      rating {
        overall
      }
      createdAt
    }
  }
`

export const GetReviewById = gql`
  query GetReviewById($id: ID!) {
    getReviewById(id: $id) {
      id
      place {
        name {
          th
          en
        }
        type
        images {
          url
          width
          height
        }
      }
      rating {
        overall
        ramp
        assistance
        elevator
        toilet
        parking
        surface
      }
      comment
      images {
        url
        width
        height
        id
      }
      tags
      official {
        isFlagged
        comment
        timestamp
      }
      createdAt
    }
  }
`

export const GetReviewsByPlaceId = gql`
  query GetReviewsByPlaceId($placeId: ID!) {
    getReviewsByPlaceId(placeId: $placeId) {
      id
      user {
        id
        firstname
        lastname
      }
      rating {
        overall
        ramp
        assistance
        elevator
        toilet
        parking
        surface
      }
      comment
      images {
        url
        width
        height
        id
      }
      tags
      official {
        isFlagged
        comment
        timestamp
      }
      createdAt
    }
  }
`
