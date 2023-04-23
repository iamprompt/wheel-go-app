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

export const AddPlaceToFavorites = gql`
  mutation AddPlaceToFavorites($placeId: String!) {
    addFavoritePlace(placeId: $placeId) {
      id
    }
  }
`

export const RemovePlaceFromFavorites = gql`
  mutation RemovePlaceFromFavorites($placeId: String!) {
    removeFavoritePlace(placeId: $placeId) {
      id
    }
  }
`

export const IsFavoritePlace = gql`
  query IsFavoritePlace($placeId: String!) {
    isFavoritePlace(placeId: $placeId)
  }
`
