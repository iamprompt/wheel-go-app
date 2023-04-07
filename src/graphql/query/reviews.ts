import { graphql } from '../gql'

export const GetMyReviews = graphql(`
  query GetMyReviews($userId: String!) {
    Reviews(where: { user: { equals: $userId } }) {
      docs {
        id
        place {
          nameTH
          nameEN
          category
        }
        rating {
          overall
        }
        createdAt
      }
    }
  }
`)

export const GetReviewById = graphql(`
  query GetReviewById($id: String!) {
    Review(id: $id) {
      id
      createdAt
      place {
        nameTH
        nameEN
        category
        image {
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
        facility
        comment
        images {
          id
          image {
            url
            width
            height
          }
        }
      }
      official {
        flagged
        comment
        timestamp
      }
    }
  }
`)

export const GetReviewsByPlaceId = graphql(`
  query GetReviewsByPlaceId($placeId: String!, $limit: Int = 100) {
    Reviews(where: { place: { equals: $placeId } }, limit: $limit) {
      docs {
        id
        createdAt
        comment
        user {
          id
          firstName
          lastName
          displayNameType
        }
        place {
          nameTH
          nameEN
          category
          image {
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
          facility
          comment
          images {
            id
            image {
              url
              width
              height
            }
          }
        }
        official {
          flagged
          comment
          timestamp
        }
      }
    }
  }
`)
