import { graphql } from '../gql'

export const LoginUser = graphql(/* GraphQL */ `
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      exp
      user {
        id
        email
        username
        firstName
        lastName
        displayNameType
      }
    }
  }
`)

export const MeProfile = graphql(/* GraphQL */ `
  query MeProfile {
    meUser {
      user {
        id
        email
        username
        firstName
        lastName
        displayNameType
        impairmentLevel
        equipment
      }
    }
  }
`)
