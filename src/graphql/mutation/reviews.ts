import { graphql } from '../gql'

export const CreateReview = graphql(`
  mutation CreateReview($input: mutationReviewInput!) {
    createReview(data: $input) {
      id
    }
  }
`)
