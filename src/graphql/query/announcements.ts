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

export const GetAnnouncementById = graphql(/* GraphQL */ `
  query GetAnnouncementById($id: String!) {
    Announcement(id: $id) {
      id
      titleTH
      titleEN
      descriptionTH
      descriptionEN
      tags
      image {
        url
        width
        height
      }
      contact {
        phone
        email
        line
      }
      place {
        id
        nameTH
        nameEN
      }
      createdAt
    }
  }
`)
