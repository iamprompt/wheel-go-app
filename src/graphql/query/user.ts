import { gql } from '@apollo/client'

export const GetMyProfile = gql`
  query GetMyProfile {
    me {
      id
      firstname
      lastname
      username
      role
    }
  }
`

export const GetMyFavoritePlaces = gql`
  query GetMyFavoritePlaces {
    me {
      metadata {
        favorites {
          addedAt
          place {
            id
            name {
              th
              en
            }
            type
          }
        }
      }
    }
  }
`
