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
      comment
      rating {
        overall
        ramp
        assistance
        elevator
        toilet
        parking
        surface
        facility
        isFlagged
        additionalComment
      }
    }
  }
`)
