/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AllAnnouncements {\n    Announcements(limit: 1000) {\n      docs {\n        id\n        titleTH\n        titleEN\n        descriptionTH\n        descriptionEN\n        tags\n        place {\n          id\n          nameTH\n          nameEN\n        }\n        createdAt\n      }\n    }\n  }\n": types.AllAnnouncementsDocument,
    "\n  query GetAnnouncementById($id: String!) {\n    Announcement(id: $id) {\n      id\n      titleTH\n      titleEN\n      descriptionTH\n      descriptionEN\n      tags\n      image {\n        url\n        width\n        height\n      }\n      contact {\n        phone\n        email\n        line\n      }\n      place {\n        id\n        nameTH\n        nameEN\n      }\n      createdAt\n    }\n  }\n": types.GetAnnouncementByIdDocument,
    "\n  query AllPlaces {\n    Places(limit: 1000) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n\n    Facilities(\n      limit: 1000\n      where: { type: { in: [curbCut, transportation, ramp] } }\n    ) {\n      docs {\n        id\n        type\n        detailTH\n        detailEN\n        geolocation\n      }\n    }\n  }\n": types.AllPlacesDocument,
    "\n  query GetPlaceById($id: String!) {\n    Place(id: $id) {\n      id\n      nameTH\n      nameEN\n      category\n      placeAddressTH\n      placeAddressEN\n      geolocation\n      phone\n      website\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n": types.GetPlaceByIdDocument,
    "\n  query GetNearbyPlacesFromLocation(\n    $lat: Float!\n    $lng: Float!\n    $distance: Float!\n    $limit: Int\n  ) {\n    Places(\n      limit: $limit\n      where: { geolocation: { near: [$lng, $lat, $distance] } }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n  }\n": types.GetNearbyPlacesFromLocationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllAnnouncements {\n    Announcements(limit: 1000) {\n      docs {\n        id\n        titleTH\n        titleEN\n        descriptionTH\n        descriptionEN\n        tags\n        place {\n          id\n          nameTH\n          nameEN\n        }\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllAnnouncements {\n    Announcements(limit: 1000) {\n      docs {\n        id\n        titleTH\n        titleEN\n        descriptionTH\n        descriptionEN\n        tags\n        place {\n          id\n          nameTH\n          nameEN\n        }\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAnnouncementById($id: String!) {\n    Announcement(id: $id) {\n      id\n      titleTH\n      titleEN\n      descriptionTH\n      descriptionEN\n      tags\n      image {\n        url\n        width\n        height\n      }\n      contact {\n        phone\n        email\n        line\n      }\n      place {\n        id\n        nameTH\n        nameEN\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetAnnouncementById($id: String!) {\n    Announcement(id: $id) {\n      id\n      titleTH\n      titleEN\n      descriptionTH\n      descriptionEN\n      tags\n      image {\n        url\n        width\n        height\n      }\n      contact {\n        phone\n        email\n        line\n      }\n      place {\n        id\n        nameTH\n        nameEN\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPlaces {\n    Places(limit: 1000) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n\n    Facilities(\n      limit: 1000\n      where: { type: { in: [curbCut, transportation, ramp] } }\n    ) {\n      docs {\n        id\n        type\n        detailTH\n        detailEN\n        geolocation\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllPlaces {\n    Places(limit: 1000) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n\n    Facilities(\n      limit: 1000\n      where: { type: { in: [curbCut, transportation, ramp] } }\n    ) {\n      docs {\n        id\n        type\n        detailTH\n        detailEN\n        geolocation\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPlaceById($id: String!) {\n    Place(id: $id) {\n      id\n      nameTH\n      nameEN\n      category\n      placeAddressTH\n      placeAddressEN\n      geolocation\n      phone\n      website\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPlaceById($id: String!) {\n    Place(id: $id) {\n      id\n      nameTH\n      nameEN\n      category\n      placeAddressTH\n      placeAddressEN\n      geolocation\n      phone\n      website\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNearbyPlacesFromLocation(\n    $lat: Float!\n    $lng: Float!\n    $distance: Float!\n    $limit: Int\n  ) {\n    Places(\n      limit: $limit\n      where: { geolocation: { near: [$lng, $lat, $distance] } }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNearbyPlacesFromLocation(\n    $lat: Float!\n    $lng: Float!\n    $distance: Float!\n    $limit: Int\n  ) {\n    Places(\n      limit: $limit\n      where: { geolocation: { near: [$lng, $lat, $distance] } }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;