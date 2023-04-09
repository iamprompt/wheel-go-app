/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  admins?: Maybe<AdminsAccess>;
  announcements?: Maybe<AnnouncementsAccess>;
  canAccessAdmin: Scalars['Boolean'];
  facilities?: Maybe<FacilitiesAccess>;
  media?: Maybe<MediaAccess>;
  places?: Maybe<PlacesAccess>;
  reviews?: Maybe<ReviewsAccess>;
  routes?: Maybe<RoutesAccess>;
  traced_routes?: Maybe<Traced_RoutesAccess>;
  users?: Maybe<UsersAccess>;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Admin_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Admin_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type Admin_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Admin_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Admin_Where = {
  AND?: InputMaybe<Array<InputMaybe<Admin_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Admin_Where_Or>>>;
  createdAt?: InputMaybe<Admin_CreatedAt_Operator>;
  email?: InputMaybe<Admin_Email_Operator>;
  id?: InputMaybe<Admin_Id_Operator>;
  updatedAt?: InputMaybe<Admin_UpdatedAt_Operator>;
};

export type Admin_Where_And = {
  createdAt?: InputMaybe<Admin_CreatedAt_Operator>;
  email?: InputMaybe<Admin_Email_Operator>;
  id?: InputMaybe<Admin_Id_Operator>;
  updatedAt?: InputMaybe<Admin_UpdatedAt_Operator>;
};

export type Admin_Where_Or = {
  createdAt?: InputMaybe<Admin_CreatedAt_Operator>;
  email?: InputMaybe<Admin_Email_Operator>;
  id?: InputMaybe<Admin_Id_Operator>;
  updatedAt?: InputMaybe<Admin_UpdatedAt_Operator>;
};

