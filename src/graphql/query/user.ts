import { graphql } from '../gql'

export const GetUserFavoritePlaces = graphql(/* GraphQL */ `
  query GetUserFavoritePlaces {
    meUser {
      user {
        favoritePlaces {
          addedAt
          place {
            id
            nameTH
            nameEN
            category
          }
        }
      }
    }
  }
`)
