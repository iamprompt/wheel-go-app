import { graphql } from '../gql'

export const AllAnnouncements = graphql(/* GraphQL */ `
  query AllAnnouncements {
    Announcements(limit: 1000) {
      docs {
        id
        titleTH
        titleEN
        descriptionTH
        descriptionEN
        tags
        place {
          id
          nameTH
          nameEN
        }
        createdAt
      }
    }
  }
`)
