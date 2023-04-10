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
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n      exp\n      user {\n        id\n        email\n        username\n        firstName\n        lastName\n        displayNameType\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  query MeProfile {\n    meUser {\n      user {\n        id\n        email\n        username\n        firstName\n        lastName\n        displayNameType\n        impairmentLevel\n        equipment\n      }\n    }\n  }\n": types.MeProfileDocument,
    "\n  mutation CreateReview($input: mutationReviewInput!) {\n    createReview(data: $input) {\n      id\n    }\n  }\n": types.CreateReviewDocument,
    "\n  mutation CreateTracedRoute($input: mutationTracedRouteInput!) {\n    createTracedRoute(data: $input) {\n      id\n    }\n  }\n": types.CreateTracedRouteDocument,
    "\n  query AllAnnouncements {\n    Announcements(limit: 1000) {\n      docs {\n        id\n        titleTH\n        titleEN\n        descriptionTH\n        descriptionEN\n        tags\n        place {\n          id\n          nameTH\n          nameEN\n        }\n        createdAt\n      }\n    }\n  }\n": types.AllAnnouncementsDocument,
    "\n  query GetAnnouncementById($id: String!) {\n    Announcement(id: $id) {\n      id\n      titleTH\n      titleEN\n      descriptionTH\n      descriptionEN\n      tags\n      image {\n        url\n        width\n        height\n      }\n      contact {\n        phone\n        email\n        line\n      }\n      place {\n        id\n        nameTH\n        nameEN\n      }\n      createdAt\n    }\n  }\n": types.GetAnnouncementByIdDocument,
    "\n  query AllPlaces {\n    Places(limit: 1000) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n\n    Facilities(\n      limit: 1000\n      where: { type: { in: [curbCut, transportation, ramp] } }\n    ) {\n      docs {\n        id\n        type\n        detailTH\n        detailEN\n        geolocation\n      }\n    }\n  }\n": types.AllPlacesDocument,
    "\n  query GetPlaceById($id: String!) {\n    Place(id: $id) {\n      id\n      nameTH\n      nameEN\n      category\n      placeAddressTH\n      placeAddressEN\n      geolocation\n      phone\n      website\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n": types.GetPlaceByIdDocument,
    "\n  query GetNearbyPlacesFromLocation(\n    $lat: Float!\n    $lng: Float!\n    $distance: Float!\n    $limit: Int\n  ) {\n    Places(\n      limit: $limit\n      where: { geolocation: { near: [$lng, $lat, $distance] } }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n        geolocation\n      }\n    }\n  }\n": types.GetNearbyPlacesFromLocationDocument,
    "\n  query SearchPlaces(\n    $query: String!\n    $limit: Int = 100\n    $exclude: [JSON] = []\n  ) {\n    Places(\n      limit: $limit\n      where: {\n        OR: [{ nameTH: { like: $query } }, { nameEN: { like: $query } }]\n        id: { not_in: $exclude }\n      }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n      }\n    }\n  }\n": types.SearchPlacesDocument,
    "\n  query GetMyReviews($userId: String!) {\n    Reviews(where: { user: { equals: $userId } }) {\n      docs {\n        id\n        place {\n          nameTH\n          nameEN\n          category\n        }\n        rating {\n          overall\n        }\n        createdAt\n      }\n      totalDocs\n    }\n  }\n": types.GetMyReviewsDocument,
    "\n  query GetReviewById($id: String!) {\n    Review(id: $id) {\n      id\n      createdAt\n      place {\n        nameTH\n        nameEN\n        category\n        image {\n          url\n          width\n          height\n        }\n      }\n      rating {\n        overall\n        ramp\n        assistance\n        elevator\n        toilet\n        parking\n        surface\n        facility\n        comment\n        images {\n          id\n          image {\n            url\n            width\n            height\n          }\n        }\n      }\n      official {\n        flagged\n        comment\n        timestamp\n      }\n    }\n  }\n": types.GetReviewByIdDocument,
    "\n  query GetReviewsByPlaceId($placeId: String!, $limit: Int = 100) {\n    Reviews(where: { place: { equals: $placeId } }, limit: $limit) {\n      docs {\n        id\n        createdAt\n        comment\n        user {\n          id\n          firstName\n          lastName\n          displayNameType\n        }\n        place {\n          nameTH\n          nameEN\n          category\n          image {\n            url\n            width\n            height\n          }\n        }\n        rating {\n          overall\n          ramp\n          assistance\n          elevator\n          toilet\n          parking\n          surface\n          facility\n          comment\n          images {\n            id\n            image {\n              url\n              width\n              height\n            }\n          }\n        }\n        official {\n          flagged\n          comment\n          timestamp\n        }\n      }\n    }\n  }\n": types.GetReviewsByPlaceIdDocument,
    "\n  query SearchRoutes($from: String!, $to: String!) {\n    Routes(\n      limit: 1000\n      where: {\n        OR: [\n          { origin: { equals: $from }, destination: { equals: $to } }\n          { origin: { equals: $to }, destination: { equals: $from } }\n        ]\n      }\n    ) {\n      docs {\n        id\n        origin {\n          id\n          nameTH\n          nameEN\n          category\n        }\n        destination {\n          id\n          nameTH\n          nameEN\n          category\n        }\n        distance\n        route\n      }\n    }\n  }\n": types.SearchRoutesDocument,
    "\n  query GetPreDefinedRoutes($limit: Int = 100) {\n    Routes(limit: $limit) {\n      docs {\n        id\n        route\n      }\n    }\n  }\n": types.GetPreDefinedRoutesDocument,
    "\n  query GetPreDefinedRouteById($id: String!) {\n    Route(id: $id) {\n      id\n      origin {\n        id\n        nameTH\n        nameEN\n        category\n      }\n      destination {\n        id\n        nameTH\n        nameEN\n        category\n      }\n      distance\n      route\n    }\n  }\n": types.GetPreDefinedRouteByIdDocument,
    "\n  query GetMyTracedRoutes {\n    TracedRoutes(limit: 1000) {\n      docs {\n        id\n        route\n        duration\n        distance\n        createdAt\n      }\n      totalDocs\n    }\n  }\n": types.GetMyTracedRoutesDocument,
    "\n  query GetRouteById($id: String!) {\n    TracedRoute(id: $id) {\n      id\n      route\n      distance\n      duration\n      createdAt\n    }\n  }\n": types.GetRouteByIdDocument,
    "\n  query GetUserFavoritePlaces {\n    meUser {\n      user {\n        favoritePlaces {\n          addedAt\n          place {\n            id\n            nameTH\n            nameEN\n            category\n          }\n        }\n      }\n    }\n  }\n": types.GetUserFavoritePlacesDocument,
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
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n      exp\n      user {\n        id\n        email\n        username\n        firstName\n        lastName\n        displayNameType\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n      exp\n      user {\n        id\n        email\n        username\n        firstName\n        lastName\n        displayNameType\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MeProfile {\n    meUser {\n      user {\n        id\n        email\n        username\n        firstName\n        lastName\n        displayNameType\n        impairmentLevel\n        equipment\n      }\n    }\n  }\n"): (typeof documents)["\n  query MeProfile {\n    meUser {\n      user {\n        id\n        email\n        username\n        firstName\n        lastName\n        displayNameType\n        impairmentLevel\n        equipment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateReview($input: mutationReviewInput!) {\n    createReview(data: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReview($input: mutationReviewInput!) {\n    createReview(data: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTracedRoute($input: mutationTracedRouteInput!) {\n    createTracedRoute(data: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTracedRoute($input: mutationTracedRouteInput!) {\n    createTracedRoute(data: $input) {\n      id\n    }\n  }\n"];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchPlaces(\n    $query: String!\n    $limit: Int = 100\n    $exclude: [JSON] = []\n  ) {\n    Places(\n      limit: $limit\n      where: {\n        OR: [{ nameTH: { like: $query } }, { nameEN: { like: $query } }]\n        id: { not_in: $exclude }\n      }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchPlaces(\n    $query: String!\n    $limit: Int = 100\n    $exclude: [JSON] = []\n  ) {\n    Places(\n      limit: $limit\n      where: {\n        OR: [{ nameTH: { like: $query } }, { nameEN: { like: $query } }]\n        id: { not_in: $exclude }\n      }\n    ) {\n      docs {\n        id\n        nameTH\n        nameEN\n        category\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMyReviews($userId: String!) {\n    Reviews(where: { user: { equals: $userId } }) {\n      docs {\n        id\n        place {\n          nameTH\n          nameEN\n          category\n        }\n        rating {\n          overall\n        }\n        createdAt\n      }\n      totalDocs\n    }\n  }\n"): (typeof documents)["\n  query GetMyReviews($userId: String!) {\n    Reviews(where: { user: { equals: $userId } }) {\n      docs {\n        id\n        place {\n          nameTH\n          nameEN\n          category\n        }\n        rating {\n          overall\n        }\n        createdAt\n      }\n      totalDocs\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReviewById($id: String!) {\n    Review(id: $id) {\n      id\n      createdAt\n      place {\n        nameTH\n        nameEN\n        category\n        image {\n          url\n          width\n          height\n        }\n      }\n      rating {\n        overall\n        ramp\n        assistance\n        elevator\n        toilet\n        parking\n        surface\n        facility\n        comment\n        images {\n          id\n          image {\n            url\n            width\n            height\n          }\n        }\n      }\n      official {\n        flagged\n        comment\n        timestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetReviewById($id: String!) {\n    Review(id: $id) {\n      id\n      createdAt\n      place {\n        nameTH\n        nameEN\n        category\n        image {\n          url\n          width\n          height\n        }\n      }\n      rating {\n        overall\n        ramp\n        assistance\n        elevator\n        toilet\n        parking\n        surface\n        facility\n        comment\n        images {\n          id\n          image {\n            url\n            width\n            height\n          }\n        }\n      }\n      official {\n        flagged\n        comment\n        timestamp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReviewsByPlaceId($placeId: String!, $limit: Int = 100) {\n    Reviews(where: { place: { equals: $placeId } }, limit: $limit) {\n      docs {\n        id\n        createdAt\n        comment\n        user {\n          id\n          firstName\n          lastName\n          displayNameType\n        }\n        place {\n          nameTH\n          nameEN\n          category\n          image {\n            url\n            width\n            height\n          }\n        }\n        rating {\n          overall\n          ramp\n          assistance\n          elevator\n          toilet\n          parking\n          surface\n          facility\n          comment\n          images {\n            id\n            image {\n              url\n              width\n              height\n            }\n          }\n        }\n        official {\n          flagged\n          comment\n          timestamp\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetReviewsByPlaceId($placeId: String!, $limit: Int = 100) {\n    Reviews(where: { place: { equals: $placeId } }, limit: $limit) {\n      docs {\n        id\n        createdAt\n        comment\n        user {\n          id\n          firstName\n          lastName\n          displayNameType\n        }\n        place {\n          nameTH\n          nameEN\n          category\n          image {\n            url\n            width\n            height\n          }\n        }\n        rating {\n          overall\n          ramp\n          assistance\n          elevator\n          toilet\n          parking\n          surface\n          facility\n          comment\n          images {\n            id\n            image {\n              url\n              width\n              height\n            }\n          }\n        }\n        official {\n          flagged\n          comment\n          timestamp\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchRoutes($from: String!, $to: String!) {\n    Routes(\n      limit: 1000\n      where: {\n        OR: [\n          { origin: { equals: $from }, destination: { equals: $to } }\n          { origin: { equals: $to }, destination: { equals: $from } }\n        ]\n      }\n    ) {\n      docs {\n        id\n        origin {\n          id\n          nameTH\n          nameEN\n          category\n        }\n        destination {\n          id\n          nameTH\n          nameEN\n          category\n        }\n        distance\n        route\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchRoutes($from: String!, $to: String!) {\n    Routes(\n      limit: 1000\n      where: {\n        OR: [\n          { origin: { equals: $from }, destination: { equals: $to } }\n          { origin: { equals: $to }, destination: { equals: $from } }\n        ]\n      }\n    ) {\n      docs {\n        id\n        origin {\n          id\n          nameTH\n          nameEN\n          category\n        }\n        destination {\n          id\n          nameTH\n          nameEN\n          category\n        }\n        distance\n        route\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPreDefinedRoutes($limit: Int = 100) {\n    Routes(limit: $limit) {\n      docs {\n        id\n        route\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPreDefinedRoutes($limit: Int = 100) {\n    Routes(limit: $limit) {\n      docs {\n        id\n        route\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPreDefinedRouteById($id: String!) {\n    Route(id: $id) {\n      id\n      origin {\n        id\n        nameTH\n        nameEN\n        category\n      }\n      destination {\n        id\n        nameTH\n        nameEN\n        category\n      }\n      distance\n      route\n    }\n  }\n"): (typeof documents)["\n  query GetPreDefinedRouteById($id: String!) {\n    Route(id: $id) {\n      id\n      origin {\n        id\n        nameTH\n        nameEN\n        category\n      }\n      destination {\n        id\n        nameTH\n        nameEN\n        category\n      }\n      distance\n      route\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMyTracedRoutes {\n    TracedRoutes(limit: 1000) {\n      docs {\n        id\n        route\n        duration\n        distance\n        createdAt\n      }\n      totalDocs\n    }\n  }\n"): (typeof documents)["\n  query GetMyTracedRoutes {\n    TracedRoutes(limit: 1000) {\n      docs {\n        id\n        route\n        duration\n        distance\n        createdAt\n      }\n      totalDocs\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRouteById($id: String!) {\n    TracedRoute(id: $id) {\n      id\n      route\n      distance\n      duration\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetRouteById($id: String!) {\n    TracedRoute(id: $id) {\n      id\n      route\n      distance\n      duration\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserFavoritePlaces {\n    meUser {\n      user {\n        favoritePlaces {\n          addedAt\n          place {\n            id\n            nameTH\n            nameEN\n            category\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserFavoritePlaces {\n    meUser {\n      user {\n        favoritePlaces {\n          addedAt\n          place {\n            id\n            nameTH\n            nameEN\n            category\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;