export type Admins = {
  __typename?: 'Admins';
  docs?: Maybe<Array<Maybe<Admin>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type AdminsCreateAccess = {
  __typename?: 'AdminsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsCreateDocAccess = {
  __typename?: 'AdminsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsDeleteAccess = {
  __typename?: 'AdminsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsDeleteDocAccess = {
  __typename?: 'AdminsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsDocAccessFields = {
  __typename?: 'AdminsDocAccessFields';
  email?: Maybe<AdminsDocAccessFields_Email>;
  password?: Maybe<AdminsDocAccessFields_Password>;
};

export type AdminsDocAccessFields_Email = {
  __typename?: 'AdminsDocAccessFields_email';
  create?: Maybe<AdminsDocAccessFields_Email_Create>;
  delete?: Maybe<AdminsDocAccessFields_Email_Delete>;
  read?: Maybe<AdminsDocAccessFields_Email_Read>;
  update?: Maybe<AdminsDocAccessFields_Email_Update>;
};

export type AdminsDocAccessFields_Email_Create = {
  __typename?: 'AdminsDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Email_Delete = {
  __typename?: 'AdminsDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Email_Read = {
  __typename?: 'AdminsDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Email_Update = {
  __typename?: 'AdminsDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Password = {
  __typename?: 'AdminsDocAccessFields_password';
  create?: Maybe<AdminsDocAccessFields_Password_Create>;
  delete?: Maybe<AdminsDocAccessFields_Password_Delete>;
  read?: Maybe<AdminsDocAccessFields_Password_Read>;
  update?: Maybe<AdminsDocAccessFields_Password_Update>;
};

export type AdminsDocAccessFields_Password_Create = {
  __typename?: 'AdminsDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Password_Delete = {
  __typename?: 'AdminsDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Password_Read = {
  __typename?: 'AdminsDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type AdminsDocAccessFields_Password_Update = {
  __typename?: 'AdminsDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type AdminsFields = {
  __typename?: 'AdminsFields';
  email?: Maybe<AdminsFields_Email>;
  password?: Maybe<AdminsFields_Password>;
};

export type AdminsFields_Email = {
  __typename?: 'AdminsFields_email';
  create?: Maybe<AdminsFields_Email_Create>;
  delete?: Maybe<AdminsFields_Email_Delete>;
  read?: Maybe<AdminsFields_Email_Read>;
  update?: Maybe<AdminsFields_Email_Update>;
};

export type AdminsFields_Email_Create = {
  __typename?: 'AdminsFields_email_Create';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Email_Delete = {
  __typename?: 'AdminsFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Email_Read = {
  __typename?: 'AdminsFields_email_Read';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Email_Update = {
  __typename?: 'AdminsFields_email_Update';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Password = {
  __typename?: 'AdminsFields_password';
  create?: Maybe<AdminsFields_Password_Create>;
  delete?: Maybe<AdminsFields_Password_Delete>;
  read?: Maybe<AdminsFields_Password_Read>;
  update?: Maybe<AdminsFields_Password_Update>;
};

export type AdminsFields_Password_Create = {
  __typename?: 'AdminsFields_password_Create';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Password_Delete = {
  __typename?: 'AdminsFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Password_Read = {
  __typename?: 'AdminsFields_password_Read';
  permission: Scalars['Boolean'];
};

export type AdminsFields_Password_Update = {
  __typename?: 'AdminsFields_password_Update';
  permission: Scalars['Boolean'];
};

export type AdminsReadAccess = {
  __typename?: 'AdminsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsReadDocAccess = {
  __typename?: 'AdminsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsUnlockAccess = {
  __typename?: 'AdminsUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsUnlockDocAccess = {
  __typename?: 'AdminsUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsUpdateAccess = {
  __typename?: 'AdminsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsUpdateDocAccess = {
  __typename?: 'AdminsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Announcement = {
  __typename?: 'Announcement';
  author?: Maybe<Admin>;
  contact?: Maybe<Announcement_Contact>;
  createdAt: Scalars['DateTime'];
  descriptionEN?: Maybe<Scalars['String']>;
  descriptionTH?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  location?: Maybe<Array<Scalars['Float']>>;
  place?: Maybe<Place>;
  tags?: Maybe<Array<Announcement_Tags>>;
  titleEN?: Maybe<Scalars['String']>;
  titleTH?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type AnnouncementImageArgs = {
  where?: InputMaybe<Announcement_Image_Where>;
};

export enum AnnouncementUpdate_Tags_MutationInput {
  Building = 'building',
  Incident = 'incident'
}

export type Announcement_Contact = {
  __typename?: 'Announcement_Contact';
  email?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Announcement_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Announcement_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Announcement_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Announcement_Image_Where_Or>>>;
  filename?: InputMaybe<Announcement_Image_Filename_Operator>;
  filesize?: InputMaybe<Announcement_Image_Filesize_Operator>;
  height?: InputMaybe<Announcement_Image_Height_Operator>;
  id?: InputMaybe<Announcement_Image_Id_Operator>;
  mimeType?: InputMaybe<Announcement_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Announcement_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Announcement_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Announcement_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Announcement_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Announcement_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Announcement_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Announcement_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Announcement_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Announcement_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Announcement_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Announcement_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Announcement_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Announcement_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Announcement_Image_Url_Operator>;
  width?: InputMaybe<Announcement_Image_Width_Operator>;
};

export type Announcement_Image_Where_And = {
  filename?: InputMaybe<Announcement_Image_Filename_Operator>;
  filesize?: InputMaybe<Announcement_Image_Filesize_Operator>;
  height?: InputMaybe<Announcement_Image_Height_Operator>;
  id?: InputMaybe<Announcement_Image_Id_Operator>;
  mimeType?: InputMaybe<Announcement_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Announcement_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Announcement_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Announcement_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Announcement_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Announcement_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Announcement_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Announcement_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Announcement_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Announcement_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Announcement_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Announcement_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Announcement_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Announcement_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Announcement_Image_Url_Operator>;
  width?: InputMaybe<Announcement_Image_Width_Operator>;
};

export type Announcement_Image_Where_Or = {
  filename?: InputMaybe<Announcement_Image_Filename_Operator>;
  filesize?: InputMaybe<Announcement_Image_Filesize_Operator>;
  height?: InputMaybe<Announcement_Image_Height_Operator>;
  id?: InputMaybe<Announcement_Image_Id_Operator>;
  mimeType?: InputMaybe<Announcement_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Announcement_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Announcement_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Announcement_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Announcement_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Announcement_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Announcement_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Announcement_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Announcement_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Announcement_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Announcement_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Announcement_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Announcement_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Announcement_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Announcement_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Announcement_Image_Url_Operator>;
  width?: InputMaybe<Announcement_Image_Width_Operator>;
};

export type Announcement_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Announcement_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Contact__Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Contact__Line_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Contact__Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Announcement_DescriptionEn_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_DescriptionTh_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Announcement_Image_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Announcement_Location_Operator = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  greater_than_equal?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  less_than?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  less_than_equal?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  near?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  not_equals?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type Announcement_Place_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum Announcement_Tags {
  Building = 'building',
  Incident = 'incident'
}

export enum Announcement_Tags_Input {
  Building = 'building',
  Incident = 'incident'
}

export enum Announcement_Tags_MutationInput {
  Building = 'building',
  Incident = 'incident'
}

export type Announcement_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Announcement_Tags_Input>>>;
  equals?: InputMaybe<Announcement_Tags_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Announcement_Tags_Input>>>;
  not_equals?: InputMaybe<Announcement_Tags_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Announcement_Tags_Input>>>;
};

export type Announcement_TitleEn_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_TitleTh_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Announcement_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Announcement_Where = {
  AND?: InputMaybe<Array<InputMaybe<Announcement_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Announcement_Where_Or>>>;
  author?: InputMaybe<Announcement_Author_Operator>;
  contact__email?: InputMaybe<Announcement_Contact__Email_Operator>;
  contact__line?: InputMaybe<Announcement_Contact__Line_Operator>;
  contact__phone?: InputMaybe<Announcement_Contact__Phone_Operator>;
  createdAt?: InputMaybe<Announcement_CreatedAt_Operator>;
  descriptionEN?: InputMaybe<Announcement_DescriptionEn_Operator>;
  descriptionTH?: InputMaybe<Announcement_DescriptionTh_Operator>;
  id?: InputMaybe<Announcement_Id_Operator>;
  image?: InputMaybe<Announcement_Image_Operator>;
  location?: InputMaybe<Announcement_Location_Operator>;
  place?: InputMaybe<Announcement_Place_Operator>;
  tags?: InputMaybe<Announcement_Tags_Operator>;
  titleEN?: InputMaybe<Announcement_TitleEn_Operator>;
  titleTH?: InputMaybe<Announcement_TitleTh_Operator>;
  updatedAt?: InputMaybe<Announcement_UpdatedAt_Operator>;
};

export type Announcement_Where_And = {
  author?: InputMaybe<Announcement_Author_Operator>;
  contact__email?: InputMaybe<Announcement_Contact__Email_Operator>;
  contact__line?: InputMaybe<Announcement_Contact__Line_Operator>;
  contact__phone?: InputMaybe<Announcement_Contact__Phone_Operator>;
  createdAt?: InputMaybe<Announcement_CreatedAt_Operator>;
  descriptionEN?: InputMaybe<Announcement_DescriptionEn_Operator>;
  descriptionTH?: InputMaybe<Announcement_DescriptionTh_Operator>;
  id?: InputMaybe<Announcement_Id_Operator>;
  image?: InputMaybe<Announcement_Image_Operator>;
  location?: InputMaybe<Announcement_Location_Operator>;
  place?: InputMaybe<Announcement_Place_Operator>;
  tags?: InputMaybe<Announcement_Tags_Operator>;
  titleEN?: InputMaybe<Announcement_TitleEn_Operator>;
  titleTH?: InputMaybe<Announcement_TitleTh_Operator>;
  updatedAt?: InputMaybe<Announcement_UpdatedAt_Operator>;
};

export type Announcement_Where_Or = {
  author?: InputMaybe<Announcement_Author_Operator>;
  contact__email?: InputMaybe<Announcement_Contact__Email_Operator>;
  contact__line?: InputMaybe<Announcement_Contact__Line_Operator>;
  contact__phone?: InputMaybe<Announcement_Contact__Phone_Operator>;
  createdAt?: InputMaybe<Announcement_CreatedAt_Operator>;
  descriptionEN?: InputMaybe<Announcement_DescriptionEn_Operator>;
  descriptionTH?: InputMaybe<Announcement_DescriptionTh_Operator>;
  id?: InputMaybe<Announcement_Id_Operator>;
  image?: InputMaybe<Announcement_Image_Operator>;
  location?: InputMaybe<Announcement_Location_Operator>;
  place?: InputMaybe<Announcement_Place_Operator>;
  tags?: InputMaybe<Announcement_Tags_Operator>;
  titleEN?: InputMaybe<Announcement_TitleEn_Operator>;
  titleTH?: InputMaybe<Announcement_TitleTh_Operator>;
  updatedAt?: InputMaybe<Announcement_UpdatedAt_Operator>;
};

export type Announcements = {
  __typename?: 'Announcements';
  docs?: Maybe<Array<Maybe<Announcement>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type AnnouncementsCreateAccess = {
  __typename?: 'AnnouncementsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsCreateDocAccess = {
  __typename?: 'AnnouncementsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsDeleteAccess = {
  __typename?: 'AnnouncementsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsDeleteDocAccess = {
  __typename?: 'AnnouncementsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsDocAccessFields = {
  __typename?: 'AnnouncementsDocAccessFields';
  author?: Maybe<AnnouncementsDocAccessFields_Author>;
  contact?: Maybe<AnnouncementsDocAccessFields_Contact>;
  descriptionEN?: Maybe<AnnouncementsDocAccessFields_DescriptionEn>;
  descriptionTH?: Maybe<AnnouncementsDocAccessFields_DescriptionTh>;
  image?: Maybe<AnnouncementsDocAccessFields_Image>;
  location?: Maybe<AnnouncementsDocAccessFields_Location>;
  place?: Maybe<AnnouncementsDocAccessFields_Place>;
  tags?: Maybe<AnnouncementsDocAccessFields_Tags>;
  titleEN?: Maybe<AnnouncementsDocAccessFields_TitleEn>;
  titleTH?: Maybe<AnnouncementsDocAccessFields_TitleTh>;
};

export type AnnouncementsDocAccessFields_Author = {
  __typename?: 'AnnouncementsDocAccessFields_author';
  create?: Maybe<AnnouncementsDocAccessFields_Author_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Author_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Author_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Author_Update>;
};

export type AnnouncementsDocAccessFields_Author_Create = {
  __typename?: 'AnnouncementsDocAccessFields_author_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Author_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_author_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Author_Read = {
  __typename?: 'AnnouncementsDocAccessFields_author_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Author_Update = {
  __typename?: 'AnnouncementsDocAccessFields_author_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact = {
  __typename?: 'AnnouncementsDocAccessFields_contact';
  create?: Maybe<AnnouncementsDocAccessFields_Contact_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Contact_Delete>;
  fields?: Maybe<AnnouncementsDocAccessFields_Contact_Fields>;
  read?: Maybe<AnnouncementsDocAccessFields_Contact_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Contact_Update>;
};

export type AnnouncementsDocAccessFields_Contact_Create = {
  __typename?: 'AnnouncementsDocAccessFields_contact_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_contact_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Fields = {
  __typename?: 'AnnouncementsDocAccessFields_contact_Fields';
  email?: Maybe<AnnouncementsDocAccessFields_Contact_Email>;
  line?: Maybe<AnnouncementsDocAccessFields_Contact_Line>;
  phone?: Maybe<AnnouncementsDocAccessFields_Contact_Phone>;
};

export type AnnouncementsDocAccessFields_Contact_Read = {
  __typename?: 'AnnouncementsDocAccessFields_contact_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Update = {
  __typename?: 'AnnouncementsDocAccessFields_contact_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Email = {
  __typename?: 'AnnouncementsDocAccessFields_contact_email';
  create?: Maybe<AnnouncementsDocAccessFields_Contact_Email_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Contact_Email_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Contact_Email_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Contact_Email_Update>;
};

export type AnnouncementsDocAccessFields_Contact_Email_Create = {
  __typename?: 'AnnouncementsDocAccessFields_contact_email_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Email_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_contact_email_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Email_Read = {
  __typename?: 'AnnouncementsDocAccessFields_contact_email_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Email_Update = {
  __typename?: 'AnnouncementsDocAccessFields_contact_email_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Line = {
  __typename?: 'AnnouncementsDocAccessFields_contact_line';
  create?: Maybe<AnnouncementsDocAccessFields_Contact_Line_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Contact_Line_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Contact_Line_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Contact_Line_Update>;
};

export type AnnouncementsDocAccessFields_Contact_Line_Create = {
  __typename?: 'AnnouncementsDocAccessFields_contact_line_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Line_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_contact_line_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Line_Read = {
  __typename?: 'AnnouncementsDocAccessFields_contact_line_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Line_Update = {
  __typename?: 'AnnouncementsDocAccessFields_contact_line_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Phone = {
  __typename?: 'AnnouncementsDocAccessFields_contact_phone';
  create?: Maybe<AnnouncementsDocAccessFields_Contact_Phone_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Contact_Phone_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Contact_Phone_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Contact_Phone_Update>;
};

export type AnnouncementsDocAccessFields_Contact_Phone_Create = {
  __typename?: 'AnnouncementsDocAccessFields_contact_phone_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Phone_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_contact_phone_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Phone_Read = {
  __typename?: 'AnnouncementsDocAccessFields_contact_phone_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Contact_Phone_Update = {
  __typename?: 'AnnouncementsDocAccessFields_contact_phone_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionEn = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionEN';
  create?: Maybe<AnnouncementsDocAccessFields_DescriptionEn_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_DescriptionEn_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_DescriptionEn_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_DescriptionEn_Update>;
};

export type AnnouncementsDocAccessFields_DescriptionEn_Create = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionEN_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionEn_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionEN_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionEn_Read = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionEN_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionEn_Update = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionEN_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionTh = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionTH';
  create?: Maybe<AnnouncementsDocAccessFields_DescriptionTh_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_DescriptionTh_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_DescriptionTh_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_DescriptionTh_Update>;
};

export type AnnouncementsDocAccessFields_DescriptionTh_Create = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionTH_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionTh_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionTH_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionTh_Read = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionTH_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_DescriptionTh_Update = {
  __typename?: 'AnnouncementsDocAccessFields_descriptionTH_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Image = {
  __typename?: 'AnnouncementsDocAccessFields_image';
  create?: Maybe<AnnouncementsDocAccessFields_Image_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Image_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Image_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Image_Update>;
};

export type AnnouncementsDocAccessFields_Image_Create = {
  __typename?: 'AnnouncementsDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Image_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Image_Read = {
  __typename?: 'AnnouncementsDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Image_Update = {
  __typename?: 'AnnouncementsDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Location = {
  __typename?: 'AnnouncementsDocAccessFields_location';
  create?: Maybe<AnnouncementsDocAccessFields_Location_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Location_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Location_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Location_Update>;
};

export type AnnouncementsDocAccessFields_Location_Create = {
  __typename?: 'AnnouncementsDocAccessFields_location_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Location_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_location_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Location_Read = {
  __typename?: 'AnnouncementsDocAccessFields_location_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Location_Update = {
  __typename?: 'AnnouncementsDocAccessFields_location_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Place = {
  __typename?: 'AnnouncementsDocAccessFields_place';
  create?: Maybe<AnnouncementsDocAccessFields_Place_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Place_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Place_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Place_Update>;
};

export type AnnouncementsDocAccessFields_Place_Create = {
  __typename?: 'AnnouncementsDocAccessFields_place_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Place_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_place_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Place_Read = {
  __typename?: 'AnnouncementsDocAccessFields_place_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Place_Update = {
  __typename?: 'AnnouncementsDocAccessFields_place_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Tags = {
  __typename?: 'AnnouncementsDocAccessFields_tags';
  create?: Maybe<AnnouncementsDocAccessFields_Tags_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_Tags_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_Tags_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_Tags_Update>;
};

export type AnnouncementsDocAccessFields_Tags_Create = {
  __typename?: 'AnnouncementsDocAccessFields_tags_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Tags_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Tags_Read = {
  __typename?: 'AnnouncementsDocAccessFields_tags_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_Tags_Update = {
  __typename?: 'AnnouncementsDocAccessFields_tags_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleEn = {
  __typename?: 'AnnouncementsDocAccessFields_titleEN';
  create?: Maybe<AnnouncementsDocAccessFields_TitleEn_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_TitleEn_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_TitleEn_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_TitleEn_Update>;
};

export type AnnouncementsDocAccessFields_TitleEn_Create = {
  __typename?: 'AnnouncementsDocAccessFields_titleEN_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleEn_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_titleEN_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleEn_Read = {
  __typename?: 'AnnouncementsDocAccessFields_titleEN_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleEn_Update = {
  __typename?: 'AnnouncementsDocAccessFields_titleEN_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleTh = {
  __typename?: 'AnnouncementsDocAccessFields_titleTH';
  create?: Maybe<AnnouncementsDocAccessFields_TitleTh_Create>;
  delete?: Maybe<AnnouncementsDocAccessFields_TitleTh_Delete>;
  read?: Maybe<AnnouncementsDocAccessFields_TitleTh_Read>;
  update?: Maybe<AnnouncementsDocAccessFields_TitleTh_Update>;
};

export type AnnouncementsDocAccessFields_TitleTh_Create = {
  __typename?: 'AnnouncementsDocAccessFields_titleTH_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleTh_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_titleTH_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleTh_Read = {
  __typename?: 'AnnouncementsDocAccessFields_titleTH_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsDocAccessFields_TitleTh_Update = {
  __typename?: 'AnnouncementsDocAccessFields_titleTH_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields = {
  __typename?: 'AnnouncementsFields';
  author?: Maybe<AnnouncementsFields_Author>;
  contact?: Maybe<AnnouncementsFields_Contact>;
  descriptionEN?: Maybe<AnnouncementsFields_DescriptionEn>;
  descriptionTH?: Maybe<AnnouncementsFields_DescriptionTh>;
  image?: Maybe<AnnouncementsFields_Image>;
  location?: Maybe<AnnouncementsFields_Location>;
  place?: Maybe<AnnouncementsFields_Place>;
  tags?: Maybe<AnnouncementsFields_Tags>;
  titleEN?: Maybe<AnnouncementsFields_TitleEn>;
  titleTH?: Maybe<AnnouncementsFields_TitleTh>;
};

export type AnnouncementsFields_Author = {
  __typename?: 'AnnouncementsFields_author';
  create?: Maybe<AnnouncementsFields_Author_Create>;
  delete?: Maybe<AnnouncementsFields_Author_Delete>;
  read?: Maybe<AnnouncementsFields_Author_Read>;
  update?: Maybe<AnnouncementsFields_Author_Update>;
};

export type AnnouncementsFields_Author_Create = {
  __typename?: 'AnnouncementsFields_author_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Author_Delete = {
  __typename?: 'AnnouncementsFields_author_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Author_Read = {
  __typename?: 'AnnouncementsFields_author_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Author_Update = {
  __typename?: 'AnnouncementsFields_author_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact = {
  __typename?: 'AnnouncementsFields_contact';
  create?: Maybe<AnnouncementsFields_Contact_Create>;
  delete?: Maybe<AnnouncementsFields_Contact_Delete>;
  fields?: Maybe<AnnouncementsFields_Contact_Fields>;
  read?: Maybe<AnnouncementsFields_Contact_Read>;
  update?: Maybe<AnnouncementsFields_Contact_Update>;
};

export type AnnouncementsFields_Contact_Create = {
  __typename?: 'AnnouncementsFields_contact_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Delete = {
  __typename?: 'AnnouncementsFields_contact_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Fields = {
  __typename?: 'AnnouncementsFields_contact_Fields';
  email?: Maybe<AnnouncementsFields_Contact_Email>;
  line?: Maybe<AnnouncementsFields_Contact_Line>;
  phone?: Maybe<AnnouncementsFields_Contact_Phone>;
};

export type AnnouncementsFields_Contact_Read = {
  __typename?: 'AnnouncementsFields_contact_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Update = {
  __typename?: 'AnnouncementsFields_contact_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Email = {
  __typename?: 'AnnouncementsFields_contact_email';
  create?: Maybe<AnnouncementsFields_Contact_Email_Create>;
  delete?: Maybe<AnnouncementsFields_Contact_Email_Delete>;
  read?: Maybe<AnnouncementsFields_Contact_Email_Read>;
  update?: Maybe<AnnouncementsFields_Contact_Email_Update>;
};

export type AnnouncementsFields_Contact_Email_Create = {
  __typename?: 'AnnouncementsFields_contact_email_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Email_Delete = {
  __typename?: 'AnnouncementsFields_contact_email_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Email_Read = {
  __typename?: 'AnnouncementsFields_contact_email_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Email_Update = {
  __typename?: 'AnnouncementsFields_contact_email_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Line = {
  __typename?: 'AnnouncementsFields_contact_line';
  create?: Maybe<AnnouncementsFields_Contact_Line_Create>;
  delete?: Maybe<AnnouncementsFields_Contact_Line_Delete>;
  read?: Maybe<AnnouncementsFields_Contact_Line_Read>;
  update?: Maybe<AnnouncementsFields_Contact_Line_Update>;
};

export type AnnouncementsFields_Contact_Line_Create = {
  __typename?: 'AnnouncementsFields_contact_line_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Line_Delete = {
  __typename?: 'AnnouncementsFields_contact_line_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Line_Read = {
  __typename?: 'AnnouncementsFields_contact_line_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Line_Update = {
  __typename?: 'AnnouncementsFields_contact_line_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Phone = {
  __typename?: 'AnnouncementsFields_contact_phone';
  create?: Maybe<AnnouncementsFields_Contact_Phone_Create>;
  delete?: Maybe<AnnouncementsFields_Contact_Phone_Delete>;
  read?: Maybe<AnnouncementsFields_Contact_Phone_Read>;
  update?: Maybe<AnnouncementsFields_Contact_Phone_Update>;
};

export type AnnouncementsFields_Contact_Phone_Create = {
  __typename?: 'AnnouncementsFields_contact_phone_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Phone_Delete = {
  __typename?: 'AnnouncementsFields_contact_phone_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Phone_Read = {
  __typename?: 'AnnouncementsFields_contact_phone_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Contact_Phone_Update = {
  __typename?: 'AnnouncementsFields_contact_phone_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionEn = {
  __typename?: 'AnnouncementsFields_descriptionEN';
  create?: Maybe<AnnouncementsFields_DescriptionEn_Create>;
  delete?: Maybe<AnnouncementsFields_DescriptionEn_Delete>;
  read?: Maybe<AnnouncementsFields_DescriptionEn_Read>;
  update?: Maybe<AnnouncementsFields_DescriptionEn_Update>;
};

export type AnnouncementsFields_DescriptionEn_Create = {
  __typename?: 'AnnouncementsFields_descriptionEN_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionEn_Delete = {
  __typename?: 'AnnouncementsFields_descriptionEN_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionEn_Read = {
  __typename?: 'AnnouncementsFields_descriptionEN_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionEn_Update = {
  __typename?: 'AnnouncementsFields_descriptionEN_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionTh = {
  __typename?: 'AnnouncementsFields_descriptionTH';
  create?: Maybe<AnnouncementsFields_DescriptionTh_Create>;
  delete?: Maybe<AnnouncementsFields_DescriptionTh_Delete>;
  read?: Maybe<AnnouncementsFields_DescriptionTh_Read>;
  update?: Maybe<AnnouncementsFields_DescriptionTh_Update>;
};

export type AnnouncementsFields_DescriptionTh_Create = {
  __typename?: 'AnnouncementsFields_descriptionTH_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionTh_Delete = {
  __typename?: 'AnnouncementsFields_descriptionTH_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionTh_Read = {
  __typename?: 'AnnouncementsFields_descriptionTH_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_DescriptionTh_Update = {
  __typename?: 'AnnouncementsFields_descriptionTH_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Image = {
  __typename?: 'AnnouncementsFields_image';
  create?: Maybe<AnnouncementsFields_Image_Create>;
  delete?: Maybe<AnnouncementsFields_Image_Delete>;
  read?: Maybe<AnnouncementsFields_Image_Read>;
  update?: Maybe<AnnouncementsFields_Image_Update>;
};

export type AnnouncementsFields_Image_Create = {
  __typename?: 'AnnouncementsFields_image_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Image_Delete = {
  __typename?: 'AnnouncementsFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Image_Read = {
  __typename?: 'AnnouncementsFields_image_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Image_Update = {
  __typename?: 'AnnouncementsFields_image_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Location = {
  __typename?: 'AnnouncementsFields_location';
  create?: Maybe<AnnouncementsFields_Location_Create>;
  delete?: Maybe<AnnouncementsFields_Location_Delete>;
  read?: Maybe<AnnouncementsFields_Location_Read>;
  update?: Maybe<AnnouncementsFields_Location_Update>;
};

export type AnnouncementsFields_Location_Create = {
  __typename?: 'AnnouncementsFields_location_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Location_Delete = {
  __typename?: 'AnnouncementsFields_location_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Location_Read = {
  __typename?: 'AnnouncementsFields_location_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Location_Update = {
  __typename?: 'AnnouncementsFields_location_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Place = {
  __typename?: 'AnnouncementsFields_place';
  create?: Maybe<AnnouncementsFields_Place_Create>;
  delete?: Maybe<AnnouncementsFields_Place_Delete>;
  read?: Maybe<AnnouncementsFields_Place_Read>;
  update?: Maybe<AnnouncementsFields_Place_Update>;
};

export type AnnouncementsFields_Place_Create = {
  __typename?: 'AnnouncementsFields_place_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Place_Delete = {
  __typename?: 'AnnouncementsFields_place_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Place_Read = {
  __typename?: 'AnnouncementsFields_place_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Place_Update = {
  __typename?: 'AnnouncementsFields_place_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Tags = {
  __typename?: 'AnnouncementsFields_tags';
  create?: Maybe<AnnouncementsFields_Tags_Create>;
  delete?: Maybe<AnnouncementsFields_Tags_Delete>;
  read?: Maybe<AnnouncementsFields_Tags_Read>;
  update?: Maybe<AnnouncementsFields_Tags_Update>;
};

export type AnnouncementsFields_Tags_Create = {
  __typename?: 'AnnouncementsFields_tags_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Tags_Delete = {
  __typename?: 'AnnouncementsFields_tags_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Tags_Read = {
  __typename?: 'AnnouncementsFields_tags_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_Tags_Update = {
  __typename?: 'AnnouncementsFields_tags_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleEn = {
  __typename?: 'AnnouncementsFields_titleEN';
  create?: Maybe<AnnouncementsFields_TitleEn_Create>;
  delete?: Maybe<AnnouncementsFields_TitleEn_Delete>;
  read?: Maybe<AnnouncementsFields_TitleEn_Read>;
  update?: Maybe<AnnouncementsFields_TitleEn_Update>;
};

export type AnnouncementsFields_TitleEn_Create = {
  __typename?: 'AnnouncementsFields_titleEN_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleEn_Delete = {
  __typename?: 'AnnouncementsFields_titleEN_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleEn_Read = {
  __typename?: 'AnnouncementsFields_titleEN_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleEn_Update = {
  __typename?: 'AnnouncementsFields_titleEN_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleTh = {
  __typename?: 'AnnouncementsFields_titleTH';
  create?: Maybe<AnnouncementsFields_TitleTh_Create>;
  delete?: Maybe<AnnouncementsFields_TitleTh_Delete>;
  read?: Maybe<AnnouncementsFields_TitleTh_Read>;
  update?: Maybe<AnnouncementsFields_TitleTh_Update>;
};

export type AnnouncementsFields_TitleTh_Create = {
  __typename?: 'AnnouncementsFields_titleTH_Create';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleTh_Delete = {
  __typename?: 'AnnouncementsFields_titleTH_Delete';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleTh_Read = {
  __typename?: 'AnnouncementsFields_titleTH_Read';
  permission: Scalars['Boolean'];
};

export type AnnouncementsFields_TitleTh_Update = {
  __typename?: 'AnnouncementsFields_titleTH_Update';
  permission: Scalars['Boolean'];
};

export type AnnouncementsReadAccess = {
  __typename?: 'AnnouncementsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsReadDocAccess = {
  __typename?: 'AnnouncementsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsUpdateAccess = {
  __typename?: 'AnnouncementsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AnnouncementsUpdateDocAccess = {
  __typename?: 'AnnouncementsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Facilities = {
  __typename?: 'Facilities';
  docs?: Maybe<Array<Maybe<Facility>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type FacilitiesCreateAccess = {
  __typename?: 'FacilitiesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesCreateDocAccess = {
  __typename?: 'FacilitiesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesDeleteAccess = {
  __typename?: 'FacilitiesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesDeleteDocAccess = {
  __typename?: 'FacilitiesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesDocAccessFields = {
  __typename?: 'FacilitiesDocAccessFields';
  busLines?: Maybe<FacilitiesDocAccessFields_BusLines>;
  detailEN?: Maybe<FacilitiesDocAccessFields_DetailEn>;
  detailTH?: Maybe<FacilitiesDocAccessFields_DetailTh>;
  geolocation?: Maybe<FacilitiesDocAccessFields_Geolocation>;
  isWarning?: Maybe<FacilitiesDocAccessFields_IsWarning>;
  length?: Maybe<FacilitiesDocAccessFields_Length>;
  place?: Maybe<FacilitiesDocAccessFields_Place>;
  rise?: Maybe<FacilitiesDocAccessFields_Rise>;
  status?: Maybe<FacilitiesDocAccessFields_Status>;
  tramLines?: Maybe<FacilitiesDocAccessFields_TramLines>;
  type?: Maybe<FacilitiesDocAccessFields_Type>;
};

export type FacilitiesDocAccessFields_BusLines = {
  __typename?: 'FacilitiesDocAccessFields_busLines';
  create?: Maybe<FacilitiesDocAccessFields_BusLines_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_BusLines_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_BusLines_Read>;
  update?: Maybe<FacilitiesDocAccessFields_BusLines_Update>;
};

export type FacilitiesDocAccessFields_BusLines_Create = {
  __typename?: 'FacilitiesDocAccessFields_busLines_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_BusLines_Delete = {
  __typename?: 'FacilitiesDocAccessFields_busLines_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_BusLines_Read = {
  __typename?: 'FacilitiesDocAccessFields_busLines_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_BusLines_Update = {
  __typename?: 'FacilitiesDocAccessFields_busLines_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailEn = {
  __typename?: 'FacilitiesDocAccessFields_detailEN';
  create?: Maybe<FacilitiesDocAccessFields_DetailEn_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_DetailEn_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_DetailEn_Read>;
  update?: Maybe<FacilitiesDocAccessFields_DetailEn_Update>;
};

export type FacilitiesDocAccessFields_DetailEn_Create = {
  __typename?: 'FacilitiesDocAccessFields_detailEN_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailEn_Delete = {
  __typename?: 'FacilitiesDocAccessFields_detailEN_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailEn_Read = {
  __typename?: 'FacilitiesDocAccessFields_detailEN_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailEn_Update = {
  __typename?: 'FacilitiesDocAccessFields_detailEN_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailTh = {
  __typename?: 'FacilitiesDocAccessFields_detailTH';
  create?: Maybe<FacilitiesDocAccessFields_DetailTh_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_DetailTh_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_DetailTh_Read>;
  update?: Maybe<FacilitiesDocAccessFields_DetailTh_Update>;
};

export type FacilitiesDocAccessFields_DetailTh_Create = {
  __typename?: 'FacilitiesDocAccessFields_detailTH_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailTh_Delete = {
  __typename?: 'FacilitiesDocAccessFields_detailTH_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailTh_Read = {
  __typename?: 'FacilitiesDocAccessFields_detailTH_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_DetailTh_Update = {
  __typename?: 'FacilitiesDocAccessFields_detailTH_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Geolocation = {
  __typename?: 'FacilitiesDocAccessFields_geolocation';
  create?: Maybe<FacilitiesDocAccessFields_Geolocation_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_Geolocation_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_Geolocation_Read>;
  update?: Maybe<FacilitiesDocAccessFields_Geolocation_Update>;
};

export type FacilitiesDocAccessFields_Geolocation_Create = {
  __typename?: 'FacilitiesDocAccessFields_geolocation_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Geolocation_Delete = {
  __typename?: 'FacilitiesDocAccessFields_geolocation_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Geolocation_Read = {
  __typename?: 'FacilitiesDocAccessFields_geolocation_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Geolocation_Update = {
  __typename?: 'FacilitiesDocAccessFields_geolocation_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_IsWarning = {
  __typename?: 'FacilitiesDocAccessFields_isWarning';
  create?: Maybe<FacilitiesDocAccessFields_IsWarning_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_IsWarning_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_IsWarning_Read>;
  update?: Maybe<FacilitiesDocAccessFields_IsWarning_Update>;
};

export type FacilitiesDocAccessFields_IsWarning_Create = {
  __typename?: 'FacilitiesDocAccessFields_isWarning_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_IsWarning_Delete = {
  __typename?: 'FacilitiesDocAccessFields_isWarning_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_IsWarning_Read = {
  __typename?: 'FacilitiesDocAccessFields_isWarning_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_IsWarning_Update = {
  __typename?: 'FacilitiesDocAccessFields_isWarning_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Length = {
  __typename?: 'FacilitiesDocAccessFields_length';
  create?: Maybe<FacilitiesDocAccessFields_Length_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_Length_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_Length_Read>;
  update?: Maybe<FacilitiesDocAccessFields_Length_Update>;
};

export type FacilitiesDocAccessFields_Length_Create = {
  __typename?: 'FacilitiesDocAccessFields_length_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Length_Delete = {
  __typename?: 'FacilitiesDocAccessFields_length_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Length_Read = {
  __typename?: 'FacilitiesDocAccessFields_length_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Length_Update = {
  __typename?: 'FacilitiesDocAccessFields_length_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Place = {
  __typename?: 'FacilitiesDocAccessFields_place';
  create?: Maybe<FacilitiesDocAccessFields_Place_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_Place_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_Place_Read>;
  update?: Maybe<FacilitiesDocAccessFields_Place_Update>;
};

export type FacilitiesDocAccessFields_Place_Create = {
  __typename?: 'FacilitiesDocAccessFields_place_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Place_Delete = {
  __typename?: 'FacilitiesDocAccessFields_place_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Place_Read = {
  __typename?: 'FacilitiesDocAccessFields_place_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Place_Update = {
  __typename?: 'FacilitiesDocAccessFields_place_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Rise = {
  __typename?: 'FacilitiesDocAccessFields_rise';
  create?: Maybe<FacilitiesDocAccessFields_Rise_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_Rise_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_Rise_Read>;
  update?: Maybe<FacilitiesDocAccessFields_Rise_Update>;
};

export type FacilitiesDocAccessFields_Rise_Create = {
  __typename?: 'FacilitiesDocAccessFields_rise_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Rise_Delete = {
  __typename?: 'FacilitiesDocAccessFields_rise_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Rise_Read = {
  __typename?: 'FacilitiesDocAccessFields_rise_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Rise_Update = {
  __typename?: 'FacilitiesDocAccessFields_rise_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Status = {
  __typename?: 'FacilitiesDocAccessFields_status';
  create?: Maybe<FacilitiesDocAccessFields_Status_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_Status_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_Status_Read>;
  update?: Maybe<FacilitiesDocAccessFields_Status_Update>;
};

export type FacilitiesDocAccessFields_Status_Create = {
  __typename?: 'FacilitiesDocAccessFields_status_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Status_Delete = {
  __typename?: 'FacilitiesDocAccessFields_status_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Status_Read = {
  __typename?: 'FacilitiesDocAccessFields_status_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Status_Update = {
  __typename?: 'FacilitiesDocAccessFields_status_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_TramLines = {
  __typename?: 'FacilitiesDocAccessFields_tramLines';
  create?: Maybe<FacilitiesDocAccessFields_TramLines_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_TramLines_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_TramLines_Read>;
  update?: Maybe<FacilitiesDocAccessFields_TramLines_Update>;
};

export type FacilitiesDocAccessFields_TramLines_Create = {
  __typename?: 'FacilitiesDocAccessFields_tramLines_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_TramLines_Delete = {
  __typename?: 'FacilitiesDocAccessFields_tramLines_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_TramLines_Read = {
  __typename?: 'FacilitiesDocAccessFields_tramLines_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_TramLines_Update = {
  __typename?: 'FacilitiesDocAccessFields_tramLines_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Type = {
  __typename?: 'FacilitiesDocAccessFields_type';
  create?: Maybe<FacilitiesDocAccessFields_Type_Create>;
  delete?: Maybe<FacilitiesDocAccessFields_Type_Delete>;
  read?: Maybe<FacilitiesDocAccessFields_Type_Read>;
  update?: Maybe<FacilitiesDocAccessFields_Type_Update>;
};

export type FacilitiesDocAccessFields_Type_Create = {
  __typename?: 'FacilitiesDocAccessFields_type_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Type_Delete = {
  __typename?: 'FacilitiesDocAccessFields_type_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Type_Read = {
  __typename?: 'FacilitiesDocAccessFields_type_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesDocAccessFields_Type_Update = {
  __typename?: 'FacilitiesDocAccessFields_type_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields = {
  __typename?: 'FacilitiesFields';
  busLines?: Maybe<FacilitiesFields_BusLines>;
  detailEN?: Maybe<FacilitiesFields_DetailEn>;
  detailTH?: Maybe<FacilitiesFields_DetailTh>;
  geolocation?: Maybe<FacilitiesFields_Geolocation>;
  isWarning?: Maybe<FacilitiesFields_IsWarning>;
  length?: Maybe<FacilitiesFields_Length>;
  place?: Maybe<FacilitiesFields_Place>;
  rise?: Maybe<FacilitiesFields_Rise>;
  status?: Maybe<FacilitiesFields_Status>;
  tramLines?: Maybe<FacilitiesFields_TramLines>;
  type?: Maybe<FacilitiesFields_Type>;
};

export type FacilitiesFields_BusLines = {
  __typename?: 'FacilitiesFields_busLines';
  create?: Maybe<FacilitiesFields_BusLines_Create>;
  delete?: Maybe<FacilitiesFields_BusLines_Delete>;
  read?: Maybe<FacilitiesFields_BusLines_Read>;
  update?: Maybe<FacilitiesFields_BusLines_Update>;
};

export type FacilitiesFields_BusLines_Create = {
  __typename?: 'FacilitiesFields_busLines_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_BusLines_Delete = {
  __typename?: 'FacilitiesFields_busLines_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_BusLines_Read = {
  __typename?: 'FacilitiesFields_busLines_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_BusLines_Update = {
  __typename?: 'FacilitiesFields_busLines_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailEn = {
  __typename?: 'FacilitiesFields_detailEN';
  create?: Maybe<FacilitiesFields_DetailEn_Create>;
  delete?: Maybe<FacilitiesFields_DetailEn_Delete>;
  read?: Maybe<FacilitiesFields_DetailEn_Read>;
  update?: Maybe<FacilitiesFields_DetailEn_Update>;
};

export type FacilitiesFields_DetailEn_Create = {
  __typename?: 'FacilitiesFields_detailEN_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailEn_Delete = {
  __typename?: 'FacilitiesFields_detailEN_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailEn_Read = {
  __typename?: 'FacilitiesFields_detailEN_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailEn_Update = {
  __typename?: 'FacilitiesFields_detailEN_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailTh = {
  __typename?: 'FacilitiesFields_detailTH';
  create?: Maybe<FacilitiesFields_DetailTh_Create>;
  delete?: Maybe<FacilitiesFields_DetailTh_Delete>;
  read?: Maybe<FacilitiesFields_DetailTh_Read>;
  update?: Maybe<FacilitiesFields_DetailTh_Update>;
};

export type FacilitiesFields_DetailTh_Create = {
  __typename?: 'FacilitiesFields_detailTH_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailTh_Delete = {
  __typename?: 'FacilitiesFields_detailTH_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailTh_Read = {
  __typename?: 'FacilitiesFields_detailTH_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_DetailTh_Update = {
  __typename?: 'FacilitiesFields_detailTH_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Geolocation = {
  __typename?: 'FacilitiesFields_geolocation';
  create?: Maybe<FacilitiesFields_Geolocation_Create>;
  delete?: Maybe<FacilitiesFields_Geolocation_Delete>;
  read?: Maybe<FacilitiesFields_Geolocation_Read>;
  update?: Maybe<FacilitiesFields_Geolocation_Update>;
};

export type FacilitiesFields_Geolocation_Create = {
  __typename?: 'FacilitiesFields_geolocation_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Geolocation_Delete = {
  __typename?: 'FacilitiesFields_geolocation_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Geolocation_Read = {
  __typename?: 'FacilitiesFields_geolocation_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Geolocation_Update = {
  __typename?: 'FacilitiesFields_geolocation_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_IsWarning = {
  __typename?: 'FacilitiesFields_isWarning';
  create?: Maybe<FacilitiesFields_IsWarning_Create>;
  delete?: Maybe<FacilitiesFields_IsWarning_Delete>;
  read?: Maybe<FacilitiesFields_IsWarning_Read>;
  update?: Maybe<FacilitiesFields_IsWarning_Update>;
};

export type FacilitiesFields_IsWarning_Create = {
  __typename?: 'FacilitiesFields_isWarning_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_IsWarning_Delete = {
  __typename?: 'FacilitiesFields_isWarning_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_IsWarning_Read = {
  __typename?: 'FacilitiesFields_isWarning_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_IsWarning_Update = {
  __typename?: 'FacilitiesFields_isWarning_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Length = {
  __typename?: 'FacilitiesFields_length';
  create?: Maybe<FacilitiesFields_Length_Create>;
  delete?: Maybe<FacilitiesFields_Length_Delete>;
  read?: Maybe<FacilitiesFields_Length_Read>;
  update?: Maybe<FacilitiesFields_Length_Update>;
};

export type FacilitiesFields_Length_Create = {
  __typename?: 'FacilitiesFields_length_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Length_Delete = {
  __typename?: 'FacilitiesFields_length_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Length_Read = {
  __typename?: 'FacilitiesFields_length_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Length_Update = {
  __typename?: 'FacilitiesFields_length_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Place = {
  __typename?: 'FacilitiesFields_place';
  create?: Maybe<FacilitiesFields_Place_Create>;
  delete?: Maybe<FacilitiesFields_Place_Delete>;
  read?: Maybe<FacilitiesFields_Place_Read>;
  update?: Maybe<FacilitiesFields_Place_Update>;
};

export type FacilitiesFields_Place_Create = {
  __typename?: 'FacilitiesFields_place_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Place_Delete = {
  __typename?: 'FacilitiesFields_place_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Place_Read = {
  __typename?: 'FacilitiesFields_place_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Place_Update = {
  __typename?: 'FacilitiesFields_place_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Rise = {
  __typename?: 'FacilitiesFields_rise';
  create?: Maybe<FacilitiesFields_Rise_Create>;
  delete?: Maybe<FacilitiesFields_Rise_Delete>;
  read?: Maybe<FacilitiesFields_Rise_Read>;
  update?: Maybe<FacilitiesFields_Rise_Update>;
};

export type FacilitiesFields_Rise_Create = {
  __typename?: 'FacilitiesFields_rise_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Rise_Delete = {
  __typename?: 'FacilitiesFields_rise_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Rise_Read = {
  __typename?: 'FacilitiesFields_rise_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Rise_Update = {
  __typename?: 'FacilitiesFields_rise_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Status = {
  __typename?: 'FacilitiesFields_status';
  create?: Maybe<FacilitiesFields_Status_Create>;
  delete?: Maybe<FacilitiesFields_Status_Delete>;
  read?: Maybe<FacilitiesFields_Status_Read>;
  update?: Maybe<FacilitiesFields_Status_Update>;
};

export type FacilitiesFields_Status_Create = {
  __typename?: 'FacilitiesFields_status_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Status_Delete = {
  __typename?: 'FacilitiesFields_status_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Status_Read = {
  __typename?: 'FacilitiesFields_status_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Status_Update = {
  __typename?: 'FacilitiesFields_status_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_TramLines = {
  __typename?: 'FacilitiesFields_tramLines';
  create?: Maybe<FacilitiesFields_TramLines_Create>;
  delete?: Maybe<FacilitiesFields_TramLines_Delete>;
  read?: Maybe<FacilitiesFields_TramLines_Read>;
  update?: Maybe<FacilitiesFields_TramLines_Update>;
};

export type FacilitiesFields_TramLines_Create = {
  __typename?: 'FacilitiesFields_tramLines_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_TramLines_Delete = {
  __typename?: 'FacilitiesFields_tramLines_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_TramLines_Read = {
  __typename?: 'FacilitiesFields_tramLines_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_TramLines_Update = {
  __typename?: 'FacilitiesFields_tramLines_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Type = {
  __typename?: 'FacilitiesFields_type';
  create?: Maybe<FacilitiesFields_Type_Create>;
  delete?: Maybe<FacilitiesFields_Type_Delete>;
  read?: Maybe<FacilitiesFields_Type_Read>;
  update?: Maybe<FacilitiesFields_Type_Update>;
};

export type FacilitiesFields_Type_Create = {
  __typename?: 'FacilitiesFields_type_Create';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Type_Delete = {
  __typename?: 'FacilitiesFields_type_Delete';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Type_Read = {
  __typename?: 'FacilitiesFields_type_Read';
  permission: Scalars['Boolean'];
};

export type FacilitiesFields_Type_Update = {
  __typename?: 'FacilitiesFields_type_Update';
  permission: Scalars['Boolean'];
};

export type FacilitiesReadAccess = {
  __typename?: 'FacilitiesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesReadDocAccess = {
  __typename?: 'FacilitiesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesUpdateAccess = {
  __typename?: 'FacilitiesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FacilitiesUpdateDocAccess = {
  __typename?: 'FacilitiesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Facility = {
  __typename?: 'Facility';
  busLines?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  detailEN?: Maybe<Scalars['String']>;
  detailTH?: Maybe<Scalars['String']>;
  geolocation?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['String']>;
  isWarning?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Float']>;
  place?: Maybe<Place>;
  rise?: Maybe<Scalars['Float']>;
  status?: Maybe<Facility_Status>;
  tramLines?: Maybe<Scalars['JSON']>;
  type: Facility_Type;
  updatedAt: Scalars['DateTime'];
};

export enum FacilityUpdate_Status_MutationInput {
  Accessible = 'accessible',
  Assistance = 'assistance',
  Broken = 'broken',
  Inaccessible = 'inaccessible',
  Normal = 'normal'
}

export enum FacilityUpdate_Type_MutationInput {
  Assistance = 'assistance',
  CurbCut = 'curbCut',
  Elevator = 'elevator',
  Parking = 'parking',
  Ramp = 'ramp',
  Surface = 'surface',
  Toilet = 'toilet',
  Transportation = 'transportation'
}

export type Facility_BusLines_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Facility_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Facility_DetailEn_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Facility_DetailTh_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Facility_Geolocation_Operator = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  greater_than_equal?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  less_than?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  less_than_equal?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  near?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  not_equals?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type Facility_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Facility_IsWarning_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Facility_Length_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Facility_Place_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Facility_Rise_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum Facility_Status {
  Accessible = 'accessible',
  Assistance = 'assistance',
  Broken = 'broken',
  Inaccessible = 'inaccessible',
  Normal = 'normal'
}

export enum Facility_Status_Input {
  Accessible = 'accessible',
  Assistance = 'assistance',
  Broken = 'broken',
  Inaccessible = 'inaccessible',
  Normal = 'normal'
}

export enum Facility_Status_MutationInput {
  Accessible = 'accessible',
  Assistance = 'assistance',
  Broken = 'broken',
  Inaccessible = 'inaccessible',
  Normal = 'normal'
}

export type Facility_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Facility_Status_Input>>>;
  equals?: InputMaybe<Facility_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Facility_Status_Input>>>;
  not_equals?: InputMaybe<Facility_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Facility_Status_Input>>>;
};

export type Facility_TramLines_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export enum Facility_Type {
  Assistance = 'assistance',
  CurbCut = 'curbCut',
  Elevator = 'elevator',
  Parking = 'parking',
  Ramp = 'ramp',
  Surface = 'surface',
  Toilet = 'toilet',
  Transportation = 'transportation'
}

export enum Facility_Type_Input {
  Assistance = 'assistance',
  CurbCut = 'curbCut',
  Elevator = 'elevator',
  Parking = 'parking',
  Ramp = 'ramp',
  Surface = 'surface',
  Toilet = 'toilet',
  Transportation = 'transportation'
}

export enum Facility_Type_MutationInput {
  Assistance = 'assistance',
  CurbCut = 'curbCut',
  Elevator = 'elevator',
  Parking = 'parking',
  Ramp = 'ramp',
  Surface = 'surface',
  Toilet = 'toilet',
  Transportation = 'transportation'
}

export type Facility_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Facility_Type_Input>>>;
  equals?: InputMaybe<Facility_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Facility_Type_Input>>>;
  not_equals?: InputMaybe<Facility_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Facility_Type_Input>>>;
};

export type Facility_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Facility_Where = {
  AND?: InputMaybe<Array<InputMaybe<Facility_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Facility_Where_Or>>>;
  busLines?: InputMaybe<Facility_BusLines_Operator>;
  createdAt?: InputMaybe<Facility_CreatedAt_Operator>;
  detailEN?: InputMaybe<Facility_DetailEn_Operator>;
  detailTH?: InputMaybe<Facility_DetailTh_Operator>;
  geolocation?: InputMaybe<Facility_Geolocation_Operator>;
  id?: InputMaybe<Facility_Id_Operator>;
  isWarning?: InputMaybe<Facility_IsWarning_Operator>;
  length?: InputMaybe<Facility_Length_Operator>;
  place?: InputMaybe<Facility_Place_Operator>;
  rise?: InputMaybe<Facility_Rise_Operator>;
  status?: InputMaybe<Facility_Status_Operator>;
  tramLines?: InputMaybe<Facility_TramLines_Operator>;
  type?: InputMaybe<Facility_Type_Operator>;
  updatedAt?: InputMaybe<Facility_UpdatedAt_Operator>;
};

export type Facility_Where_And = {
  busLines?: InputMaybe<Facility_BusLines_Operator>;
  createdAt?: InputMaybe<Facility_CreatedAt_Operator>;
  detailEN?: InputMaybe<Facility_DetailEn_Operator>;
  detailTH?: InputMaybe<Facility_DetailTh_Operator>;
  geolocation?: InputMaybe<Facility_Geolocation_Operator>;
  id?: InputMaybe<Facility_Id_Operator>;
  isWarning?: InputMaybe<Facility_IsWarning_Operator>;
  length?: InputMaybe<Facility_Length_Operator>;
  place?: InputMaybe<Facility_Place_Operator>;
  rise?: InputMaybe<Facility_Rise_Operator>;
  status?: InputMaybe<Facility_Status_Operator>;
  tramLines?: InputMaybe<Facility_TramLines_Operator>;
  type?: InputMaybe<Facility_Type_Operator>;
  updatedAt?: InputMaybe<Facility_UpdatedAt_Operator>;
};

export type Facility_Where_Or = {
  busLines?: InputMaybe<Facility_BusLines_Operator>;
  createdAt?: InputMaybe<Facility_CreatedAt_Operator>;
  detailEN?: InputMaybe<Facility_DetailEn_Operator>;
  detailTH?: InputMaybe<Facility_DetailTh_Operator>;
  geolocation?: InputMaybe<Facility_Geolocation_Operator>;
  id?: InputMaybe<Facility_Id_Operator>;
  isWarning?: InputMaybe<Facility_IsWarning_Operator>;
  length?: InputMaybe<Facility_Length_Operator>;
  place?: InputMaybe<Facility_Place_Operator>;
  rise?: InputMaybe<Facility_Rise_Operator>;
  status?: InputMaybe<Facility_Status_Operator>;
  tramLines?: InputMaybe<Facility_TramLines_Operator>;
  type?: InputMaybe<Facility_Type_Operator>;
  updatedAt?: InputMaybe<Facility_UpdatedAt_Operator>;
};

export type Media = {
  __typename?: 'Media';
  createdAt: Scalars['DateTime'];
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  tablet?: Maybe<MediaDocAccessFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet = {
  __typename?: 'MediaDocAccessFields_sizes_tablet';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width>;
};

export type MediaDocAccessFields_Sizes_Tablet_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  tablet?: Maybe<MediaFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet = {
  __typename?: 'MediaFields_sizes_tablet';
  create?: Maybe<MediaFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Update>;
};

export type MediaFields_Sizes_Tablet_Create = {
  __typename?: 'MediaFields_sizes_tablet_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Delete = {
  __typename?: 'MediaFields_sizes_tablet_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Fields = {
  __typename?: 'MediaFields_sizes_tablet_Fields';
  filename?: Maybe<MediaFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaFields_Sizes_Tablet_Width>;
};

export type MediaFields_Sizes_Tablet_Read = {
  __typename?: 'MediaFields_sizes_tablet_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Update = {
  __typename?: 'MediaFields_sizes_tablet_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filename = {
  __typename?: 'MediaFields_sizes_tablet_filename';
  create?: Maybe<MediaFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filename_Update>;
};

export type MediaFields_Sizes_Tablet_Filename_Create = {
  __typename?: 'MediaFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filename_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filename_Read = {
  __typename?: 'MediaFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filename_Update = {
  __typename?: 'MediaFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filesize = {
  __typename?: 'MediaFields_sizes_tablet_filesize';
  create?: Maybe<MediaFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaFields_Sizes_Tablet_Filesize_Create = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filesize_Read = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Filesize_Update = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Height = {
  __typename?: 'MediaFields_sizes_tablet_height';
  create?: Maybe<MediaFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Height_Update>;
};

export type MediaFields_Sizes_Tablet_Height_Create = {
  __typename?: 'MediaFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Height_Delete = {
  __typename?: 'MediaFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Height_Read = {
  __typename?: 'MediaFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Height_Update = {
  __typename?: 'MediaFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_MimeType = {
  __typename?: 'MediaFields_sizes_tablet_mimeType';
  create?: Maybe<MediaFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaFields_Sizes_Tablet_MimeType_Create = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_MimeType_Read = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_MimeType_Update = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Url = {
  __typename?: 'MediaFields_sizes_tablet_url';
  create?: Maybe<MediaFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Url_Update>;
};

export type MediaFields_Sizes_Tablet_Url_Create = {
  __typename?: 'MediaFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Url_Delete = {
  __typename?: 'MediaFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Url_Read = {
  __typename?: 'MediaFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Url_Update = {
  __typename?: 'MediaFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Width = {
  __typename?: 'MediaFields_sizes_tablet_width';
  create?: Maybe<MediaFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Width_Update>;
};

export type MediaFields_Sizes_Tablet_Width_Create = {
  __typename?: 'MediaFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Width_Delete = {
  __typename?: 'MediaFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Width_Read = {
  __typename?: 'MediaFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Tablet_Width_Update = {
  __typename?: 'MediaFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  tablet?: Maybe<Media_Sizes_Tablet>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Tablet = {
  __typename?: 'Media_Sizes_Tablet';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<Admin>;
  createAnnouncement?: Maybe<Announcement>;
  createFacility?: Maybe<Facility>;
  createMedia?: Maybe<Media>;
  createPlace?: Maybe<Place>;
  createReview?: Maybe<Review>;
  createRoute?: Maybe<Route>;
  createTracedRoute?: Maybe<TracedRoute>;
  createUser?: Maybe<User>;
  deleteAdmin?: Maybe<Admin>;
  deleteAnnouncement?: Maybe<Announcement>;
  deleteFacility?: Maybe<Facility>;
  deleteMedia?: Maybe<Media>;
  deletePlace?: Maybe<Place>;
  deletePreference?: Maybe<Preference>;
  deleteReview?: Maybe<Review>;
  deleteRoute?: Maybe<Route>;
  deleteTracedRoute?: Maybe<TracedRoute>;
  deleteUser?: Maybe<User>;
  forgotPasswordAdmin: Scalars['Boolean'];
  forgotPasswordUser: Scalars['Boolean'];
  loginAdmin?: Maybe<AdminsLoginResult>;
  loginUser?: Maybe<UsersLoginResult>;
  logoutAdmin?: Maybe<Scalars['String']>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenAdmin?: Maybe<AdminsRefreshedAdmin>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordAdmin?: Maybe<AdminsResetPassword>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockAdmin: Scalars['Boolean'];
  unlockUser: Scalars['Boolean'];
  updateAdmin?: Maybe<Admin>;
  updateAnnouncement?: Maybe<Announcement>;
  updateFacility?: Maybe<Facility>;
  updateMedia?: Maybe<Media>;
  updatePlace?: Maybe<Place>;
  updatePreference?: Maybe<Preference>;
  updateReview?: Maybe<Review>;
  updateRoute?: Maybe<Route>;
  updateTracedRoute?: Maybe<TracedRoute>;
  updateUser?: Maybe<User>;
  verifyEmailAdmin?: Maybe<Scalars['Boolean']>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAdminArgs = {
  data: MutationAdminInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateAnnouncementArgs = {
  data: MutationAnnouncementInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateFacilityArgs = {
  data: MutationFacilityInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePlaceArgs = {
  data: MutationPlaceInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateReviewArgs = {
  data: MutationReviewInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateRouteArgs = {
  data: MutationRouteInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTracedRouteArgs = {
  data: MutationTracedRouteInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['String'];
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFacilityArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeletePlaceArgs = {
  id: Scalars['String'];
};


export type MutationDeletePreferenceArgs = {
  key: Scalars['String'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRouteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTracedRouteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordAdminArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginAdminArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenAdminArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordAdminArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockAdminArgs = {
  email: Scalars['String'];
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAdminArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationAdminUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateAnnouncementArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationAnnouncementUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateFacilityArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationFacilityUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePlaceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPlaceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePreferenceArgs = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpdateReviewArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationReviewUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateRouteArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationRouteUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateTracedRouteArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationTracedRouteUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailAdminArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  category: Place_Category;
  createdAt: Scalars['DateTime'];
  geolocation?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  placeAddressEN?: Maybe<Scalars['String']>;
  placeAddressTH?: Maybe<Scalars['String']>;
  placeCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};


export type PlaceImageArgs = {
  where?: InputMaybe<Place_Image_Where>;
};

export enum PlaceUpdate_Category_MutationInput {
  Building = 'building',
  Cafe = 'cafe',
  Food = 'food',
  Park = 'park',
  Parking = 'parking',
  Residence = 'residence',
  Sport = 'sport'
}

export type Place_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Place_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Place_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Place_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Place_Image_Where_Or>>>;
  filename?: InputMaybe<Place_Image_Filename_Operator>;
  filesize?: InputMaybe<Place_Image_Filesize_Operator>;
  height?: InputMaybe<Place_Image_Height_Operator>;
  id?: InputMaybe<Place_Image_Id_Operator>;
  mimeType?: InputMaybe<Place_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Place_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Place_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Place_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Place_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Place_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Place_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Place_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Place_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Place_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Place_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Place_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Place_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Place_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Place_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Place_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Place_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Place_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Place_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Place_Image_Url_Operator>;
  width?: InputMaybe<Place_Image_Width_Operator>;
};

export type Place_Image_Where_And = {
  filename?: InputMaybe<Place_Image_Filename_Operator>;
  filesize?: InputMaybe<Place_Image_Filesize_Operator>;
  height?: InputMaybe<Place_Image_Height_Operator>;
  id?: InputMaybe<Place_Image_Id_Operator>;
  mimeType?: InputMaybe<Place_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Place_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Place_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Place_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Place_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Place_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Place_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Place_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Place_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Place_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Place_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Place_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Place_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Place_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Place_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Place_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Place_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Place_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Place_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Place_Image_Url_Operator>;
  width?: InputMaybe<Place_Image_Width_Operator>;
};

export type Place_Image_Where_Or = {
  filename?: InputMaybe<Place_Image_Filename_Operator>;
  filesize?: InputMaybe<Place_Image_Filesize_Operator>;
  height?: InputMaybe<Place_Image_Height_Operator>;
  id?: InputMaybe<Place_Image_Id_Operator>;
  mimeType?: InputMaybe<Place_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Place_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Place_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Place_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Place_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Place_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Place_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Place_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Place_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Place_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Place_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Place_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Place_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Place_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Place_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Place_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Place_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Place_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Place_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Place_Image_Url_Operator>;
  width?: InputMaybe<Place_Image_Width_Operator>;
};

export type Place_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum Place_Category {
  Building = 'building',
  Cafe = 'cafe',
  Food = 'food',
  Park = 'park',
  Parking = 'parking',
  Residence = 'residence',
  Sport = 'sport'
}

export enum Place_Category_Input {
  Building = 'building',
  Cafe = 'cafe',
  Food = 'food',
  Park = 'park',
  Parking = 'parking',
  Residence = 'residence',
  Sport = 'sport'
}

export enum Place_Category_MutationInput {
  Building = 'building',
  Cafe = 'cafe',
  Food = 'food',
  Park = 'park',
  Parking = 'parking',
  Residence = 'residence',
  Sport = 'sport'
}

export type Place_Category_Operator = {
  all?: InputMaybe<Array<InputMaybe<Place_Category_Input>>>;
  equals?: InputMaybe<Place_Category_Input>;
  in?: InputMaybe<Array<InputMaybe<Place_Category_Input>>>;
  not_equals?: InputMaybe<Place_Category_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Place_Category_Input>>>;
};

export type Place_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Place_Geolocation_Operator = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  greater_than_equal?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  less_than?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  less_than_equal?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  near?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  not_equals?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type Place_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Place_Image_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Place_NameEn_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_NameTh_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_PlaceAddressEn_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Place_PlaceAddressTh_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Place_PlaceCode_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Place_Website_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Place_Where = {
  AND?: InputMaybe<Array<InputMaybe<Place_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Place_Where_Or>>>;
  category?: InputMaybe<Place_Category_Operator>;
  createdAt?: InputMaybe<Place_CreatedAt_Operator>;
  geolocation?: InputMaybe<Place_Geolocation_Operator>;
  id?: InputMaybe<Place_Id_Operator>;
  image?: InputMaybe<Place_Image_Operator>;
  nameEN?: InputMaybe<Place_NameEn_Operator>;
  nameTH?: InputMaybe<Place_NameTh_Operator>;
  phone?: InputMaybe<Place_Phone_Operator>;
  placeAddressEN?: InputMaybe<Place_PlaceAddressEn_Operator>;
  placeAddressTH?: InputMaybe<Place_PlaceAddressTh_Operator>;
  placeCode?: InputMaybe<Place_PlaceCode_Operator>;
  updatedAt?: InputMaybe<Place_UpdatedAt_Operator>;
  website?: InputMaybe<Place_Website_Operator>;
};

export type Place_Where_And = {
  category?: InputMaybe<Place_Category_Operator>;
  createdAt?: InputMaybe<Place_CreatedAt_Operator>;
  geolocation?: InputMaybe<Place_Geolocation_Operator>;
  id?: InputMaybe<Place_Id_Operator>;
  image?: InputMaybe<Place_Image_Operator>;
  nameEN?: InputMaybe<Place_NameEn_Operator>;
  nameTH?: InputMaybe<Place_NameTh_Operator>;
  phone?: InputMaybe<Place_Phone_Operator>;
  placeAddressEN?: InputMaybe<Place_PlaceAddressEn_Operator>;
  placeAddressTH?: InputMaybe<Place_PlaceAddressTh_Operator>;
  placeCode?: InputMaybe<Place_PlaceCode_Operator>;
  updatedAt?: InputMaybe<Place_UpdatedAt_Operator>;
  website?: InputMaybe<Place_Website_Operator>;
};

export type Place_Where_Or = {
  category?: InputMaybe<Place_Category_Operator>;
  createdAt?: InputMaybe<Place_CreatedAt_Operator>;
  geolocation?: InputMaybe<Place_Geolocation_Operator>;
  id?: InputMaybe<Place_Id_Operator>;
  image?: InputMaybe<Place_Image_Operator>;
  nameEN?: InputMaybe<Place_NameEn_Operator>;
  nameTH?: InputMaybe<Place_NameTh_Operator>;
  phone?: InputMaybe<Place_Phone_Operator>;
  placeAddressEN?: InputMaybe<Place_PlaceAddressEn_Operator>;
  placeAddressTH?: InputMaybe<Place_PlaceAddressTh_Operator>;
  placeCode?: InputMaybe<Place_PlaceCode_Operator>;
  updatedAt?: InputMaybe<Place_UpdatedAt_Operator>;
  website?: InputMaybe<Place_Website_Operator>;
};

export type Places = {
  __typename?: 'Places';
  docs?: Maybe<Array<Maybe<Place>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PlacesCreateAccess = {
  __typename?: 'PlacesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesCreateDocAccess = {
  __typename?: 'PlacesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesDeleteAccess = {
  __typename?: 'PlacesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesDeleteDocAccess = {
  __typename?: 'PlacesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesDocAccessFields = {
  __typename?: 'PlacesDocAccessFields';
  category?: Maybe<PlacesDocAccessFields_Category>;
  geolocation?: Maybe<PlacesDocAccessFields_Geolocation>;
  image?: Maybe<PlacesDocAccessFields_Image>;
  nameEN?: Maybe<PlacesDocAccessFields_NameEn>;
  nameTH?: Maybe<PlacesDocAccessFields_NameTh>;
  phone?: Maybe<PlacesDocAccessFields_Phone>;
  placeAddressEN?: Maybe<PlacesDocAccessFields_PlaceAddressEn>;
  placeAddressTH?: Maybe<PlacesDocAccessFields_PlaceAddressTh>;
  placeCode?: Maybe<PlacesDocAccessFields_PlaceCode>;
  website?: Maybe<PlacesDocAccessFields_Website>;
};

export type PlacesDocAccessFields_Category = {
  __typename?: 'PlacesDocAccessFields_category';
  create?: Maybe<PlacesDocAccessFields_Category_Create>;
  delete?: Maybe<PlacesDocAccessFields_Category_Delete>;
  read?: Maybe<PlacesDocAccessFields_Category_Read>;
  update?: Maybe<PlacesDocAccessFields_Category_Update>;
};

export type PlacesDocAccessFields_Category_Create = {
  __typename?: 'PlacesDocAccessFields_category_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Category_Delete = {
  __typename?: 'PlacesDocAccessFields_category_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Category_Read = {
  __typename?: 'PlacesDocAccessFields_category_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Category_Update = {
  __typename?: 'PlacesDocAccessFields_category_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Geolocation = {
  __typename?: 'PlacesDocAccessFields_geolocation';
  create?: Maybe<PlacesDocAccessFields_Geolocation_Create>;
  delete?: Maybe<PlacesDocAccessFields_Geolocation_Delete>;
  read?: Maybe<PlacesDocAccessFields_Geolocation_Read>;
  update?: Maybe<PlacesDocAccessFields_Geolocation_Update>;
};

export type PlacesDocAccessFields_Geolocation_Create = {
  __typename?: 'PlacesDocAccessFields_geolocation_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Geolocation_Delete = {
  __typename?: 'PlacesDocAccessFields_geolocation_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Geolocation_Read = {
  __typename?: 'PlacesDocAccessFields_geolocation_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Geolocation_Update = {
  __typename?: 'PlacesDocAccessFields_geolocation_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Image = {
  __typename?: 'PlacesDocAccessFields_image';
  create?: Maybe<PlacesDocAccessFields_Image_Create>;
  delete?: Maybe<PlacesDocAccessFields_Image_Delete>;
  read?: Maybe<PlacesDocAccessFields_Image_Read>;
  update?: Maybe<PlacesDocAccessFields_Image_Update>;
};

export type PlacesDocAccessFields_Image_Create = {
  __typename?: 'PlacesDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Image_Delete = {
  __typename?: 'PlacesDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Image_Read = {
  __typename?: 'PlacesDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Image_Update = {
  __typename?: 'PlacesDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameEn = {
  __typename?: 'PlacesDocAccessFields_nameEN';
  create?: Maybe<PlacesDocAccessFields_NameEn_Create>;
  delete?: Maybe<PlacesDocAccessFields_NameEn_Delete>;
  read?: Maybe<PlacesDocAccessFields_NameEn_Read>;
  update?: Maybe<PlacesDocAccessFields_NameEn_Update>;
};

export type PlacesDocAccessFields_NameEn_Create = {
  __typename?: 'PlacesDocAccessFields_nameEN_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameEn_Delete = {
  __typename?: 'PlacesDocAccessFields_nameEN_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameEn_Read = {
  __typename?: 'PlacesDocAccessFields_nameEN_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameEn_Update = {
  __typename?: 'PlacesDocAccessFields_nameEN_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameTh = {
  __typename?: 'PlacesDocAccessFields_nameTH';
  create?: Maybe<PlacesDocAccessFields_NameTh_Create>;
  delete?: Maybe<PlacesDocAccessFields_NameTh_Delete>;
  read?: Maybe<PlacesDocAccessFields_NameTh_Read>;
  update?: Maybe<PlacesDocAccessFields_NameTh_Update>;
};

export type PlacesDocAccessFields_NameTh_Create = {
  __typename?: 'PlacesDocAccessFields_nameTH_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameTh_Delete = {
  __typename?: 'PlacesDocAccessFields_nameTH_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameTh_Read = {
  __typename?: 'PlacesDocAccessFields_nameTH_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_NameTh_Update = {
  __typename?: 'PlacesDocAccessFields_nameTH_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Phone = {
  __typename?: 'PlacesDocAccessFields_phone';
  create?: Maybe<PlacesDocAccessFields_Phone_Create>;
  delete?: Maybe<PlacesDocAccessFields_Phone_Delete>;
  read?: Maybe<PlacesDocAccessFields_Phone_Read>;
  update?: Maybe<PlacesDocAccessFields_Phone_Update>;
};

export type PlacesDocAccessFields_Phone_Create = {
  __typename?: 'PlacesDocAccessFields_phone_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Phone_Delete = {
  __typename?: 'PlacesDocAccessFields_phone_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Phone_Read = {
  __typename?: 'PlacesDocAccessFields_phone_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Phone_Update = {
  __typename?: 'PlacesDocAccessFields_phone_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressEn = {
  __typename?: 'PlacesDocAccessFields_placeAddressEN';
  create?: Maybe<PlacesDocAccessFields_PlaceAddressEn_Create>;
  delete?: Maybe<PlacesDocAccessFields_PlaceAddressEn_Delete>;
  read?: Maybe<PlacesDocAccessFields_PlaceAddressEn_Read>;
  update?: Maybe<PlacesDocAccessFields_PlaceAddressEn_Update>;
};

export type PlacesDocAccessFields_PlaceAddressEn_Create = {
  __typename?: 'PlacesDocAccessFields_placeAddressEN_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressEn_Delete = {
  __typename?: 'PlacesDocAccessFields_placeAddressEN_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressEn_Read = {
  __typename?: 'PlacesDocAccessFields_placeAddressEN_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressEn_Update = {
  __typename?: 'PlacesDocAccessFields_placeAddressEN_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressTh = {
  __typename?: 'PlacesDocAccessFields_placeAddressTH';
  create?: Maybe<PlacesDocAccessFields_PlaceAddressTh_Create>;
  delete?: Maybe<PlacesDocAccessFields_PlaceAddressTh_Delete>;
  read?: Maybe<PlacesDocAccessFields_PlaceAddressTh_Read>;
  update?: Maybe<PlacesDocAccessFields_PlaceAddressTh_Update>;
};

export type PlacesDocAccessFields_PlaceAddressTh_Create = {
  __typename?: 'PlacesDocAccessFields_placeAddressTH_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressTh_Delete = {
  __typename?: 'PlacesDocAccessFields_placeAddressTH_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressTh_Read = {
  __typename?: 'PlacesDocAccessFields_placeAddressTH_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceAddressTh_Update = {
  __typename?: 'PlacesDocAccessFields_placeAddressTH_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceCode = {
  __typename?: 'PlacesDocAccessFields_placeCode';
  create?: Maybe<PlacesDocAccessFields_PlaceCode_Create>;
  delete?: Maybe<PlacesDocAccessFields_PlaceCode_Delete>;
  read?: Maybe<PlacesDocAccessFields_PlaceCode_Read>;
  update?: Maybe<PlacesDocAccessFields_PlaceCode_Update>;
};

export type PlacesDocAccessFields_PlaceCode_Create = {
  __typename?: 'PlacesDocAccessFields_placeCode_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceCode_Delete = {
  __typename?: 'PlacesDocAccessFields_placeCode_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceCode_Read = {
  __typename?: 'PlacesDocAccessFields_placeCode_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_PlaceCode_Update = {
  __typename?: 'PlacesDocAccessFields_placeCode_Update';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Website = {
  __typename?: 'PlacesDocAccessFields_website';
  create?: Maybe<PlacesDocAccessFields_Website_Create>;
  delete?: Maybe<PlacesDocAccessFields_Website_Delete>;
  read?: Maybe<PlacesDocAccessFields_Website_Read>;
  update?: Maybe<PlacesDocAccessFields_Website_Update>;
};

export type PlacesDocAccessFields_Website_Create = {
  __typename?: 'PlacesDocAccessFields_website_Create';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Website_Delete = {
  __typename?: 'PlacesDocAccessFields_website_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Website_Read = {
  __typename?: 'PlacesDocAccessFields_website_Read';
  permission: Scalars['Boolean'];
};

export type PlacesDocAccessFields_Website_Update = {
  __typename?: 'PlacesDocAccessFields_website_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields = {
  __typename?: 'PlacesFields';
  category?: Maybe<PlacesFields_Category>;
  geolocation?: Maybe<PlacesFields_Geolocation>;
  image?: Maybe<PlacesFields_Image>;
  nameEN?: Maybe<PlacesFields_NameEn>;
  nameTH?: Maybe<PlacesFields_NameTh>;
  phone?: Maybe<PlacesFields_Phone>;
  placeAddressEN?: Maybe<PlacesFields_PlaceAddressEn>;
  placeAddressTH?: Maybe<PlacesFields_PlaceAddressTh>;
  placeCode?: Maybe<PlacesFields_PlaceCode>;
  website?: Maybe<PlacesFields_Website>;
};

export type PlacesFields_Category = {
  __typename?: 'PlacesFields_category';
  create?: Maybe<PlacesFields_Category_Create>;
  delete?: Maybe<PlacesFields_Category_Delete>;
  read?: Maybe<PlacesFields_Category_Read>;
  update?: Maybe<PlacesFields_Category_Update>;
};

export type PlacesFields_Category_Create = {
  __typename?: 'PlacesFields_category_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Category_Delete = {
  __typename?: 'PlacesFields_category_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Category_Read = {
  __typename?: 'PlacesFields_category_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Category_Update = {
  __typename?: 'PlacesFields_category_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Geolocation = {
  __typename?: 'PlacesFields_geolocation';
  create?: Maybe<PlacesFields_Geolocation_Create>;
  delete?: Maybe<PlacesFields_Geolocation_Delete>;
  read?: Maybe<PlacesFields_Geolocation_Read>;
  update?: Maybe<PlacesFields_Geolocation_Update>;
};

export type PlacesFields_Geolocation_Create = {
  __typename?: 'PlacesFields_geolocation_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Geolocation_Delete = {
  __typename?: 'PlacesFields_geolocation_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Geolocation_Read = {
  __typename?: 'PlacesFields_geolocation_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Geolocation_Update = {
  __typename?: 'PlacesFields_geolocation_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Image = {
  __typename?: 'PlacesFields_image';
  create?: Maybe<PlacesFields_Image_Create>;
  delete?: Maybe<PlacesFields_Image_Delete>;
  read?: Maybe<PlacesFields_Image_Read>;
  update?: Maybe<PlacesFields_Image_Update>;
};

export type PlacesFields_Image_Create = {
  __typename?: 'PlacesFields_image_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Image_Delete = {
  __typename?: 'PlacesFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Image_Read = {
  __typename?: 'PlacesFields_image_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Image_Update = {
  __typename?: 'PlacesFields_image_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameEn = {
  __typename?: 'PlacesFields_nameEN';
  create?: Maybe<PlacesFields_NameEn_Create>;
  delete?: Maybe<PlacesFields_NameEn_Delete>;
  read?: Maybe<PlacesFields_NameEn_Read>;
  update?: Maybe<PlacesFields_NameEn_Update>;
};

export type PlacesFields_NameEn_Create = {
  __typename?: 'PlacesFields_nameEN_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameEn_Delete = {
  __typename?: 'PlacesFields_nameEN_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameEn_Read = {
  __typename?: 'PlacesFields_nameEN_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameEn_Update = {
  __typename?: 'PlacesFields_nameEN_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameTh = {
  __typename?: 'PlacesFields_nameTH';
  create?: Maybe<PlacesFields_NameTh_Create>;
  delete?: Maybe<PlacesFields_NameTh_Delete>;
  read?: Maybe<PlacesFields_NameTh_Read>;
  update?: Maybe<PlacesFields_NameTh_Update>;
};

export type PlacesFields_NameTh_Create = {
  __typename?: 'PlacesFields_nameTH_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameTh_Delete = {
  __typename?: 'PlacesFields_nameTH_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameTh_Read = {
  __typename?: 'PlacesFields_nameTH_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_NameTh_Update = {
  __typename?: 'PlacesFields_nameTH_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Phone = {
  __typename?: 'PlacesFields_phone';
  create?: Maybe<PlacesFields_Phone_Create>;
  delete?: Maybe<PlacesFields_Phone_Delete>;
  read?: Maybe<PlacesFields_Phone_Read>;
  update?: Maybe<PlacesFields_Phone_Update>;
};

export type PlacesFields_Phone_Create = {
  __typename?: 'PlacesFields_phone_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Phone_Delete = {
  __typename?: 'PlacesFields_phone_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Phone_Read = {
  __typename?: 'PlacesFields_phone_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Phone_Update = {
  __typename?: 'PlacesFields_phone_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressEn = {
  __typename?: 'PlacesFields_placeAddressEN';
  create?: Maybe<PlacesFields_PlaceAddressEn_Create>;
  delete?: Maybe<PlacesFields_PlaceAddressEn_Delete>;
  read?: Maybe<PlacesFields_PlaceAddressEn_Read>;
  update?: Maybe<PlacesFields_PlaceAddressEn_Update>;
};

export type PlacesFields_PlaceAddressEn_Create = {
  __typename?: 'PlacesFields_placeAddressEN_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressEn_Delete = {
  __typename?: 'PlacesFields_placeAddressEN_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressEn_Read = {
  __typename?: 'PlacesFields_placeAddressEN_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressEn_Update = {
  __typename?: 'PlacesFields_placeAddressEN_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressTh = {
  __typename?: 'PlacesFields_placeAddressTH';
  create?: Maybe<PlacesFields_PlaceAddressTh_Create>;
  delete?: Maybe<PlacesFields_PlaceAddressTh_Delete>;
  read?: Maybe<PlacesFields_PlaceAddressTh_Read>;
  update?: Maybe<PlacesFields_PlaceAddressTh_Update>;
};

export type PlacesFields_PlaceAddressTh_Create = {
  __typename?: 'PlacesFields_placeAddressTH_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressTh_Delete = {
  __typename?: 'PlacesFields_placeAddressTH_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressTh_Read = {
  __typename?: 'PlacesFields_placeAddressTH_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceAddressTh_Update = {
  __typename?: 'PlacesFields_placeAddressTH_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceCode = {
  __typename?: 'PlacesFields_placeCode';
  create?: Maybe<PlacesFields_PlaceCode_Create>;
  delete?: Maybe<PlacesFields_PlaceCode_Delete>;
  read?: Maybe<PlacesFields_PlaceCode_Read>;
  update?: Maybe<PlacesFields_PlaceCode_Update>;
};

export type PlacesFields_PlaceCode_Create = {
  __typename?: 'PlacesFields_placeCode_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceCode_Delete = {
  __typename?: 'PlacesFields_placeCode_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceCode_Read = {
  __typename?: 'PlacesFields_placeCode_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_PlaceCode_Update = {
  __typename?: 'PlacesFields_placeCode_Update';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Website = {
  __typename?: 'PlacesFields_website';
  create?: Maybe<PlacesFields_Website_Create>;
  delete?: Maybe<PlacesFields_Website_Delete>;
  read?: Maybe<PlacesFields_Website_Read>;
  update?: Maybe<PlacesFields_Website_Update>;
};

export type PlacesFields_Website_Create = {
  __typename?: 'PlacesFields_website_Create';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Website_Delete = {
  __typename?: 'PlacesFields_website_Delete';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Website_Read = {
  __typename?: 'PlacesFields_website_Read';
  permission: Scalars['Boolean'];
};

export type PlacesFields_Website_Update = {
  __typename?: 'PlacesFields_website_Update';
  permission: Scalars['Boolean'];
};

export type PlacesReadAccess = {
  __typename?: 'PlacesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesReadDocAccess = {
  __typename?: 'PlacesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesUpdateAccess = {
  __typename?: 'PlacesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PlacesUpdateDocAccess = {
  __typename?: 'PlacesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['JSON']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Admin?: Maybe<Admin>;
  Admins?: Maybe<Admins>;
  Announcement?: Maybe<Announcement>;
  Announcements?: Maybe<Announcements>;
  Facilities?: Maybe<Facilities>;
  Facility?: Maybe<Facility>;
  Media?: Maybe<Media>;
  Place?: Maybe<Place>;
  Places?: Maybe<Places>;
  Preference?: Maybe<Preference>;
  Review?: Maybe<Review>;
  Reviews?: Maybe<Reviews>;
  Route?: Maybe<Route>;
  Routes?: Maybe<Routes>;
  TracedRoute?: Maybe<TracedRoute>;
  TracedRoutes?: Maybe<TracedRoutes>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessAdmin?: Maybe<AdminsDocAccess>;
  docAccessAnnouncement?: Maybe<AnnouncementsDocAccess>;
  docAccessFacility?: Maybe<FacilitiesDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPlace?: Maybe<PlacesDocAccess>;
  docAccessReview?: Maybe<ReviewsDocAccess>;
  docAccessRoute?: Maybe<RoutesDocAccess>;
  docAccessTracedRoute?: Maybe<Traced_RoutesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedAdmin?: Maybe<Scalars['Boolean']>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meAdmin?: Maybe<AdminsMe>;
  meUser?: Maybe<UsersMe>;
};


export type QueryAdminArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryAdminsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Admin_Where>;
};


export type QueryAnnouncementArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryAnnouncementsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Announcement_Where>;
};


export type QueryFacilitiesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Facility_Where>;
};


export type QueryFacilityArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPlaceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPlacesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Place_Where>;
};


export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryReviewArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Review_Where>;
};


export type QueryRouteArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryRoutesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Route_Where>;
};


export type QueryTracedRouteArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryTracedRoutesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TracedRoute_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessAdminArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessAnnouncementArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessFacilityArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPlaceArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessReviewArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessRouteArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessTracedRouteArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  official?: Maybe<Review_Official>;
  place: Place;
  rating?: Maybe<Review_Rating>;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type ReviewImageArgs = {
  where?: InputMaybe<Review_Image_Where>;
};

export enum ReviewUpdate_Rating_Facility_MutationInput {
  Cleanliness = 'cleanliness',
  GreatServiceMind = 'great_service_mind',
  NiceFacilities = 'nice_facilities',
  Safety = 'safety'
}

export type Review_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Review_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Review_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Image_Where_Or>>>;
  filename?: InputMaybe<Review_Image_Filename_Operator>;
  filesize?: InputMaybe<Review_Image_Filesize_Operator>;
  height?: InputMaybe<Review_Image_Height_Operator>;
  id?: InputMaybe<Review_Image_Id_Operator>;
  mimeType?: InputMaybe<Review_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Review_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Review_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Review_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Review_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Review_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Review_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Review_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Review_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Review_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Review_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Review_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Review_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Review_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Review_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Review_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Review_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Review_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Review_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Review_Image_Url_Operator>;
  width?: InputMaybe<Review_Image_Width_Operator>;
};

export type Review_Image_Where_And = {
  filename?: InputMaybe<Review_Image_Filename_Operator>;
  filesize?: InputMaybe<Review_Image_Filesize_Operator>;
  height?: InputMaybe<Review_Image_Height_Operator>;
  id?: InputMaybe<Review_Image_Id_Operator>;
  mimeType?: InputMaybe<Review_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Review_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Review_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Review_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Review_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Review_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Review_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Review_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Review_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Review_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Review_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Review_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Review_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Review_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Review_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Review_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Review_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Review_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Review_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Review_Image_Url_Operator>;
  width?: InputMaybe<Review_Image_Width_Operator>;
};

export type Review_Image_Where_Or = {
  filename?: InputMaybe<Review_Image_Filename_Operator>;
  filesize?: InputMaybe<Review_Image_Filesize_Operator>;
  height?: InputMaybe<Review_Image_Height_Operator>;
  id?: InputMaybe<Review_Image_Id_Operator>;
  mimeType?: InputMaybe<Review_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Review_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Review_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Review_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Review_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Review_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Review_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Review_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Review_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Review_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Review_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Review_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Review_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Review_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Review_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Review_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Review_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Review_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Review_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Review_Image_Url_Operator>;
  width?: InputMaybe<Review_Image_Width_Operator>;
};

export type Review_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Official = {
  __typename?: 'Review_Official';
  comment?: Maybe<Scalars['String']>;
  flagged?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type Review_Rating = {
  __typename?: 'Review_Rating';
  assistance?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  elevator?: Maybe<Scalars['Float']>;
  facility?: Maybe<Array<Review_Rating_Facility>>;
  images?: Maybe<Array<Review_Rating_Images>>;
  overall?: Maybe<Scalars['Float']>;
  parking?: Maybe<Scalars['Float']>;
  ramp?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
  toilet?: Maybe<Scalars['Float']>;
};

export type Review_Rating_Images = {
  __typename?: 'Review_Rating_Images';
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
};


export type Review_Rating_ImagesImageArgs = {
  where?: InputMaybe<Review_Rating_Images_Image_Where>;
};

export type Review_Rating_Images_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Review_Rating_Images_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating_Images_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating_Images_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Review_Rating_Images_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Rating_Images_Image_Where_Or>>>;
  filename?: InputMaybe<Review_Rating_Images_Image_Filename_Operator>;
  filesize?: InputMaybe<Review_Rating_Images_Image_Filesize_Operator>;
  height?: InputMaybe<Review_Rating_Images_Image_Height_Operator>;
  id?: InputMaybe<Review_Rating_Images_Image_Id_Operator>;
  mimeType?: InputMaybe<Review_Rating_Images_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Review_Rating_Images_Image_Url_Operator>;
  width?: InputMaybe<Review_Rating_Images_Image_Width_Operator>;
};

export type Review_Rating_Images_Image_Where_And = {
  filename?: InputMaybe<Review_Rating_Images_Image_Filename_Operator>;
  filesize?: InputMaybe<Review_Rating_Images_Image_Filesize_Operator>;
  height?: InputMaybe<Review_Rating_Images_Image_Height_Operator>;
  id?: InputMaybe<Review_Rating_Images_Image_Id_Operator>;
  mimeType?: InputMaybe<Review_Rating_Images_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Review_Rating_Images_Image_Url_Operator>;
  width?: InputMaybe<Review_Rating_Images_Image_Width_Operator>;
};

export type Review_Rating_Images_Image_Where_Or = {
  filename?: InputMaybe<Review_Rating_Images_Image_Filename_Operator>;
  filesize?: InputMaybe<Review_Rating_Images_Image_Filesize_Operator>;
  height?: InputMaybe<Review_Rating_Images_Image_Height_Operator>;
  id?: InputMaybe<Review_Rating_Images_Image_Id_Operator>;
  mimeType?: InputMaybe<Review_Rating_Images_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Review_Rating_Images_Image_Sizes__Thumbnail__Width_Operator>;
  url?: InputMaybe<Review_Rating_Images_Image_Url_Operator>;
  width?: InputMaybe<Review_Rating_Images_Image_Width_Operator>;
};

export type Review_Rating_Images_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum Review_Rating_Facility {
  Cleanliness = 'cleanliness',
  GreatServiceMind = 'great_service_mind',
  NiceFacilities = 'nice_facilities',
  Safety = 'safety'
}

export enum Review_Rating_Facility_MutationInput {
  Cleanliness = 'cleanliness',
  GreatServiceMind = 'great_service_mind',
  NiceFacilities = 'nice_facilities',
  Safety = 'safety'
}

export type Review_Comment_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Review_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Review_Image_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Review_Official__Comment_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Review_Official__Flagged_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Review_Official__Timestamp_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Review_Place_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating__Assistance_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating__Comment_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Review_Rating__Elevator_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum Review_Rating__Facility_Input {
  Cleanliness = 'cleanliness',
  GreatServiceMind = 'great_service_mind',
  NiceFacilities = 'nice_facilities',
  Safety = 'safety'
}

export type Review_Rating__Facility_Operator = {
  all?: InputMaybe<Array<InputMaybe<Review_Rating__Facility_Input>>>;
  equals?: InputMaybe<Review_Rating__Facility_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Review_Rating__Facility_Input>>>;
  not_equals?: InputMaybe<Review_Rating__Facility_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Review_Rating__Facility_Input>>>;
};

export type Review_Rating__Images__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Rating__Images__Image_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Review_Rating__Overall_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating__Parking_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating__Ramp_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating__Surface_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_Rating__Toilet_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Review_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Review_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Review_Where = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  comment?: InputMaybe<Review_Comment_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  image?: InputMaybe<Review_Image_Operator>;
  official__comment?: InputMaybe<Review_Official__Comment_Operator>;
  official__flagged?: InputMaybe<Review_Official__Flagged_Operator>;
  official__timestamp?: InputMaybe<Review_Official__Timestamp_Operator>;
  place?: InputMaybe<Review_Place_Operator>;
  rating__assistance?: InputMaybe<Review_Rating__Assistance_Operator>;
  rating__comment?: InputMaybe<Review_Rating__Comment_Operator>;
  rating__elevator?: InputMaybe<Review_Rating__Elevator_Operator>;
  rating__facility?: InputMaybe<Review_Rating__Facility_Operator>;
  rating__images__id?: InputMaybe<Review_Rating__Images__Id_Operator>;
  rating__images__image?: InputMaybe<Review_Rating__Images__Image_Operator>;
  rating__overall?: InputMaybe<Review_Rating__Overall_Operator>;
  rating__parking?: InputMaybe<Review_Rating__Parking_Operator>;
  rating__ramp?: InputMaybe<Review_Rating__Ramp_Operator>;
  rating__surface?: InputMaybe<Review_Rating__Surface_Operator>;
  rating__toilet?: InputMaybe<Review_Rating__Toilet_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
  user?: InputMaybe<Review_User_Operator>;
};

export type Review_Where_And = {
  comment?: InputMaybe<Review_Comment_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  image?: InputMaybe<Review_Image_Operator>;
  official__comment?: InputMaybe<Review_Official__Comment_Operator>;
  official__flagged?: InputMaybe<Review_Official__Flagged_Operator>;
  official__timestamp?: InputMaybe<Review_Official__Timestamp_Operator>;
  place?: InputMaybe<Review_Place_Operator>;
  rating__assistance?: InputMaybe<Review_Rating__Assistance_Operator>;
  rating__comment?: InputMaybe<Review_Rating__Comment_Operator>;
  rating__elevator?: InputMaybe<Review_Rating__Elevator_Operator>;
  rating__facility?: InputMaybe<Review_Rating__Facility_Operator>;
  rating__images__id?: InputMaybe<Review_Rating__Images__Id_Operator>;
  rating__images__image?: InputMaybe<Review_Rating__Images__Image_Operator>;
  rating__overall?: InputMaybe<Review_Rating__Overall_Operator>;
  rating__parking?: InputMaybe<Review_Rating__Parking_Operator>;
  rating__ramp?: InputMaybe<Review_Rating__Ramp_Operator>;
  rating__surface?: InputMaybe<Review_Rating__Surface_Operator>;
  rating__toilet?: InputMaybe<Review_Rating__Toilet_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
  user?: InputMaybe<Review_User_Operator>;
};

export type Review_Where_Or = {
  comment?: InputMaybe<Review_Comment_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  image?: InputMaybe<Review_Image_Operator>;
  official__comment?: InputMaybe<Review_Official__Comment_Operator>;
  official__flagged?: InputMaybe<Review_Official__Flagged_Operator>;
  official__timestamp?: InputMaybe<Review_Official__Timestamp_Operator>;
  place?: InputMaybe<Review_Place_Operator>;
  rating__assistance?: InputMaybe<Review_Rating__Assistance_Operator>;
  rating__comment?: InputMaybe<Review_Rating__Comment_Operator>;
  rating__elevator?: InputMaybe<Review_Rating__Elevator_Operator>;
  rating__facility?: InputMaybe<Review_Rating__Facility_Operator>;
  rating__images__id?: InputMaybe<Review_Rating__Images__Id_Operator>;
  rating__images__image?: InputMaybe<Review_Rating__Images__Image_Operator>;
  rating__overall?: InputMaybe<Review_Rating__Overall_Operator>;
  rating__parking?: InputMaybe<Review_Rating__Parking_Operator>;
  rating__ramp?: InputMaybe<Review_Rating__Ramp_Operator>;
  rating__surface?: InputMaybe<Review_Rating__Surface_Operator>;
  rating__toilet?: InputMaybe<Review_Rating__Toilet_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
  user?: InputMaybe<Review_User_Operator>;
};

export type Reviews = {
  __typename?: 'Reviews';
  docs?: Maybe<Array<Maybe<Review>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ReviewsCreateAccess = {
  __typename?: 'ReviewsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsCreateDocAccess = {
  __typename?: 'ReviewsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsDeleteAccess = {
  __typename?: 'ReviewsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsDeleteDocAccess = {
  __typename?: 'ReviewsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsDocAccessFields = {
  __typename?: 'ReviewsDocAccessFields';
  comment?: Maybe<ReviewsDocAccessFields_Comment>;
  image?: Maybe<ReviewsDocAccessFields_Image>;
  official?: Maybe<ReviewsDocAccessFields_Official>;
  place?: Maybe<ReviewsDocAccessFields_Place>;
  rating?: Maybe<ReviewsDocAccessFields_Rating>;
  user?: Maybe<ReviewsDocAccessFields_User>;
};

export type ReviewsDocAccessFields_Comment = {
  __typename?: 'ReviewsDocAccessFields_comment';
  create?: Maybe<ReviewsDocAccessFields_Comment_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Comment_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Comment_Read>;
  update?: Maybe<ReviewsDocAccessFields_Comment_Update>;
};

export type ReviewsDocAccessFields_Comment_Create = {
  __typename?: 'ReviewsDocAccessFields_comment_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Comment_Delete = {
  __typename?: 'ReviewsDocAccessFields_comment_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Comment_Read = {
  __typename?: 'ReviewsDocAccessFields_comment_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Comment_Update = {
  __typename?: 'ReviewsDocAccessFields_comment_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Image = {
  __typename?: 'ReviewsDocAccessFields_image';
  create?: Maybe<ReviewsDocAccessFields_Image_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Image_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Image_Read>;
  update?: Maybe<ReviewsDocAccessFields_Image_Update>;
};

export type ReviewsDocAccessFields_Image_Create = {
  __typename?: 'ReviewsDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Image_Delete = {
  __typename?: 'ReviewsDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Image_Read = {
  __typename?: 'ReviewsDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Image_Update = {
  __typename?: 'ReviewsDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official = {
  __typename?: 'ReviewsDocAccessFields_official';
  create?: Maybe<ReviewsDocAccessFields_Official_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Official_Delete>;
  fields?: Maybe<ReviewsDocAccessFields_Official_Fields>;
  read?: Maybe<ReviewsDocAccessFields_Official_Read>;
  update?: Maybe<ReviewsDocAccessFields_Official_Update>;
};

export type ReviewsDocAccessFields_Official_Create = {
  __typename?: 'ReviewsDocAccessFields_official_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Delete = {
  __typename?: 'ReviewsDocAccessFields_official_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Fields = {
  __typename?: 'ReviewsDocAccessFields_official_Fields';
  comment?: Maybe<ReviewsDocAccessFields_Official_Comment>;
  flagged?: Maybe<ReviewsDocAccessFields_Official_Flagged>;
  timestamp?: Maybe<ReviewsDocAccessFields_Official_Timestamp>;
};

export type ReviewsDocAccessFields_Official_Read = {
  __typename?: 'ReviewsDocAccessFields_official_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Update = {
  __typename?: 'ReviewsDocAccessFields_official_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Comment = {
  __typename?: 'ReviewsDocAccessFields_official_comment';
  create?: Maybe<ReviewsDocAccessFields_Official_Comment_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Official_Comment_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Official_Comment_Read>;
  update?: Maybe<ReviewsDocAccessFields_Official_Comment_Update>;
};

export type ReviewsDocAccessFields_Official_Comment_Create = {
  __typename?: 'ReviewsDocAccessFields_official_comment_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Comment_Delete = {
  __typename?: 'ReviewsDocAccessFields_official_comment_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Comment_Read = {
  __typename?: 'ReviewsDocAccessFields_official_comment_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Comment_Update = {
  __typename?: 'ReviewsDocAccessFields_official_comment_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Flagged = {
  __typename?: 'ReviewsDocAccessFields_official_flagged';
  create?: Maybe<ReviewsDocAccessFields_Official_Flagged_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Official_Flagged_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Official_Flagged_Read>;
  update?: Maybe<ReviewsDocAccessFields_Official_Flagged_Update>;
};

export type ReviewsDocAccessFields_Official_Flagged_Create = {
  __typename?: 'ReviewsDocAccessFields_official_flagged_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Flagged_Delete = {
  __typename?: 'ReviewsDocAccessFields_official_flagged_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Flagged_Read = {
  __typename?: 'ReviewsDocAccessFields_official_flagged_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Flagged_Update = {
  __typename?: 'ReviewsDocAccessFields_official_flagged_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Timestamp = {
  __typename?: 'ReviewsDocAccessFields_official_timestamp';
  create?: Maybe<ReviewsDocAccessFields_Official_Timestamp_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Official_Timestamp_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Official_Timestamp_Read>;
  update?: Maybe<ReviewsDocAccessFields_Official_Timestamp_Update>;
};

export type ReviewsDocAccessFields_Official_Timestamp_Create = {
  __typename?: 'ReviewsDocAccessFields_official_timestamp_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Timestamp_Delete = {
  __typename?: 'ReviewsDocAccessFields_official_timestamp_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Timestamp_Read = {
  __typename?: 'ReviewsDocAccessFields_official_timestamp_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Official_Timestamp_Update = {
  __typename?: 'ReviewsDocAccessFields_official_timestamp_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Place = {
  __typename?: 'ReviewsDocAccessFields_place';
  create?: Maybe<ReviewsDocAccessFields_Place_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Place_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Place_Read>;
  update?: Maybe<ReviewsDocAccessFields_Place_Update>;
};

export type ReviewsDocAccessFields_Place_Create = {
  __typename?: 'ReviewsDocAccessFields_place_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Place_Delete = {
  __typename?: 'ReviewsDocAccessFields_place_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Place_Read = {
  __typename?: 'ReviewsDocAccessFields_place_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Place_Update = {
  __typename?: 'ReviewsDocAccessFields_place_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating = {
  __typename?: 'ReviewsDocAccessFields_rating';
  create?: Maybe<ReviewsDocAccessFields_Rating_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Delete>;
  fields?: Maybe<ReviewsDocAccessFields_Rating_Fields>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Update>;
};

export type ReviewsDocAccessFields_Rating_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Fields = {
  __typename?: 'ReviewsDocAccessFields_rating_Fields';
  assistance?: Maybe<ReviewsDocAccessFields_Rating_Assistance>;
  comment?: Maybe<ReviewsDocAccessFields_Rating_Comment>;
  elevator?: Maybe<ReviewsDocAccessFields_Rating_Elevator>;
  facility?: Maybe<ReviewsDocAccessFields_Rating_Facility>;
  images?: Maybe<ReviewsDocAccessFields_Rating_Images>;
  overall?: Maybe<ReviewsDocAccessFields_Rating_Overall>;
  parking?: Maybe<ReviewsDocAccessFields_Rating_Parking>;
  ramp?: Maybe<ReviewsDocAccessFields_Rating_Ramp>;
  surface?: Maybe<ReviewsDocAccessFields_Rating_Surface>;
  toilet?: Maybe<ReviewsDocAccessFields_Rating_Toilet>;
};

export type ReviewsDocAccessFields_Rating_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Assistance = {
  __typename?: 'ReviewsDocAccessFields_rating_assistance';
  create?: Maybe<ReviewsDocAccessFields_Rating_Assistance_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Assistance_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Assistance_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Assistance_Update>;
};

export type ReviewsDocAccessFields_Rating_Assistance_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_assistance_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Assistance_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_assistance_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Assistance_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_assistance_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Assistance_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_assistance_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Comment = {
  __typename?: 'ReviewsDocAccessFields_rating_comment';
  create?: Maybe<ReviewsDocAccessFields_Rating_Comment_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Comment_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Comment_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Comment_Update>;
};

export type ReviewsDocAccessFields_Rating_Comment_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_comment_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Comment_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_comment_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Comment_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_comment_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Comment_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_comment_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Elevator = {
  __typename?: 'ReviewsDocAccessFields_rating_elevator';
  create?: Maybe<ReviewsDocAccessFields_Rating_Elevator_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Elevator_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Elevator_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Elevator_Update>;
};

export type ReviewsDocAccessFields_Rating_Elevator_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_elevator_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Elevator_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_elevator_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Elevator_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_elevator_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Elevator_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_elevator_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Facility = {
  __typename?: 'ReviewsDocAccessFields_rating_facility';
  create?: Maybe<ReviewsDocAccessFields_Rating_Facility_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Facility_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Facility_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Facility_Update>;
};

export type ReviewsDocAccessFields_Rating_Facility_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_facility_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Facility_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_facility_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Facility_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_facility_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Facility_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_facility_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images = {
  __typename?: 'ReviewsDocAccessFields_rating_images';
  create?: Maybe<ReviewsDocAccessFields_Rating_Images_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Images_Delete>;
  fields?: Maybe<ReviewsDocAccessFields_Rating_Images_Fields>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Images_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Images_Update>;
};

export type ReviewsDocAccessFields_Rating_Images_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_images_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_images_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Fields = {
  __typename?: 'ReviewsDocAccessFields_rating_images_Fields';
  id?: Maybe<ReviewsDocAccessFields_Rating_Images_Id>;
  image?: Maybe<ReviewsDocAccessFields_Rating_Images_Image>;
};

export type ReviewsDocAccessFields_Rating_Images_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_images_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_images_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Id = {
  __typename?: 'ReviewsDocAccessFields_rating_images_id';
  create?: Maybe<ReviewsDocAccessFields_Rating_Images_Id_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Images_Id_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Images_Id_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Images_Id_Update>;
};

export type ReviewsDocAccessFields_Rating_Images_Id_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_images_id_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Id_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_images_id_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Id_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_images_id_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Id_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_images_id_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Image = {
  __typename?: 'ReviewsDocAccessFields_rating_images_image';
  create?: Maybe<ReviewsDocAccessFields_Rating_Images_Image_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Images_Image_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Images_Image_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Images_Image_Update>;
};

export type ReviewsDocAccessFields_Rating_Images_Image_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_images_image_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Image_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_images_image_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Image_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_images_image_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Images_Image_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_images_image_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Overall = {
  __typename?: 'ReviewsDocAccessFields_rating_overall';
  create?: Maybe<ReviewsDocAccessFields_Rating_Overall_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Overall_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Overall_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Overall_Update>;
};

export type ReviewsDocAccessFields_Rating_Overall_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_overall_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Overall_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_overall_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Overall_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_overall_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Overall_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_overall_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Parking = {
  __typename?: 'ReviewsDocAccessFields_rating_parking';
  create?: Maybe<ReviewsDocAccessFields_Rating_Parking_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Parking_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Parking_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Parking_Update>;
};

export type ReviewsDocAccessFields_Rating_Parking_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_parking_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Parking_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_parking_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Parking_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_parking_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Parking_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_parking_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Ramp = {
  __typename?: 'ReviewsDocAccessFields_rating_ramp';
  create?: Maybe<ReviewsDocAccessFields_Rating_Ramp_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Ramp_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Ramp_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Ramp_Update>;
};

export type ReviewsDocAccessFields_Rating_Ramp_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_ramp_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Ramp_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_ramp_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Ramp_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_ramp_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Ramp_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_ramp_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Surface = {
  __typename?: 'ReviewsDocAccessFields_rating_surface';
  create?: Maybe<ReviewsDocAccessFields_Rating_Surface_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Surface_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Surface_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Surface_Update>;
};

export type ReviewsDocAccessFields_Rating_Surface_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_surface_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Surface_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_surface_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Surface_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_surface_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Surface_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_surface_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Toilet = {
  __typename?: 'ReviewsDocAccessFields_rating_toilet';
  create?: Maybe<ReviewsDocAccessFields_Rating_Toilet_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Toilet_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Toilet_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Toilet_Update>;
};

export type ReviewsDocAccessFields_Rating_Toilet_Create = {
  __typename?: 'ReviewsDocAccessFields_rating_toilet_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Toilet_Delete = {
  __typename?: 'ReviewsDocAccessFields_rating_toilet_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Toilet_Read = {
  __typename?: 'ReviewsDocAccessFields_rating_toilet_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_Rating_Toilet_Update = {
  __typename?: 'ReviewsDocAccessFields_rating_toilet_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_User = {
  __typename?: 'ReviewsDocAccessFields_user';
  create?: Maybe<ReviewsDocAccessFields_User_Create>;
  delete?: Maybe<ReviewsDocAccessFields_User_Delete>;
  read?: Maybe<ReviewsDocAccessFields_User_Read>;
  update?: Maybe<ReviewsDocAccessFields_User_Update>;
};

export type ReviewsDocAccessFields_User_Create = {
  __typename?: 'ReviewsDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_User_Delete = {
  __typename?: 'ReviewsDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_User_Read = {
  __typename?: 'ReviewsDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsDocAccessFields_User_Update = {
  __typename?: 'ReviewsDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields = {
  __typename?: 'ReviewsFields';
  comment?: Maybe<ReviewsFields_Comment>;
  image?: Maybe<ReviewsFields_Image>;
  official?: Maybe<ReviewsFields_Official>;
  place?: Maybe<ReviewsFields_Place>;
  rating?: Maybe<ReviewsFields_Rating>;
  user?: Maybe<ReviewsFields_User>;
};

export type ReviewsFields_Comment = {
  __typename?: 'ReviewsFields_comment';
  create?: Maybe<ReviewsFields_Comment_Create>;
  delete?: Maybe<ReviewsFields_Comment_Delete>;
  read?: Maybe<ReviewsFields_Comment_Read>;
  update?: Maybe<ReviewsFields_Comment_Update>;
};

export type ReviewsFields_Comment_Create = {
  __typename?: 'ReviewsFields_comment_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Comment_Delete = {
  __typename?: 'ReviewsFields_comment_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Comment_Read = {
  __typename?: 'ReviewsFields_comment_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Comment_Update = {
  __typename?: 'ReviewsFields_comment_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Image = {
  __typename?: 'ReviewsFields_image';
  create?: Maybe<ReviewsFields_Image_Create>;
  delete?: Maybe<ReviewsFields_Image_Delete>;
  read?: Maybe<ReviewsFields_Image_Read>;
  update?: Maybe<ReviewsFields_Image_Update>;
};

export type ReviewsFields_Image_Create = {
  __typename?: 'ReviewsFields_image_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Image_Delete = {
  __typename?: 'ReviewsFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Image_Read = {
  __typename?: 'ReviewsFields_image_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Image_Update = {
  __typename?: 'ReviewsFields_image_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official = {
  __typename?: 'ReviewsFields_official';
  create?: Maybe<ReviewsFields_Official_Create>;
  delete?: Maybe<ReviewsFields_Official_Delete>;
  fields?: Maybe<ReviewsFields_Official_Fields>;
  read?: Maybe<ReviewsFields_Official_Read>;
  update?: Maybe<ReviewsFields_Official_Update>;
};

export type ReviewsFields_Official_Create = {
  __typename?: 'ReviewsFields_official_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Delete = {
  __typename?: 'ReviewsFields_official_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Fields = {
  __typename?: 'ReviewsFields_official_Fields';
  comment?: Maybe<ReviewsFields_Official_Comment>;
  flagged?: Maybe<ReviewsFields_Official_Flagged>;
  timestamp?: Maybe<ReviewsFields_Official_Timestamp>;
};

export type ReviewsFields_Official_Read = {
  __typename?: 'ReviewsFields_official_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Update = {
  __typename?: 'ReviewsFields_official_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Comment = {
  __typename?: 'ReviewsFields_official_comment';
  create?: Maybe<ReviewsFields_Official_Comment_Create>;
  delete?: Maybe<ReviewsFields_Official_Comment_Delete>;
  read?: Maybe<ReviewsFields_Official_Comment_Read>;
  update?: Maybe<ReviewsFields_Official_Comment_Update>;
};

export type ReviewsFields_Official_Comment_Create = {
  __typename?: 'ReviewsFields_official_comment_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Comment_Delete = {
  __typename?: 'ReviewsFields_official_comment_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Comment_Read = {
  __typename?: 'ReviewsFields_official_comment_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Comment_Update = {
  __typename?: 'ReviewsFields_official_comment_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Flagged = {
  __typename?: 'ReviewsFields_official_flagged';
  create?: Maybe<ReviewsFields_Official_Flagged_Create>;
  delete?: Maybe<ReviewsFields_Official_Flagged_Delete>;
  read?: Maybe<ReviewsFields_Official_Flagged_Read>;
  update?: Maybe<ReviewsFields_Official_Flagged_Update>;
};

export type ReviewsFields_Official_Flagged_Create = {
  __typename?: 'ReviewsFields_official_flagged_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Flagged_Delete = {
  __typename?: 'ReviewsFields_official_flagged_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Flagged_Read = {
  __typename?: 'ReviewsFields_official_flagged_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Flagged_Update = {
  __typename?: 'ReviewsFields_official_flagged_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Timestamp = {
  __typename?: 'ReviewsFields_official_timestamp';
  create?: Maybe<ReviewsFields_Official_Timestamp_Create>;
  delete?: Maybe<ReviewsFields_Official_Timestamp_Delete>;
  read?: Maybe<ReviewsFields_Official_Timestamp_Read>;
  update?: Maybe<ReviewsFields_Official_Timestamp_Update>;
};

export type ReviewsFields_Official_Timestamp_Create = {
  __typename?: 'ReviewsFields_official_timestamp_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Timestamp_Delete = {
  __typename?: 'ReviewsFields_official_timestamp_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Timestamp_Read = {
  __typename?: 'ReviewsFields_official_timestamp_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Official_Timestamp_Update = {
  __typename?: 'ReviewsFields_official_timestamp_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Place = {
  __typename?: 'ReviewsFields_place';
  create?: Maybe<ReviewsFields_Place_Create>;
  delete?: Maybe<ReviewsFields_Place_Delete>;
  read?: Maybe<ReviewsFields_Place_Read>;
  update?: Maybe<ReviewsFields_Place_Update>;
};

export type ReviewsFields_Place_Create = {
  __typename?: 'ReviewsFields_place_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Place_Delete = {
  __typename?: 'ReviewsFields_place_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Place_Read = {
  __typename?: 'ReviewsFields_place_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Place_Update = {
  __typename?: 'ReviewsFields_place_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating = {
  __typename?: 'ReviewsFields_rating';
  create?: Maybe<ReviewsFields_Rating_Create>;
  delete?: Maybe<ReviewsFields_Rating_Delete>;
  fields?: Maybe<ReviewsFields_Rating_Fields>;
  read?: Maybe<ReviewsFields_Rating_Read>;
  update?: Maybe<ReviewsFields_Rating_Update>;
};

export type ReviewsFields_Rating_Create = {
  __typename?: 'ReviewsFields_rating_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Delete = {
  __typename?: 'ReviewsFields_rating_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Fields = {
  __typename?: 'ReviewsFields_rating_Fields';
  assistance?: Maybe<ReviewsFields_Rating_Assistance>;
  comment?: Maybe<ReviewsFields_Rating_Comment>;
  elevator?: Maybe<ReviewsFields_Rating_Elevator>;
  facility?: Maybe<ReviewsFields_Rating_Facility>;
  images?: Maybe<ReviewsFields_Rating_Images>;
  overall?: Maybe<ReviewsFields_Rating_Overall>;
  parking?: Maybe<ReviewsFields_Rating_Parking>;
  ramp?: Maybe<ReviewsFields_Rating_Ramp>;
  surface?: Maybe<ReviewsFields_Rating_Surface>;
  toilet?: Maybe<ReviewsFields_Rating_Toilet>;
};

export type ReviewsFields_Rating_Read = {
  __typename?: 'ReviewsFields_rating_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Update = {
  __typename?: 'ReviewsFields_rating_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Assistance = {
  __typename?: 'ReviewsFields_rating_assistance';
  create?: Maybe<ReviewsFields_Rating_Assistance_Create>;
  delete?: Maybe<ReviewsFields_Rating_Assistance_Delete>;
  read?: Maybe<ReviewsFields_Rating_Assistance_Read>;
  update?: Maybe<ReviewsFields_Rating_Assistance_Update>;
};

export type ReviewsFields_Rating_Assistance_Create = {
  __typename?: 'ReviewsFields_rating_assistance_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Assistance_Delete = {
  __typename?: 'ReviewsFields_rating_assistance_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Assistance_Read = {
  __typename?: 'ReviewsFields_rating_assistance_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Assistance_Update = {
  __typename?: 'ReviewsFields_rating_assistance_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Comment = {
  __typename?: 'ReviewsFields_rating_comment';
  create?: Maybe<ReviewsFields_Rating_Comment_Create>;
  delete?: Maybe<ReviewsFields_Rating_Comment_Delete>;
  read?: Maybe<ReviewsFields_Rating_Comment_Read>;
  update?: Maybe<ReviewsFields_Rating_Comment_Update>;
};

export type ReviewsFields_Rating_Comment_Create = {
  __typename?: 'ReviewsFields_rating_comment_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Comment_Delete = {
  __typename?: 'ReviewsFields_rating_comment_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Comment_Read = {
  __typename?: 'ReviewsFields_rating_comment_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Comment_Update = {
  __typename?: 'ReviewsFields_rating_comment_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Elevator = {
  __typename?: 'ReviewsFields_rating_elevator';
  create?: Maybe<ReviewsFields_Rating_Elevator_Create>;
  delete?: Maybe<ReviewsFields_Rating_Elevator_Delete>;
  read?: Maybe<ReviewsFields_Rating_Elevator_Read>;
  update?: Maybe<ReviewsFields_Rating_Elevator_Update>;
};

export type ReviewsFields_Rating_Elevator_Create = {
  __typename?: 'ReviewsFields_rating_elevator_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Elevator_Delete = {
  __typename?: 'ReviewsFields_rating_elevator_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Elevator_Read = {
  __typename?: 'ReviewsFields_rating_elevator_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Elevator_Update = {
  __typename?: 'ReviewsFields_rating_elevator_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Facility = {
  __typename?: 'ReviewsFields_rating_facility';
  create?: Maybe<ReviewsFields_Rating_Facility_Create>;
  delete?: Maybe<ReviewsFields_Rating_Facility_Delete>;
  read?: Maybe<ReviewsFields_Rating_Facility_Read>;
  update?: Maybe<ReviewsFields_Rating_Facility_Update>;
};

export type ReviewsFields_Rating_Facility_Create = {
  __typename?: 'ReviewsFields_rating_facility_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Facility_Delete = {
  __typename?: 'ReviewsFields_rating_facility_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Facility_Read = {
  __typename?: 'ReviewsFields_rating_facility_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Facility_Update = {
  __typename?: 'ReviewsFields_rating_facility_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images = {
  __typename?: 'ReviewsFields_rating_images';
  create?: Maybe<ReviewsFields_Rating_Images_Create>;
  delete?: Maybe<ReviewsFields_Rating_Images_Delete>;
  fields?: Maybe<ReviewsFields_Rating_Images_Fields>;
  read?: Maybe<ReviewsFields_Rating_Images_Read>;
  update?: Maybe<ReviewsFields_Rating_Images_Update>;
};

export type ReviewsFields_Rating_Images_Create = {
  __typename?: 'ReviewsFields_rating_images_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Delete = {
  __typename?: 'ReviewsFields_rating_images_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Fields = {
  __typename?: 'ReviewsFields_rating_images_Fields';
  id?: Maybe<ReviewsFields_Rating_Images_Id>;
  image?: Maybe<ReviewsFields_Rating_Images_Image>;
};

export type ReviewsFields_Rating_Images_Read = {
  __typename?: 'ReviewsFields_rating_images_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Update = {
  __typename?: 'ReviewsFields_rating_images_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Id = {
  __typename?: 'ReviewsFields_rating_images_id';
  create?: Maybe<ReviewsFields_Rating_Images_Id_Create>;
  delete?: Maybe<ReviewsFields_Rating_Images_Id_Delete>;
  read?: Maybe<ReviewsFields_Rating_Images_Id_Read>;
  update?: Maybe<ReviewsFields_Rating_Images_Id_Update>;
};

export type ReviewsFields_Rating_Images_Id_Create = {
  __typename?: 'ReviewsFields_rating_images_id_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Id_Delete = {
  __typename?: 'ReviewsFields_rating_images_id_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Id_Read = {
  __typename?: 'ReviewsFields_rating_images_id_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Id_Update = {
  __typename?: 'ReviewsFields_rating_images_id_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Image = {
  __typename?: 'ReviewsFields_rating_images_image';
  create?: Maybe<ReviewsFields_Rating_Images_Image_Create>;
  delete?: Maybe<ReviewsFields_Rating_Images_Image_Delete>;
  read?: Maybe<ReviewsFields_Rating_Images_Image_Read>;
  update?: Maybe<ReviewsFields_Rating_Images_Image_Update>;
};

export type ReviewsFields_Rating_Images_Image_Create = {
  __typename?: 'ReviewsFields_rating_images_image_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Image_Delete = {
  __typename?: 'ReviewsFields_rating_images_image_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Image_Read = {
  __typename?: 'ReviewsFields_rating_images_image_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Images_Image_Update = {
  __typename?: 'ReviewsFields_rating_images_image_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Overall = {
  __typename?: 'ReviewsFields_rating_overall';
  create?: Maybe<ReviewsFields_Rating_Overall_Create>;
  delete?: Maybe<ReviewsFields_Rating_Overall_Delete>;
  read?: Maybe<ReviewsFields_Rating_Overall_Read>;
  update?: Maybe<ReviewsFields_Rating_Overall_Update>;
};

export type ReviewsFields_Rating_Overall_Create = {
  __typename?: 'ReviewsFields_rating_overall_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Overall_Delete = {
  __typename?: 'ReviewsFields_rating_overall_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Overall_Read = {
  __typename?: 'ReviewsFields_rating_overall_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Overall_Update = {
  __typename?: 'ReviewsFields_rating_overall_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Parking = {
  __typename?: 'ReviewsFields_rating_parking';
  create?: Maybe<ReviewsFields_Rating_Parking_Create>;
  delete?: Maybe<ReviewsFields_Rating_Parking_Delete>;
  read?: Maybe<ReviewsFields_Rating_Parking_Read>;
  update?: Maybe<ReviewsFields_Rating_Parking_Update>;
};

export type ReviewsFields_Rating_Parking_Create = {
  __typename?: 'ReviewsFields_rating_parking_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Parking_Delete = {
  __typename?: 'ReviewsFields_rating_parking_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Parking_Read = {
  __typename?: 'ReviewsFields_rating_parking_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Parking_Update = {
  __typename?: 'ReviewsFields_rating_parking_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Ramp = {
  __typename?: 'ReviewsFields_rating_ramp';
  create?: Maybe<ReviewsFields_Rating_Ramp_Create>;
  delete?: Maybe<ReviewsFields_Rating_Ramp_Delete>;
  read?: Maybe<ReviewsFields_Rating_Ramp_Read>;
  update?: Maybe<ReviewsFields_Rating_Ramp_Update>;
};

export type ReviewsFields_Rating_Ramp_Create = {
  __typename?: 'ReviewsFields_rating_ramp_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Ramp_Delete = {
  __typename?: 'ReviewsFields_rating_ramp_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Ramp_Read = {
  __typename?: 'ReviewsFields_rating_ramp_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Ramp_Update = {
  __typename?: 'ReviewsFields_rating_ramp_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Surface = {
  __typename?: 'ReviewsFields_rating_surface';
  create?: Maybe<ReviewsFields_Rating_Surface_Create>;
  delete?: Maybe<ReviewsFields_Rating_Surface_Delete>;
  read?: Maybe<ReviewsFields_Rating_Surface_Read>;
  update?: Maybe<ReviewsFields_Rating_Surface_Update>;
};

export type ReviewsFields_Rating_Surface_Create = {
  __typename?: 'ReviewsFields_rating_surface_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Surface_Delete = {
  __typename?: 'ReviewsFields_rating_surface_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Surface_Read = {
  __typename?: 'ReviewsFields_rating_surface_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Surface_Update = {
  __typename?: 'ReviewsFields_rating_surface_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Toilet = {
  __typename?: 'ReviewsFields_rating_toilet';
  create?: Maybe<ReviewsFields_Rating_Toilet_Create>;
  delete?: Maybe<ReviewsFields_Rating_Toilet_Delete>;
  read?: Maybe<ReviewsFields_Rating_Toilet_Read>;
  update?: Maybe<ReviewsFields_Rating_Toilet_Update>;
};

export type ReviewsFields_Rating_Toilet_Create = {
  __typename?: 'ReviewsFields_rating_toilet_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Toilet_Delete = {
  __typename?: 'ReviewsFields_rating_toilet_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Toilet_Read = {
  __typename?: 'ReviewsFields_rating_toilet_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_Rating_Toilet_Update = {
  __typename?: 'ReviewsFields_rating_toilet_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_User = {
  __typename?: 'ReviewsFields_user';
  create?: Maybe<ReviewsFields_User_Create>;
  delete?: Maybe<ReviewsFields_User_Delete>;
  read?: Maybe<ReviewsFields_User_Read>;
  update?: Maybe<ReviewsFields_User_Update>;
};

export type ReviewsFields_User_Create = {
  __typename?: 'ReviewsFields_user_Create';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_User_Delete = {
  __typename?: 'ReviewsFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_User_Read = {
  __typename?: 'ReviewsFields_user_Read';
  permission: Scalars['Boolean'];
};

export type ReviewsFields_User_Update = {
  __typename?: 'ReviewsFields_user_Update';
  permission: Scalars['Boolean'];
};

export type ReviewsReadAccess = {
  __typename?: 'ReviewsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsReadDocAccess = {
  __typename?: 'ReviewsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsUpdateAccess = {
  __typename?: 'ReviewsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ReviewsUpdateDocAccess = {
  __typename?: 'ReviewsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Route = {
  __typename?: 'Route';
  createdAt: Scalars['DateTime'];
  destination?: Maybe<Place>;
  distance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  origin?: Maybe<Place>;
  route?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<Route_User_Relationship>;
};

export type RouteUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<RouteUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum RouteUpdate_UserRelationshipInputRelationTo {
  Admins = 'admins',
  Users = 'users'
}

export type Route_User = Admin | User;

export type Route_UserRelationshipInput = {
  relationTo?: InputMaybe<Route_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Route_UserRelationshipInputRelationTo {
  Admins = 'admins',
  Users = 'users'
}

export enum Route_User_RelationTo {
  Admins = 'admins',
  Users = 'users'
}

export type Route_User_Relationship = {
  __typename?: 'Route_User_Relationship';
  relationTo?: Maybe<Route_User_RelationTo>;
  value?: Maybe<Route_User>;
};

export type Route_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Route_Destination_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Route_Distance_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Route_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Route_Origin_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Route_Route_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Route_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Route_User_Relation = {
  relationTo?: InputMaybe<Route_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['String']>;
};

export enum Route_User_Relation_RelationTo {
  Admins = 'admins',
  Users = 'users'
}

export type Route_Where = {
  AND?: InputMaybe<Array<InputMaybe<Route_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Route_Where_Or>>>;
  createdAt?: InputMaybe<Route_CreatedAt_Operator>;
  destination?: InputMaybe<Route_Destination_Operator>;
  distance?: InputMaybe<Route_Distance_Operator>;
  id?: InputMaybe<Route_Id_Operator>;
  origin?: InputMaybe<Route_Origin_Operator>;
  route?: InputMaybe<Route_Route_Operator>;
  updatedAt?: InputMaybe<Route_UpdatedAt_Operator>;
  user?: InputMaybe<Route_User_Relation>;
};

export type Route_Where_And = {
  createdAt?: InputMaybe<Route_CreatedAt_Operator>;
  destination?: InputMaybe<Route_Destination_Operator>;
  distance?: InputMaybe<Route_Distance_Operator>;
  id?: InputMaybe<Route_Id_Operator>;
  origin?: InputMaybe<Route_Origin_Operator>;
  route?: InputMaybe<Route_Route_Operator>;
  updatedAt?: InputMaybe<Route_UpdatedAt_Operator>;
  user?: InputMaybe<Route_User_Relation>;
};

export type Route_Where_Or = {
  createdAt?: InputMaybe<Route_CreatedAt_Operator>;
  destination?: InputMaybe<Route_Destination_Operator>;
  distance?: InputMaybe<Route_Distance_Operator>;
  id?: InputMaybe<Route_Id_Operator>;
  origin?: InputMaybe<Route_Origin_Operator>;
  route?: InputMaybe<Route_Route_Operator>;
  updatedAt?: InputMaybe<Route_UpdatedAt_Operator>;
  user?: InputMaybe<Route_User_Relation>;
};

export type Routes = {
  __typename?: 'Routes';
  docs?: Maybe<Array<Maybe<Route>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type RoutesCreateAccess = {
  __typename?: 'RoutesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesCreateDocAccess = {
  __typename?: 'RoutesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesDeleteAccess = {
  __typename?: 'RoutesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesDeleteDocAccess = {
  __typename?: 'RoutesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesDocAccessFields = {
  __typename?: 'RoutesDocAccessFields';
  destination?: Maybe<RoutesDocAccessFields_Destination>;
  distance?: Maybe<RoutesDocAccessFields_Distance>;
  origin?: Maybe<RoutesDocAccessFields_Origin>;
  route?: Maybe<RoutesDocAccessFields_Route>;
  user?: Maybe<RoutesDocAccessFields_User>;
};

export type RoutesDocAccessFields_Destination = {
  __typename?: 'RoutesDocAccessFields_destination';
  create?: Maybe<RoutesDocAccessFields_Destination_Create>;
  delete?: Maybe<RoutesDocAccessFields_Destination_Delete>;
  read?: Maybe<RoutesDocAccessFields_Destination_Read>;
  update?: Maybe<RoutesDocAccessFields_Destination_Update>;
};

export type RoutesDocAccessFields_Destination_Create = {
  __typename?: 'RoutesDocAccessFields_destination_Create';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Destination_Delete = {
  __typename?: 'RoutesDocAccessFields_destination_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Destination_Read = {
  __typename?: 'RoutesDocAccessFields_destination_Read';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Destination_Update = {
  __typename?: 'RoutesDocAccessFields_destination_Update';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Distance = {
  __typename?: 'RoutesDocAccessFields_distance';
  create?: Maybe<RoutesDocAccessFields_Distance_Create>;
  delete?: Maybe<RoutesDocAccessFields_Distance_Delete>;
  read?: Maybe<RoutesDocAccessFields_Distance_Read>;
  update?: Maybe<RoutesDocAccessFields_Distance_Update>;
};

export type RoutesDocAccessFields_Distance_Create = {
  __typename?: 'RoutesDocAccessFields_distance_Create';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Distance_Delete = {
  __typename?: 'RoutesDocAccessFields_distance_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Distance_Read = {
  __typename?: 'RoutesDocAccessFields_distance_Read';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Distance_Update = {
  __typename?: 'RoutesDocAccessFields_distance_Update';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Origin = {
  __typename?: 'RoutesDocAccessFields_origin';
  create?: Maybe<RoutesDocAccessFields_Origin_Create>;
  delete?: Maybe<RoutesDocAccessFields_Origin_Delete>;
  read?: Maybe<RoutesDocAccessFields_Origin_Read>;
  update?: Maybe<RoutesDocAccessFields_Origin_Update>;
};

export type RoutesDocAccessFields_Origin_Create = {
  __typename?: 'RoutesDocAccessFields_origin_Create';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Origin_Delete = {
  __typename?: 'RoutesDocAccessFields_origin_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Origin_Read = {
  __typename?: 'RoutesDocAccessFields_origin_Read';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Origin_Update = {
  __typename?: 'RoutesDocAccessFields_origin_Update';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Route = {
  __typename?: 'RoutesDocAccessFields_route';
  create?: Maybe<RoutesDocAccessFields_Route_Create>;
  delete?: Maybe<RoutesDocAccessFields_Route_Delete>;
  read?: Maybe<RoutesDocAccessFields_Route_Read>;
  update?: Maybe<RoutesDocAccessFields_Route_Update>;
};

export type RoutesDocAccessFields_Route_Create = {
  __typename?: 'RoutesDocAccessFields_route_Create';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Route_Delete = {
  __typename?: 'RoutesDocAccessFields_route_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Route_Read = {
  __typename?: 'RoutesDocAccessFields_route_Read';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_Route_Update = {
  __typename?: 'RoutesDocAccessFields_route_Update';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_User = {
  __typename?: 'RoutesDocAccessFields_user';
  create?: Maybe<RoutesDocAccessFields_User_Create>;
  delete?: Maybe<RoutesDocAccessFields_User_Delete>;
  read?: Maybe<RoutesDocAccessFields_User_Read>;
  update?: Maybe<RoutesDocAccessFields_User_Update>;
};

export type RoutesDocAccessFields_User_Create = {
  __typename?: 'RoutesDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_User_Delete = {
  __typename?: 'RoutesDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_User_Read = {
  __typename?: 'RoutesDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type RoutesDocAccessFields_User_Update = {
  __typename?: 'RoutesDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type RoutesFields = {
  __typename?: 'RoutesFields';
  destination?: Maybe<RoutesFields_Destination>;
  distance?: Maybe<RoutesFields_Distance>;
  origin?: Maybe<RoutesFields_Origin>;
  route?: Maybe<RoutesFields_Route>;
  user?: Maybe<RoutesFields_User>;
};

export type RoutesFields_Destination = {
  __typename?: 'RoutesFields_destination';
  create?: Maybe<RoutesFields_Destination_Create>;
  delete?: Maybe<RoutesFields_Destination_Delete>;
  read?: Maybe<RoutesFields_Destination_Read>;
  update?: Maybe<RoutesFields_Destination_Update>;
};

export type RoutesFields_Destination_Create = {
  __typename?: 'RoutesFields_destination_Create';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Destination_Delete = {
  __typename?: 'RoutesFields_destination_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Destination_Read = {
  __typename?: 'RoutesFields_destination_Read';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Destination_Update = {
  __typename?: 'RoutesFields_destination_Update';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Distance = {
  __typename?: 'RoutesFields_distance';
  create?: Maybe<RoutesFields_Distance_Create>;
  delete?: Maybe<RoutesFields_Distance_Delete>;
  read?: Maybe<RoutesFields_Distance_Read>;
  update?: Maybe<RoutesFields_Distance_Update>;
};

export type RoutesFields_Distance_Create = {
  __typename?: 'RoutesFields_distance_Create';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Distance_Delete = {
  __typename?: 'RoutesFields_distance_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Distance_Read = {
  __typename?: 'RoutesFields_distance_Read';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Distance_Update = {
  __typename?: 'RoutesFields_distance_Update';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Origin = {
  __typename?: 'RoutesFields_origin';
  create?: Maybe<RoutesFields_Origin_Create>;
  delete?: Maybe<RoutesFields_Origin_Delete>;
  read?: Maybe<RoutesFields_Origin_Read>;
  update?: Maybe<RoutesFields_Origin_Update>;
};

export type RoutesFields_Origin_Create = {
  __typename?: 'RoutesFields_origin_Create';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Origin_Delete = {
  __typename?: 'RoutesFields_origin_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Origin_Read = {
  __typename?: 'RoutesFields_origin_Read';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Origin_Update = {
  __typename?: 'RoutesFields_origin_Update';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Route = {
  __typename?: 'RoutesFields_route';
  create?: Maybe<RoutesFields_Route_Create>;
  delete?: Maybe<RoutesFields_Route_Delete>;
  read?: Maybe<RoutesFields_Route_Read>;
  update?: Maybe<RoutesFields_Route_Update>;
};

export type RoutesFields_Route_Create = {
  __typename?: 'RoutesFields_route_Create';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Route_Delete = {
  __typename?: 'RoutesFields_route_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Route_Read = {
  __typename?: 'RoutesFields_route_Read';
  permission: Scalars['Boolean'];
};

export type RoutesFields_Route_Update = {
  __typename?: 'RoutesFields_route_Update';
  permission: Scalars['Boolean'];
};

export type RoutesFields_User = {
  __typename?: 'RoutesFields_user';
  create?: Maybe<RoutesFields_User_Create>;
  delete?: Maybe<RoutesFields_User_Delete>;
  read?: Maybe<RoutesFields_User_Read>;
  update?: Maybe<RoutesFields_User_Update>;
};

export type RoutesFields_User_Create = {
  __typename?: 'RoutesFields_user_Create';
  permission: Scalars['Boolean'];
};

export type RoutesFields_User_Delete = {
  __typename?: 'RoutesFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type RoutesFields_User_Read = {
  __typename?: 'RoutesFields_user_Read';
  permission: Scalars['Boolean'];
};

export type RoutesFields_User_Update = {
  __typename?: 'RoutesFields_user_Update';
  permission: Scalars['Boolean'];
};

export type RoutesReadAccess = {
  __typename?: 'RoutesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesReadDocAccess = {
  __typename?: 'RoutesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesUpdateAccess = {
  __typename?: 'RoutesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RoutesUpdateDocAccess = {
  __typename?: 'RoutesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoute = {
  __typename?: 'TracedRoute';
  createdAt: Scalars['DateTime'];
  distance?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type TracedRoute_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type TracedRoute_Distance_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type TracedRoute_Duration_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type TracedRoute_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type TracedRoute_Route_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type TracedRoute_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type TracedRoute_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TracedRoute_Where = {
  AND?: InputMaybe<Array<InputMaybe<TracedRoute_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TracedRoute_Where_Or>>>;
  createdAt?: InputMaybe<TracedRoute_CreatedAt_Operator>;
  distance?: InputMaybe<TracedRoute_Distance_Operator>;
  duration?: InputMaybe<TracedRoute_Duration_Operator>;
  id?: InputMaybe<TracedRoute_Id_Operator>;
  route?: InputMaybe<TracedRoute_Route_Operator>;
  updatedAt?: InputMaybe<TracedRoute_UpdatedAt_Operator>;
  user?: InputMaybe<TracedRoute_User_Operator>;
};

export type TracedRoute_Where_And = {
  createdAt?: InputMaybe<TracedRoute_CreatedAt_Operator>;
  distance?: InputMaybe<TracedRoute_Distance_Operator>;
  duration?: InputMaybe<TracedRoute_Duration_Operator>;
  id?: InputMaybe<TracedRoute_Id_Operator>;
  route?: InputMaybe<TracedRoute_Route_Operator>;
  updatedAt?: InputMaybe<TracedRoute_UpdatedAt_Operator>;
  user?: InputMaybe<TracedRoute_User_Operator>;
};

export type TracedRoute_Where_Or = {
  createdAt?: InputMaybe<TracedRoute_CreatedAt_Operator>;
  distance?: InputMaybe<TracedRoute_Distance_Operator>;
  duration?: InputMaybe<TracedRoute_Duration_Operator>;
  id?: InputMaybe<TracedRoute_Id_Operator>;
  route?: InputMaybe<TracedRoute_Route_Operator>;
  updatedAt?: InputMaybe<TracedRoute_UpdatedAt_Operator>;
  user?: InputMaybe<TracedRoute_User_Operator>;
};

export type TracedRoutes = {
  __typename?: 'TracedRoutes';
  docs?: Maybe<Array<Maybe<TracedRoute>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type TracedRoutesCreateAccess = {
  __typename?: 'TracedRoutesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesCreateDocAccess = {
  __typename?: 'TracedRoutesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesDeleteAccess = {
  __typename?: 'TracedRoutesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesDeleteDocAccess = {
  __typename?: 'TracedRoutesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesDocAccessFields = {
  __typename?: 'TracedRoutesDocAccessFields';
  distance?: Maybe<TracedRoutesDocAccessFields_Distance>;
  duration?: Maybe<TracedRoutesDocAccessFields_Duration>;
  route?: Maybe<TracedRoutesDocAccessFields_Route>;
  user?: Maybe<TracedRoutesDocAccessFields_User>;
};

export type TracedRoutesDocAccessFields_Distance = {
  __typename?: 'TracedRoutesDocAccessFields_distance';
  create?: Maybe<TracedRoutesDocAccessFields_Distance_Create>;
  delete?: Maybe<TracedRoutesDocAccessFields_Distance_Delete>;
  read?: Maybe<TracedRoutesDocAccessFields_Distance_Read>;
  update?: Maybe<TracedRoutesDocAccessFields_Distance_Update>;
};

export type TracedRoutesDocAccessFields_Distance_Create = {
  __typename?: 'TracedRoutesDocAccessFields_distance_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Distance_Delete = {
  __typename?: 'TracedRoutesDocAccessFields_distance_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Distance_Read = {
  __typename?: 'TracedRoutesDocAccessFields_distance_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Distance_Update = {
  __typename?: 'TracedRoutesDocAccessFields_distance_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Duration = {
  __typename?: 'TracedRoutesDocAccessFields_duration';
  create?: Maybe<TracedRoutesDocAccessFields_Duration_Create>;
  delete?: Maybe<TracedRoutesDocAccessFields_Duration_Delete>;
  read?: Maybe<TracedRoutesDocAccessFields_Duration_Read>;
  update?: Maybe<TracedRoutesDocAccessFields_Duration_Update>;
};

export type TracedRoutesDocAccessFields_Duration_Create = {
  __typename?: 'TracedRoutesDocAccessFields_duration_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Duration_Delete = {
  __typename?: 'TracedRoutesDocAccessFields_duration_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Duration_Read = {
  __typename?: 'TracedRoutesDocAccessFields_duration_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Duration_Update = {
  __typename?: 'TracedRoutesDocAccessFields_duration_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Route = {
  __typename?: 'TracedRoutesDocAccessFields_route';
  create?: Maybe<TracedRoutesDocAccessFields_Route_Create>;
  delete?: Maybe<TracedRoutesDocAccessFields_Route_Delete>;
  read?: Maybe<TracedRoutesDocAccessFields_Route_Read>;
  update?: Maybe<TracedRoutesDocAccessFields_Route_Update>;
};

export type TracedRoutesDocAccessFields_Route_Create = {
  __typename?: 'TracedRoutesDocAccessFields_route_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Route_Delete = {
  __typename?: 'TracedRoutesDocAccessFields_route_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Route_Read = {
  __typename?: 'TracedRoutesDocAccessFields_route_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_Route_Update = {
  __typename?: 'TracedRoutesDocAccessFields_route_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_User = {
  __typename?: 'TracedRoutesDocAccessFields_user';
  create?: Maybe<TracedRoutesDocAccessFields_User_Create>;
  delete?: Maybe<TracedRoutesDocAccessFields_User_Delete>;
  read?: Maybe<TracedRoutesDocAccessFields_User_Read>;
  update?: Maybe<TracedRoutesDocAccessFields_User_Update>;
};

export type TracedRoutesDocAccessFields_User_Create = {
  __typename?: 'TracedRoutesDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_User_Delete = {
  __typename?: 'TracedRoutesDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_User_Read = {
  __typename?: 'TracedRoutesDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesDocAccessFields_User_Update = {
  __typename?: 'TracedRoutesDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields = {
  __typename?: 'TracedRoutesFields';
  distance?: Maybe<TracedRoutesFields_Distance>;
  duration?: Maybe<TracedRoutesFields_Duration>;
  route?: Maybe<TracedRoutesFields_Route>;
  user?: Maybe<TracedRoutesFields_User>;
};

export type TracedRoutesFields_Distance = {
  __typename?: 'TracedRoutesFields_distance';
  create?: Maybe<TracedRoutesFields_Distance_Create>;
  delete?: Maybe<TracedRoutesFields_Distance_Delete>;
  read?: Maybe<TracedRoutesFields_Distance_Read>;
  update?: Maybe<TracedRoutesFields_Distance_Update>;
};

export type TracedRoutesFields_Distance_Create = {
  __typename?: 'TracedRoutesFields_distance_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Distance_Delete = {
  __typename?: 'TracedRoutesFields_distance_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Distance_Read = {
  __typename?: 'TracedRoutesFields_distance_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Distance_Update = {
  __typename?: 'TracedRoutesFields_distance_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Duration = {
  __typename?: 'TracedRoutesFields_duration';
  create?: Maybe<TracedRoutesFields_Duration_Create>;
  delete?: Maybe<TracedRoutesFields_Duration_Delete>;
  read?: Maybe<TracedRoutesFields_Duration_Read>;
  update?: Maybe<TracedRoutesFields_Duration_Update>;
};

export type TracedRoutesFields_Duration_Create = {
  __typename?: 'TracedRoutesFields_duration_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Duration_Delete = {
  __typename?: 'TracedRoutesFields_duration_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Duration_Read = {
  __typename?: 'TracedRoutesFields_duration_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Duration_Update = {
  __typename?: 'TracedRoutesFields_duration_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Route = {
  __typename?: 'TracedRoutesFields_route';
  create?: Maybe<TracedRoutesFields_Route_Create>;
  delete?: Maybe<TracedRoutesFields_Route_Delete>;
  read?: Maybe<TracedRoutesFields_Route_Read>;
  update?: Maybe<TracedRoutesFields_Route_Update>;
};

export type TracedRoutesFields_Route_Create = {
  __typename?: 'TracedRoutesFields_route_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Route_Delete = {
  __typename?: 'TracedRoutesFields_route_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Route_Read = {
  __typename?: 'TracedRoutesFields_route_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_Route_Update = {
  __typename?: 'TracedRoutesFields_route_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_User = {
  __typename?: 'TracedRoutesFields_user';
  create?: Maybe<TracedRoutesFields_User_Create>;
  delete?: Maybe<TracedRoutesFields_User_Delete>;
  read?: Maybe<TracedRoutesFields_User_Read>;
  update?: Maybe<TracedRoutesFields_User_Update>;
};

export type TracedRoutesFields_User_Create = {
  __typename?: 'TracedRoutesFields_user_Create';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_User_Delete = {
  __typename?: 'TracedRoutesFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_User_Read = {
  __typename?: 'TracedRoutesFields_user_Read';
  permission: Scalars['Boolean'];
};

export type TracedRoutesFields_User_Update = {
  __typename?: 'TracedRoutesFields_user_Update';
  permission: Scalars['Boolean'];
};

export type TracedRoutesReadAccess = {
  __typename?: 'TracedRoutesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesReadDocAccess = {
  __typename?: 'TracedRoutesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesUpdateAccess = {
  __typename?: 'TracedRoutesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TracedRoutesUpdateDocAccess = {
  __typename?: 'TracedRoutesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User = {
  __typename?: 'User';
  birthdate?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  displayNameType?: Maybe<User_DisplayNameType>;
  email?: Maybe<Scalars['EmailAddress']>;
  equipment?: Maybe<User_Equipment>;
  favoritePlaces?: Maybe<Array<User_FavoritePlaces>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impairmentLevel?: Maybe<User_ImpairmentLevel>;
  lastName?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export enum UserUpdate_DisplayNameType_MutationInput {
  FullName = 'full_name',
  UserName = 'user_name'
}

export enum UserUpdate_Equipment_MutationInput {
  ElectricWheelchair = 'electric_wheelchair',
  ManualWheelchair = 'manual_wheelchair',
  None = 'none',
  Walker = 'walker'
}

export enum UserUpdate_ImpairmentLevel_MutationInput {
  '0' = '_0',
  '1' = '_1',
  '2' = '_2',
  '3' = '_3',
  '4' = '_4'
}

export type User_FavoritePlaces = {
  __typename?: 'User_FavoritePlaces';
  addedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  place?: Maybe<Place>;
};

export type User_Birthdate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum User_DisplayNameType {
  FullName = 'full_name',
  UserName = 'user_name'
}

export enum User_DisplayNameType_Input {
  FullName = 'full_name',
  UserName = 'user_name'
}

export enum User_DisplayNameType_MutationInput {
  FullName = 'full_name',
  UserName = 'user_name'
}

export type User_DisplayNameType_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_DisplayNameType_Input>>>;
  equals?: InputMaybe<User_DisplayNameType_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<User_DisplayNameType_Input>>>;
  not_equals?: InputMaybe<User_DisplayNameType_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_DisplayNameType_Input>>>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export enum User_Equipment {
  ElectricWheelchair = 'electric_wheelchair',
  ManualWheelchair = 'manual_wheelchair',
  None = 'none',
  Walker = 'walker'
}

export enum User_Equipment_Input {
  ElectricWheelchair = 'electric_wheelchair',
  ManualWheelchair = 'manual_wheelchair',
  None = 'none',
  Walker = 'walker'
}

export enum User_Equipment_MutationInput {
  ElectricWheelchair = 'electric_wheelchair',
  ManualWheelchair = 'manual_wheelchair',
  None = 'none',
  Walker = 'walker'
}

export type User_Equipment_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Equipment_Input>>>;
  equals?: InputMaybe<User_Equipment_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<User_Equipment_Input>>>;
  not_equals?: InputMaybe<User_Equipment_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Equipment_Input>>>;
};

export type User_FavoritePlaces__AddedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_FavoritePlaces__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_FavoritePlaces__Place_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export enum User_ImpairmentLevel {
  '0' = '_0',
  '1' = '_1',
  '2' = '_2',
  '3' = '_3',
  '4' = '_4'
}

export enum User_ImpairmentLevel_Input {
  '0' = '_0',
  '1' = '_1',
  '2' = '_2',
  '3' = '_3',
  '4' = '_4'
}

export enum User_ImpairmentLevel_MutationInput {
  '0' = '_0',
  '1' = '_1',
  '2' = '_2',
  '3' = '_3',
  '4' = '_4'
}

export type User_ImpairmentLevel_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_ImpairmentLevel_Input>>>;
  equals?: InputMaybe<User_ImpairmentLevel_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<User_ImpairmentLevel_Input>>>;
  not_equals?: InputMaybe<User_ImpairmentLevel_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_ImpairmentLevel_Input>>>;
};

export type User_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Username_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  birthdate?: InputMaybe<User_Birthdate_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  displayNameType?: InputMaybe<User_DisplayNameType_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  equipment?: InputMaybe<User_Equipment_Operator>;
  favoritePlaces__addedAt?: InputMaybe<User_FavoritePlaces__AddedAt_Operator>;
  favoritePlaces__id?: InputMaybe<User_FavoritePlaces__Id_Operator>;
  favoritePlaces__place?: InputMaybe<User_FavoritePlaces__Place_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  impairmentLevel?: InputMaybe<User_ImpairmentLevel_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_And = {
  birthdate?: InputMaybe<User_Birthdate_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  displayNameType?: InputMaybe<User_DisplayNameType_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  equipment?: InputMaybe<User_Equipment_Operator>;
  favoritePlaces__addedAt?: InputMaybe<User_FavoritePlaces__AddedAt_Operator>;
  favoritePlaces__id?: InputMaybe<User_FavoritePlaces__Id_Operator>;
  favoritePlaces__place?: InputMaybe<User_FavoritePlaces__Place_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  impairmentLevel?: InputMaybe<User_ImpairmentLevel_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_Or = {
  birthdate?: InputMaybe<User_Birthdate_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  displayNameType?: InputMaybe<User_DisplayNameType_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  equipment?: InputMaybe<User_Equipment_Operator>;
  favoritePlaces__addedAt?: InputMaybe<User_FavoritePlaces__AddedAt_Operator>;
  favoritePlaces__id?: InputMaybe<User_FavoritePlaces__Id_Operator>;
  favoritePlaces__place?: InputMaybe<User_FavoritePlaces__Place_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  impairmentLevel?: InputMaybe<User_ImpairmentLevel_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  birthdate?: Maybe<UsersDocAccessFields_Birthdate>;
  displayNameType?: Maybe<UsersDocAccessFields_DisplayNameType>;
  email?: Maybe<UsersDocAccessFields_Email>;
  equipment?: Maybe<UsersDocAccessFields_Equipment>;
  favoritePlaces?: Maybe<UsersDocAccessFields_FavoritePlaces>;
  firstName?: Maybe<UsersDocAccessFields_FirstName>;
  impairmentLevel?: Maybe<UsersDocAccessFields_ImpairmentLevel>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  password?: Maybe<UsersDocAccessFields_Password>;
  username?: Maybe<UsersDocAccessFields_Username>;
};

export type UsersDocAccessFields_Birthdate = {
  __typename?: 'UsersDocAccessFields_birthdate';
  create?: Maybe<UsersDocAccessFields_Birthdate_Create>;
  delete?: Maybe<UsersDocAccessFields_Birthdate_Delete>;
  read?: Maybe<UsersDocAccessFields_Birthdate_Read>;
  update?: Maybe<UsersDocAccessFields_Birthdate_Update>;
};

export type UsersDocAccessFields_Birthdate_Create = {
  __typename?: 'UsersDocAccessFields_birthdate_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthdate_Delete = {
  __typename?: 'UsersDocAccessFields_birthdate_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthdate_Read = {
  __typename?: 'UsersDocAccessFields_birthdate_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthdate_Update = {
  __typename?: 'UsersDocAccessFields_birthdate_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_DisplayNameType = {
  __typename?: 'UsersDocAccessFields_displayNameType';
  create?: Maybe<UsersDocAccessFields_DisplayNameType_Create>;
  delete?: Maybe<UsersDocAccessFields_DisplayNameType_Delete>;
  read?: Maybe<UsersDocAccessFields_DisplayNameType_Read>;
  update?: Maybe<UsersDocAccessFields_DisplayNameType_Update>;
};

export type UsersDocAccessFields_DisplayNameType_Create = {
  __typename?: 'UsersDocAccessFields_displayNameType_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_DisplayNameType_Delete = {
  __typename?: 'UsersDocAccessFields_displayNameType_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_DisplayNameType_Read = {
  __typename?: 'UsersDocAccessFields_displayNameType_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_DisplayNameType_Update = {
  __typename?: 'UsersDocAccessFields_displayNameType_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Equipment = {
  __typename?: 'UsersDocAccessFields_equipment';
  create?: Maybe<UsersDocAccessFields_Equipment_Create>;
  delete?: Maybe<UsersDocAccessFields_Equipment_Delete>;
  read?: Maybe<UsersDocAccessFields_Equipment_Read>;
  update?: Maybe<UsersDocAccessFields_Equipment_Update>;
};

export type UsersDocAccessFields_Equipment_Create = {
  __typename?: 'UsersDocAccessFields_equipment_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Equipment_Delete = {
  __typename?: 'UsersDocAccessFields_equipment_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Equipment_Read = {
  __typename?: 'UsersDocAccessFields_equipment_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Equipment_Update = {
  __typename?: 'UsersDocAccessFields_equipment_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces = {
  __typename?: 'UsersDocAccessFields_favoritePlaces';
  create?: Maybe<UsersDocAccessFields_FavoritePlaces_Create>;
  delete?: Maybe<UsersDocAccessFields_FavoritePlaces_Delete>;
  fields?: Maybe<UsersDocAccessFields_FavoritePlaces_Fields>;
  read?: Maybe<UsersDocAccessFields_FavoritePlaces_Read>;
  update?: Maybe<UsersDocAccessFields_FavoritePlaces_Update>;
};

export type UsersDocAccessFields_FavoritePlaces_Create = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Delete = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Fields = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_Fields';
  addedAt?: Maybe<UsersDocAccessFields_FavoritePlaces_AddedAt>;
  id?: Maybe<UsersDocAccessFields_FavoritePlaces_Id>;
  place?: Maybe<UsersDocAccessFields_FavoritePlaces_Place>;
};

export type UsersDocAccessFields_FavoritePlaces_Read = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Update = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_AddedAt = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_addedAt';
  create?: Maybe<UsersDocAccessFields_FavoritePlaces_AddedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_FavoritePlaces_AddedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_FavoritePlaces_AddedAt_Read>;
  update?: Maybe<UsersDocAccessFields_FavoritePlaces_AddedAt_Update>;
};

export type UsersDocAccessFields_FavoritePlaces_AddedAt_Create = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_addedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_AddedAt_Delete = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_addedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_AddedAt_Read = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_addedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_AddedAt_Update = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_addedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Id = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_id';
  create?: Maybe<UsersDocAccessFields_FavoritePlaces_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_FavoritePlaces_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_FavoritePlaces_Id_Read>;
  update?: Maybe<UsersDocAccessFields_FavoritePlaces_Id_Update>;
};

export type UsersDocAccessFields_FavoritePlaces_Id_Create = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Id_Delete = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Id_Read = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Id_Update = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Place = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_place';
  create?: Maybe<UsersDocAccessFields_FavoritePlaces_Place_Create>;
  delete?: Maybe<UsersDocAccessFields_FavoritePlaces_Place_Delete>;
  read?: Maybe<UsersDocAccessFields_FavoritePlaces_Place_Read>;
  update?: Maybe<UsersDocAccessFields_FavoritePlaces_Place_Update>;
};

export type UsersDocAccessFields_FavoritePlaces_Place_Create = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_place_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Place_Delete = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_place_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Place_Read = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_place_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FavoritePlaces_Place_Update = {
  __typename?: 'UsersDocAccessFields_favoritePlaces_place_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName = {
  __typename?: 'UsersDocAccessFields_firstName';
  create?: Maybe<UsersDocAccessFields_FirstName_Create>;
  delete?: Maybe<UsersDocAccessFields_FirstName_Delete>;
  read?: Maybe<UsersDocAccessFields_FirstName_Read>;
  update?: Maybe<UsersDocAccessFields_FirstName_Update>;
};

export type UsersDocAccessFields_FirstName_Create = {
  __typename?: 'UsersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName_Delete = {
  __typename?: 'UsersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName_Read = {
  __typename?: 'UsersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName_Update = {
  __typename?: 'UsersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ImpairmentLevel = {
  __typename?: 'UsersDocAccessFields_impairmentLevel';
  create?: Maybe<UsersDocAccessFields_ImpairmentLevel_Create>;
  delete?: Maybe<UsersDocAccessFields_ImpairmentLevel_Delete>;
  read?: Maybe<UsersDocAccessFields_ImpairmentLevel_Read>;
  update?: Maybe<UsersDocAccessFields_ImpairmentLevel_Update>;
};

export type UsersDocAccessFields_ImpairmentLevel_Create = {
  __typename?: 'UsersDocAccessFields_impairmentLevel_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ImpairmentLevel_Delete = {
  __typename?: 'UsersDocAccessFields_impairmentLevel_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ImpairmentLevel_Read = {
  __typename?: 'UsersDocAccessFields_impairmentLevel_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ImpairmentLevel_Update = {
  __typename?: 'UsersDocAccessFields_impairmentLevel_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username = {
  __typename?: 'UsersDocAccessFields_username';
  create?: Maybe<UsersDocAccessFields_Username_Create>;
  delete?: Maybe<UsersDocAccessFields_Username_Delete>;
  read?: Maybe<UsersDocAccessFields_Username_Read>;
  update?: Maybe<UsersDocAccessFields_Username_Update>;
};

export type UsersDocAccessFields_Username_Create = {
  __typename?: 'UsersDocAccessFields_username_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Delete = {
  __typename?: 'UsersDocAccessFields_username_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Read = {
  __typename?: 'UsersDocAccessFields_username_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Update = {
  __typename?: 'UsersDocAccessFields_username_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  birthdate?: Maybe<UsersFields_Birthdate>;
  displayNameType?: Maybe<UsersFields_DisplayNameType>;
  email?: Maybe<UsersFields_Email>;
  equipment?: Maybe<UsersFields_Equipment>;
  favoritePlaces?: Maybe<UsersFields_FavoritePlaces>;
  firstName?: Maybe<UsersFields_FirstName>;
  impairmentLevel?: Maybe<UsersFields_ImpairmentLevel>;
  lastName?: Maybe<UsersFields_LastName>;
  password?: Maybe<UsersFields_Password>;
  username?: Maybe<UsersFields_Username>;
};

export type UsersFields_Birthdate = {
  __typename?: 'UsersFields_birthdate';
  create?: Maybe<UsersFields_Birthdate_Create>;
  delete?: Maybe<UsersFields_Birthdate_Delete>;
  read?: Maybe<UsersFields_Birthdate_Read>;
  update?: Maybe<UsersFields_Birthdate_Update>;
};

export type UsersFields_Birthdate_Create = {
  __typename?: 'UsersFields_birthdate_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthdate_Delete = {
  __typename?: 'UsersFields_birthdate_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthdate_Read = {
  __typename?: 'UsersFields_birthdate_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthdate_Update = {
  __typename?: 'UsersFields_birthdate_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_DisplayNameType = {
  __typename?: 'UsersFields_displayNameType';
  create?: Maybe<UsersFields_DisplayNameType_Create>;
  delete?: Maybe<UsersFields_DisplayNameType_Delete>;
  read?: Maybe<UsersFields_DisplayNameType_Read>;
  update?: Maybe<UsersFields_DisplayNameType_Update>;
};

export type UsersFields_DisplayNameType_Create = {
  __typename?: 'UsersFields_displayNameType_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_DisplayNameType_Delete = {
  __typename?: 'UsersFields_displayNameType_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_DisplayNameType_Read = {
  __typename?: 'UsersFields_displayNameType_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_DisplayNameType_Update = {
  __typename?: 'UsersFields_displayNameType_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Equipment = {
  __typename?: 'UsersFields_equipment';
  create?: Maybe<UsersFields_Equipment_Create>;
  delete?: Maybe<UsersFields_Equipment_Delete>;
  read?: Maybe<UsersFields_Equipment_Read>;
  update?: Maybe<UsersFields_Equipment_Update>;
};

export type UsersFields_Equipment_Create = {
  __typename?: 'UsersFields_equipment_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Equipment_Delete = {
  __typename?: 'UsersFields_equipment_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Equipment_Read = {
  __typename?: 'UsersFields_equipment_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Equipment_Update = {
  __typename?: 'UsersFields_equipment_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces = {
  __typename?: 'UsersFields_favoritePlaces';
  create?: Maybe<UsersFields_FavoritePlaces_Create>;
  delete?: Maybe<UsersFields_FavoritePlaces_Delete>;
  fields?: Maybe<UsersFields_FavoritePlaces_Fields>;
  read?: Maybe<UsersFields_FavoritePlaces_Read>;
  update?: Maybe<UsersFields_FavoritePlaces_Update>;
};

export type UsersFields_FavoritePlaces_Create = {
  __typename?: 'UsersFields_favoritePlaces_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Delete = {
  __typename?: 'UsersFields_favoritePlaces_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Fields = {
  __typename?: 'UsersFields_favoritePlaces_Fields';
  addedAt?: Maybe<UsersFields_FavoritePlaces_AddedAt>;
  id?: Maybe<UsersFields_FavoritePlaces_Id>;
  place?: Maybe<UsersFields_FavoritePlaces_Place>;
};

export type UsersFields_FavoritePlaces_Read = {
  __typename?: 'UsersFields_favoritePlaces_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Update = {
  __typename?: 'UsersFields_favoritePlaces_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_AddedAt = {
  __typename?: 'UsersFields_favoritePlaces_addedAt';
  create?: Maybe<UsersFields_FavoritePlaces_AddedAt_Create>;
  delete?: Maybe<UsersFields_FavoritePlaces_AddedAt_Delete>;
  read?: Maybe<UsersFields_FavoritePlaces_AddedAt_Read>;
  update?: Maybe<UsersFields_FavoritePlaces_AddedAt_Update>;
};

export type UsersFields_FavoritePlaces_AddedAt_Create = {
  __typename?: 'UsersFields_favoritePlaces_addedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_AddedAt_Delete = {
  __typename?: 'UsersFields_favoritePlaces_addedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_AddedAt_Read = {
  __typename?: 'UsersFields_favoritePlaces_addedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_AddedAt_Update = {
  __typename?: 'UsersFields_favoritePlaces_addedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Id = {
  __typename?: 'UsersFields_favoritePlaces_id';
  create?: Maybe<UsersFields_FavoritePlaces_Id_Create>;
  delete?: Maybe<UsersFields_FavoritePlaces_Id_Delete>;
  read?: Maybe<UsersFields_FavoritePlaces_Id_Read>;
  update?: Maybe<UsersFields_FavoritePlaces_Id_Update>;
};

export type UsersFields_FavoritePlaces_Id_Create = {
  __typename?: 'UsersFields_favoritePlaces_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Id_Delete = {
  __typename?: 'UsersFields_favoritePlaces_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Id_Read = {
  __typename?: 'UsersFields_favoritePlaces_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Id_Update = {
  __typename?: 'UsersFields_favoritePlaces_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Place = {
  __typename?: 'UsersFields_favoritePlaces_place';
  create?: Maybe<UsersFields_FavoritePlaces_Place_Create>;
  delete?: Maybe<UsersFields_FavoritePlaces_Place_Delete>;
  read?: Maybe<UsersFields_FavoritePlaces_Place_Read>;
  update?: Maybe<UsersFields_FavoritePlaces_Place_Update>;
};

export type UsersFields_FavoritePlaces_Place_Create = {
  __typename?: 'UsersFields_favoritePlaces_place_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Place_Delete = {
  __typename?: 'UsersFields_favoritePlaces_place_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Place_Read = {
  __typename?: 'UsersFields_favoritePlaces_place_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_FavoritePlaces_Place_Update = {
  __typename?: 'UsersFields_favoritePlaces_place_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName = {
  __typename?: 'UsersFields_firstName';
  create?: Maybe<UsersFields_FirstName_Create>;
  delete?: Maybe<UsersFields_FirstName_Delete>;
  read?: Maybe<UsersFields_FirstName_Read>;
  update?: Maybe<UsersFields_FirstName_Update>;
};

export type UsersFields_FirstName_Create = {
  __typename?: 'UsersFields_firstName_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName_Delete = {
  __typename?: 'UsersFields_firstName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName_Read = {
  __typename?: 'UsersFields_firstName_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName_Update = {
  __typename?: 'UsersFields_firstName_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_ImpairmentLevel = {
  __typename?: 'UsersFields_impairmentLevel';
  create?: Maybe<UsersFields_ImpairmentLevel_Create>;
  delete?: Maybe<UsersFields_ImpairmentLevel_Delete>;
  read?: Maybe<UsersFields_ImpairmentLevel_Read>;
  update?: Maybe<UsersFields_ImpairmentLevel_Update>;
};

export type UsersFields_ImpairmentLevel_Create = {
  __typename?: 'UsersFields_impairmentLevel_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_ImpairmentLevel_Delete = {
  __typename?: 'UsersFields_impairmentLevel_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_ImpairmentLevel_Read = {
  __typename?: 'UsersFields_impairmentLevel_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_ImpairmentLevel_Update = {
  __typename?: 'UsersFields_impairmentLevel_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  delete?: Maybe<UsersFields_LastName_Delete>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username = {
  __typename?: 'UsersFields_username';
  create?: Maybe<UsersFields_Username_Create>;
  delete?: Maybe<UsersFields_Username_Delete>;
  read?: Maybe<UsersFields_Username_Read>;
  update?: Maybe<UsersFields_Username_Update>;
};

export type UsersFields_Username_Create = {
  __typename?: 'UsersFields_username_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Delete = {
  __typename?: 'UsersFields_username_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Read = {
  __typename?: 'UsersFields_username_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Update = {
  __typename?: 'UsersFields_username_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AdminsAccess = {
  __typename?: 'adminsAccess';
  create?: Maybe<AdminsCreateAccess>;
  delete?: Maybe<AdminsDeleteAccess>;
  fields?: Maybe<AdminsFields>;
  read?: Maybe<AdminsReadAccess>;
  unlock?: Maybe<AdminsUnlockAccess>;
  update?: Maybe<AdminsUpdateAccess>;
};

export type AdminsDocAccess = {
  __typename?: 'adminsDocAccess';
  create?: Maybe<AdminsCreateDocAccess>;
  delete?: Maybe<AdminsDeleteDocAccess>;
  fields?: Maybe<AdminsDocAccessFields>;
  read?: Maybe<AdminsReadDocAccess>;
  unlock?: Maybe<AdminsUnlockDocAccess>;
  update?: Maybe<AdminsUpdateDocAccess>;
};

export type AdminsJwt = {
  __typename?: 'adminsJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type AdminsLoginResult = {
  __typename?: 'adminsLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Admin>;
};

export type AdminsMe = {
  __typename?: 'adminsMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Admin>;
};

export type AdminsRefreshedAdmin = {
  __typename?: 'adminsRefreshedAdmin';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<AdminsJwt>;
};

export type AdminsResetPassword = {
  __typename?: 'adminsResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Admin>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type AnnouncementsAccess = {
  __typename?: 'announcementsAccess';
  create?: Maybe<AnnouncementsCreateAccess>;
  delete?: Maybe<AnnouncementsDeleteAccess>;
  fields?: Maybe<AnnouncementsFields>;
  read?: Maybe<AnnouncementsReadAccess>;
  update?: Maybe<AnnouncementsUpdateAccess>;
};

export type AnnouncementsDocAccess = {
  __typename?: 'announcementsDocAccess';
  create?: Maybe<AnnouncementsCreateDocAccess>;
  delete?: Maybe<AnnouncementsDeleteDocAccess>;
  fields?: Maybe<AnnouncementsDocAccessFields>;
  read?: Maybe<AnnouncementsReadDocAccess>;
  update?: Maybe<AnnouncementsUpdateDocAccess>;
};

export type FacilitiesAccess = {
  __typename?: 'facilitiesAccess';
  create?: Maybe<FacilitiesCreateAccess>;
  delete?: Maybe<FacilitiesDeleteAccess>;
  fields?: Maybe<FacilitiesFields>;
  read?: Maybe<FacilitiesReadAccess>;
  update?: Maybe<FacilitiesUpdateAccess>;
};

export type FacilitiesDocAccess = {
  __typename?: 'facilitiesDocAccess';
  create?: Maybe<FacilitiesCreateDocAccess>;
  delete?: Maybe<FacilitiesDeleteDocAccess>;
  fields?: Maybe<FacilitiesDocAccessFields>;
  read?: Maybe<FacilitiesReadDocAccess>;
  update?: Maybe<FacilitiesUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
};

export type MutationAdminUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
};

export type MutationAnnouncementInput = {
  author?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<MutationAnnouncement_ContactInput>;
  descriptionEN?: InputMaybe<Scalars['String']>;
  descriptionTH?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  place?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Announcement_Tags_MutationInput>>>;
  titleEN?: InputMaybe<Scalars['String']>;
  titleTH?: InputMaybe<Scalars['String']>;
};

export type MutationAnnouncementUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<MutationAnnouncementUpdate_ContactInput>;
  descriptionEN?: InputMaybe<Scalars['String']>;
  descriptionTH?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  place?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<AnnouncementUpdate_Tags_MutationInput>>>;
  titleEN?: InputMaybe<Scalars['String']>;
  titleTH?: InputMaybe<Scalars['String']>;
};

export type MutationAnnouncementUpdate_ContactInput = {
  email?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type MutationAnnouncement_ContactInput = {
  email?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type MutationFacilityInput = {
  busLines?: InputMaybe<Scalars['JSON']>;
  detailEN?: InputMaybe<Scalars['String']>;
  detailTH?: InputMaybe<Scalars['String']>;
  geolocation?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  isWarning?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Float']>;
  place?: InputMaybe<Scalars['String']>;
  rise?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Facility_Status_MutationInput>;
  tramLines?: InputMaybe<Scalars['JSON']>;
  type: Facility_Type_MutationInput;
};

export type MutationFacilityUpdateInput = {
  busLines?: InputMaybe<Scalars['JSON']>;
  detailEN?: InputMaybe<Scalars['String']>;
  detailTH?: InputMaybe<Scalars['String']>;
  geolocation?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  isWarning?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Float']>;
  place?: InputMaybe<Scalars['String']>;
  rise?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<FacilityUpdate_Status_MutationInput>;
  tramLines?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<FacilityUpdate_Type_MutationInput>;
};

export type MutationMediaInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  tablet?: InputMaybe<MutationMediaUpdate_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  tablet?: InputMaybe<MutationMedia_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationPlaceInput = {
  category: Place_Category_MutationInput;
  geolocation?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  image?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  placeAddressEN?: InputMaybe<Scalars['String']>;
  placeAddressTH?: InputMaybe<Scalars['String']>;
  placeCode?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type MutationPlaceUpdateInput = {
  category?: InputMaybe<PlaceUpdate_Category_MutationInput>;
  geolocation?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  image?: InputMaybe<Scalars['String']>;
  nameEN?: InputMaybe<Scalars['String']>;
  nameTH?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  placeAddressEN?: InputMaybe<Scalars['String']>;
  placeAddressTH?: InputMaybe<Scalars['String']>;
  placeCode?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type MutationReviewInput = {
  comment?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<MutationReview_OfficialInput>;
  place?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<MutationReview_RatingInput>;
  user?: InputMaybe<Scalars['String']>;
};

export type MutationReviewUpdateInput = {
  comment?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<MutationReviewUpdate_OfficialInput>;
  place?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<MutationReviewUpdate_RatingInput>;
  user?: InputMaybe<Scalars['String']>;
};

export type MutationReviewUpdate_OfficialInput = {
  comment?: InputMaybe<Scalars['String']>;
  flagged?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
};

export type MutationReviewUpdate_RatingInput = {
  assistance?: InputMaybe<Scalars['Float']>;
  comment?: InputMaybe<Scalars['String']>;
  elevator?: InputMaybe<Scalars['Float']>;
  facility?: InputMaybe<Array<InputMaybe<ReviewUpdate_Rating_Facility_MutationInput>>>;
  images?: InputMaybe<Array<InputMaybe<MutationReviewUpdate_Rating_ImagesInput>>>;
  overall?: InputMaybe<Scalars['Float']>;
  parking?: InputMaybe<Scalars['Float']>;
  ramp?: InputMaybe<Scalars['Float']>;
  surface?: InputMaybe<Scalars['Float']>;
  toilet?: InputMaybe<Scalars['Float']>;
};

export type MutationReviewUpdate_Rating_ImagesInput = {
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type MutationReview_OfficialInput = {
  comment?: InputMaybe<Scalars['String']>;
  flagged?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
};

export type MutationReview_RatingInput = {
  assistance?: InputMaybe<Scalars['Float']>;
  comment?: InputMaybe<Scalars['String']>;
  elevator?: InputMaybe<Scalars['Float']>;
  facility?: InputMaybe<Array<InputMaybe<Review_Rating_Facility_MutationInput>>>;
  images?: InputMaybe<Array<InputMaybe<MutationReview_Rating_ImagesInput>>>;
  overall?: InputMaybe<Scalars['Float']>;
  parking?: InputMaybe<Scalars['Float']>;
  ramp?: InputMaybe<Scalars['Float']>;
  surface?: InputMaybe<Scalars['Float']>;
  toilet?: InputMaybe<Scalars['Float']>;
};

export type MutationReview_Rating_ImagesInput = {
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type MutationRouteInput = {
  destination?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  origin?: InputMaybe<Scalars['String']>;
  route?: InputMaybe<Scalars['JSON']>;
  user?: InputMaybe<Route_UserRelationshipInput>;
};

export type MutationRouteUpdateInput = {
  destination?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  origin?: InputMaybe<Scalars['String']>;
  route?: InputMaybe<Scalars['JSON']>;
  user?: InputMaybe<RouteUpdate_UserRelationshipInput>;
};

export type MutationTracedRouteInput = {
  distance?: InputMaybe<Scalars['Float']>;
  duration?: InputMaybe<Scalars['Float']>;
  route?: InputMaybe<Scalars['JSON']>;
  user?: InputMaybe<Scalars['String']>;
};

export type MutationTracedRouteUpdateInput = {
  distance?: InputMaybe<Scalars['Float']>;
  duration?: InputMaybe<Scalars['Float']>;
  route?: InputMaybe<Scalars['JSON']>;
  user?: InputMaybe<Scalars['String']>;
};

export type MutationUserInput = {
  birthdate?: InputMaybe<Scalars['String']>;
  displayNameType?: InputMaybe<User_DisplayNameType_MutationInput>;
  email?: InputMaybe<Scalars['String']>;
  equipment?: InputMaybe<User_Equipment_MutationInput>;
  favoritePlaces?: InputMaybe<Array<InputMaybe<MutationUser_FavoritePlacesInput>>>;
  firstName?: InputMaybe<Scalars['String']>;
  impairmentLevel?: InputMaybe<User_ImpairmentLevel_MutationInput>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  birthdate?: InputMaybe<Scalars['String']>;
  displayNameType?: InputMaybe<UserUpdate_DisplayNameType_MutationInput>;
  email?: InputMaybe<Scalars['String']>;
  equipment?: InputMaybe<UserUpdate_Equipment_MutationInput>;
  favoritePlaces?: InputMaybe<Array<InputMaybe<MutationUserUpdate_FavoritePlacesInput>>>;
  firstName?: InputMaybe<Scalars['String']>;
  impairmentLevel?: InputMaybe<UserUpdate_ImpairmentLevel_MutationInput>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_FavoritePlacesInput = {
  addedAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
};

export type MutationUser_FavoritePlacesInput = {
  addedAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
};

export type PlacesAccess = {
  __typename?: 'placesAccess';
  create?: Maybe<PlacesCreateAccess>;
  delete?: Maybe<PlacesDeleteAccess>;
  fields?: Maybe<PlacesFields>;
  read?: Maybe<PlacesReadAccess>;
  update?: Maybe<PlacesUpdateAccess>;
};

export type PlacesDocAccess = {
  __typename?: 'placesDocAccess';
  create?: Maybe<PlacesCreateDocAccess>;
  delete?: Maybe<PlacesDeleteDocAccess>;
  fields?: Maybe<PlacesDocAccessFields>;
  read?: Maybe<PlacesReadDocAccess>;
  update?: Maybe<PlacesUpdateDocAccess>;
};

export type ReviewsAccess = {
  __typename?: 'reviewsAccess';
  create?: Maybe<ReviewsCreateAccess>;
  delete?: Maybe<ReviewsDeleteAccess>;
  fields?: Maybe<ReviewsFields>;
  read?: Maybe<ReviewsReadAccess>;
  update?: Maybe<ReviewsUpdateAccess>;
};

export type ReviewsDocAccess = {
  __typename?: 'reviewsDocAccess';
  create?: Maybe<ReviewsCreateDocAccess>;
  delete?: Maybe<ReviewsDeleteDocAccess>;
  fields?: Maybe<ReviewsDocAccessFields>;
  read?: Maybe<ReviewsReadDocAccess>;
  update?: Maybe<ReviewsUpdateDocAccess>;
};

export type RoutesAccess = {
  __typename?: 'routesAccess';
  create?: Maybe<RoutesCreateAccess>;
  delete?: Maybe<RoutesDeleteAccess>;
  fields?: Maybe<RoutesFields>;
  read?: Maybe<RoutesReadAccess>;
  update?: Maybe<RoutesUpdateAccess>;
};

export type RoutesDocAccess = {
  __typename?: 'routesDocAccess';
  create?: Maybe<RoutesCreateDocAccess>;
  delete?: Maybe<RoutesDeleteDocAccess>;
  fields?: Maybe<RoutesDocAccessFields>;
  read?: Maybe<RoutesReadDocAccess>;
  update?: Maybe<RoutesUpdateDocAccess>;
};

export type Traced_RoutesAccess = {
  __typename?: 'traced_routesAccess';
  create?: Maybe<TracedRoutesCreateAccess>;
  delete?: Maybe<TracedRoutesDeleteAccess>;
  fields?: Maybe<TracedRoutesFields>;
  read?: Maybe<TracedRoutesReadAccess>;
  update?: Maybe<TracedRoutesUpdateAccess>;
};

export type Traced_RoutesDocAccess = {
  __typename?: 'traced_routesDocAccess';
  create?: Maybe<TracedRoutesCreateDocAccess>;
  delete?: Maybe<TracedRoutesDeleteDocAccess>;
  fields?: Maybe<TracedRoutesDocAccessFields>;
  read?: Maybe<TracedRoutesReadDocAccess>;
  update?: Maybe<TracedRoutesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'usersLoginResult', token?: string | null, exp?: number | null, user?: { __typename?: 'User', id?: string | null, email?: any | null, username?: string | null, firstName?: string | null, lastName?: string | null, displayNameType?: User_DisplayNameType | null } | null } | null };

export type MeProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MeProfileQuery = { __typename?: 'Query', meUser?: { __typename?: 'usersMe', user?: { __typename?: 'User', id?: string | null, email?: any | null, username?: string | null, firstName?: string | null, lastName?: string | null, displayNameType?: User_DisplayNameType | null, impairmentLevel?: User_ImpairmentLevel | null, equipment?: User_Equipment | null } | null } | null };

export type CreateReviewMutationVariables = Exact<{
  input: MutationReviewInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview?: { __typename?: 'Review', id?: string | null } | null };

export type CreateTracedRouteMutationVariables = Exact<{
  input: MutationTracedRouteInput;
}>;


export type CreateTracedRouteMutation = { __typename?: 'Mutation', createTracedRoute?: { __typename?: 'TracedRoute', id?: string | null } | null };

export type AllAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnouncementsQuery = { __typename?: 'Query', Announcements?: { __typename?: 'Announcements', docs?: Array<{ __typename?: 'Announcement', id?: string | null, titleTH?: string | null, titleEN?: string | null, descriptionTH?: string | null, descriptionEN?: string | null, tags?: Array<Announcement_Tags> | null, createdAt: any, place?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string } | null } | null> | null } | null };

export type GetAnnouncementByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAnnouncementByIdQuery = { __typename?: 'Query', Announcement?: { __typename?: 'Announcement', id?: string | null, titleTH?: string | null, titleEN?: string | null, descriptionTH?: string | null, descriptionEN?: string | null, tags?: Array<Announcement_Tags> | null, createdAt: any, image?: { __typename?: 'Media', url?: string | null, width?: number | null, height?: number | null } | null, contact?: { __typename?: 'Announcement_Contact', phone?: string | null, email?: string | null, line?: string | null } | null, place?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string } | null } | null };

export type AllPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPlacesQuery = { __typename?: 'Query', Places?: { __typename?: 'Places', docs?: Array<{ __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category, geolocation?: Array<number> | null } | null> | null } | null, Facilities?: { __typename?: 'Facilities', docs?: Array<{ __typename?: 'Facility', id?: string | null, type: Facility_Type, detailTH?: string | null, detailEN?: string | null, geolocation?: Array<number> | null } | null> | null } | null };

export type GetPlaceByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPlaceByIdQuery = { __typename?: 'Query', Place?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category, placeAddressTH?: string | null, placeAddressEN?: string | null, geolocation?: Array<number> | null, phone?: string | null, website?: string | null, image?: { __typename?: 'Media', url?: string | null, width?: number | null, height?: number | null } | null } | null };

export type GetNearbyPlacesFromLocationQueryVariables = Exact<{
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  distance: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetNearbyPlacesFromLocationQuery = { __typename?: 'Query', Places?: { __typename?: 'Places', docs?: Array<{ __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category, geolocation?: Array<number> | null } | null> | null } | null };

export type SearchPlacesQueryVariables = Exact<{
  query: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['JSON']>> | InputMaybe<Scalars['JSON']>>;
}>;


export type SearchPlacesQuery = { __typename?: 'Query', Places?: { __typename?: 'Places', docs?: Array<{ __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category } | null> | null } | null };

export type GetMyReviewsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetMyReviewsQuery = { __typename?: 'Query', Reviews?: { __typename?: 'Reviews', totalDocs?: number | null, docs?: Array<{ __typename?: 'Review', id?: string | null, createdAt: any, place: { __typename?: 'Place', nameTH: string, nameEN: string, category: Place_Category }, rating?: { __typename?: 'Review_Rating', overall?: number | null } | null } | null> | null } | null };

export type GetReviewByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetReviewByIdQuery = { __typename?: 'Query', Review?: { __typename?: 'Review', id?: string | null, createdAt: any, place: { __typename?: 'Place', nameTH: string, nameEN: string, category: Place_Category, image?: { __typename?: 'Media', url?: string | null, width?: number | null, height?: number | null } | null }, rating?: { __typename?: 'Review_Rating', overall?: number | null, ramp?: number | null, assistance?: number | null, elevator?: number | null, toilet?: number | null, parking?: number | null, surface?: number | null, facility?: Array<Review_Rating_Facility> | null, comment?: string | null, images?: Array<{ __typename?: 'Review_Rating_Images', id?: string | null, image?: { __typename?: 'Media', url?: string | null, width?: number | null, height?: number | null } | null }> | null } | null, official?: { __typename?: 'Review_Official', flagged?: boolean | null, comment?: string | null, timestamp?: any | null } | null } | null };

export type GetReviewsByPlaceIdQueryVariables = Exact<{
  placeId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetReviewsByPlaceIdQuery = { __typename?: 'Query', Reviews?: { __typename?: 'Reviews', docs?: Array<{ __typename?: 'Review', id?: string | null, createdAt: any, comment?: string | null, user: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, displayNameType?: User_DisplayNameType | null }, place: { __typename?: 'Place', nameTH: string, nameEN: string, category: Place_Category, image?: { __typename?: 'Media', url?: string | null, width?: number | null, height?: number | null } | null }, rating?: { __typename?: 'Review_Rating', overall?: number | null, ramp?: number | null, assistance?: number | null, elevator?: number | null, toilet?: number | null, parking?: number | null, surface?: number | null, facility?: Array<Review_Rating_Facility> | null, comment?: string | null, images?: Array<{ __typename?: 'Review_Rating_Images', id?: string | null, image?: { __typename?: 'Media', url?: string | null, width?: number | null, height?: number | null } | null }> | null } | null, official?: { __typename?: 'Review_Official', flagged?: boolean | null, comment?: string | null, timestamp?: any | null } | null } | null> | null } | null };

export type SearchRoutesQueryVariables = Exact<{
  from: Scalars['String'];
  to: Scalars['String'];
}>;


export type SearchRoutesQuery = { __typename?: 'Query', Routes?: { __typename?: 'Routes', docs?: Array<{ __typename?: 'Route', id?: string | null, distance?: number | null, route?: any | null, origin?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category } | null, destination?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category } | null } | null> | null } | null };

export type GetPreDefinedRouteByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPreDefinedRouteByIdQuery = { __typename?: 'Query', Route?: { __typename?: 'Route', id?: string | null, distance?: number | null, route?: any | null, origin?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category } | null, destination?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category } | null } | null };

export type GetMyTracedRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyTracedRoutesQuery = { __typename?: 'Query', TracedRoutes?: { __typename?: 'TracedRoutes', totalDocs?: number | null, docs?: Array<{ __typename?: 'TracedRoute', id?: string | null, route?: any | null, duration?: number | null, distance?: number | null, createdAt: any } | null> | null } | null };

export type GetRouteByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRouteByIdQuery = { __typename?: 'Query', TracedRoute?: { __typename?: 'TracedRoute', id?: string | null, route?: any | null, distance?: number | null, duration?: number | null, createdAt: any } | null };

export type GetUserFavoritePlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFavoritePlacesQuery = { __typename?: 'Query', meUser?: { __typename?: 'usersMe', user?: { __typename?: 'User', favoritePlaces?: Array<{ __typename?: 'User_FavoritePlaces', addedAt?: any | null, place?: { __typename?: 'Place', id?: string | null, nameTH: string, nameEN: string, category: Place_Category } | null }> | null } | null } | null };


export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"exp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayNameType"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const MeProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayNameType"}},{"kind":"Field","name":{"kind":"Name","value":"impairmentLevel"}},{"kind":"Field","name":{"kind":"Name","value":"equipment"}}]}}]}}]}}]} as unknown as DocumentNode<MeProfileQuery, MeProfileQueryVariables>;
export const CreateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationReviewInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateTracedRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTracedRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationTracedRouteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTracedRoute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTracedRouteMutation, CreateTracedRouteMutationVariables>;
export const AllAnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Announcements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"titleTH"}},{"kind":"Field","name":{"kind":"Name","value":"titleEN"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionTH"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEN"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<AllAnnouncementsQuery, AllAnnouncementsQueryVariables>;
export const GetAnnouncementByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAnnouncementById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Announcement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"titleTH"}},{"kind":"Field","name":{"kind":"Name","value":"titleEN"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionTH"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEN"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"line"}}]}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetAnnouncementByIdQuery, GetAnnouncementByIdQueryVariables>;
export const AllPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Places"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"geolocation"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Facilities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"curbCut"},{"kind":"EnumValue","value":"transportation"},{"kind":"EnumValue","value":"ramp"}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"detailTH"}},{"kind":"Field","name":{"kind":"Name","value":"detailEN"}},{"kind":"Field","name":{"kind":"Name","value":"geolocation"}}]}}]}}]}}]} as unknown as DocumentNode<AllPlacesQuery, AllPlacesQueryVariables>;
export const GetPlaceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaceById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"placeAddressTH"}},{"kind":"Field","name":{"kind":"Name","value":"placeAddressEN"}},{"kind":"Field","name":{"kind":"Name","value":"geolocation"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceByIdQuery, GetPlaceByIdQueryVariables>;
export const GetNearbyPlacesFromLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNearbyPlacesFromLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lng"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Places"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geolocation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"near"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"lng"}},{"kind":"Variable","name":{"kind":"Name","value":"lat"}},{"kind":"Variable","name":{"kind":"Name","value":"distance"}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"geolocation"}}]}}]}}]}}]} as unknown as DocumentNode<GetNearbyPlacesFromLocationQuery, GetNearbyPlacesFromLocationQueryVariables>;
export const SearchPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPlaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exclude"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}},"defaultValue":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Places"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nameTH"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"like"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nameEN"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"like"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"not_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exclude"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]} as unknown as DocumentNode<SearchPlacesQuery, SearchPlacesQueryVariables>;
export const GetMyReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overall"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}}]}}]}}]} as unknown as DocumentNode<GetMyReviewsQuery, GetMyReviewsQueryVariables>;
export const GetReviewByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReviewById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Review"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overall"}},{"kind":"Field","name":{"kind":"Name","value":"ramp"}},{"kind":"Field","name":{"kind":"Name","value":"assistance"}},{"kind":"Field","name":{"kind":"Name","value":"elevator"}},{"kind":"Field","name":{"kind":"Name","value":"toilet"}},{"kind":"Field","name":{"kind":"Name","value":"parking"}},{"kind":"Field","name":{"kind":"Name","value":"surface"}},{"kind":"Field","name":{"kind":"Name","value":"facility"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"official"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flagged"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<GetReviewByIdQuery, GetReviewByIdQueryVariables>;
export const GetReviewsByPlaceIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReviewsByPlaceId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"place"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayNameType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overall"}},{"kind":"Field","name":{"kind":"Name","value":"ramp"}},{"kind":"Field","name":{"kind":"Name","value":"assistance"}},{"kind":"Field","name":{"kind":"Name","value":"elevator"}},{"kind":"Field","name":{"kind":"Name","value":"toilet"}},{"kind":"Field","name":{"kind":"Name","value":"parking"}},{"kind":"Field","name":{"kind":"Name","value":"surface"}},{"kind":"Field","name":{"kind":"Name","value":"facility"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"official"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flagged"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetReviewsByPlaceIdQuery, GetReviewsByPlaceIdQueryVariables>;
export const SearchRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchRoutes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Routes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"origin"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"destination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"origin"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"destination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"origin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"destination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]}}]} as unknown as DocumentNode<SearchRoutesQuery, SearchRoutesQueryVariables>;
export const GetPreDefinedRouteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreDefinedRouteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Route"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"origin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"destination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"route"}}]}}]}}]} as unknown as DocumentNode<GetPreDefinedRouteByIdQuery, GetPreDefinedRouteByIdQueryVariables>;
export const GetMyTracedRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyTracedRoutes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TracedRoutes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}}]}}]}}]} as unknown as DocumentNode<GetMyTracedRoutesQuery, GetMyTracedRoutesQueryVariables>;
export const GetRouteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRouteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TracedRoute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetRouteByIdQuery, GetRouteByIdQueryVariables>;
export const GetUserFavoritePlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFavoritePlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favoritePlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addedAt"}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameTH"}},{"kind":"Field","name":{"kind":"Name","value":"nameEN"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserFavoritePlacesQuery, GetUserFavoritePlacesQueryVariables>;