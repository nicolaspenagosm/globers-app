import { IContact, IHTTPParams, IUser, TNoValue } from '../../types/shared';
import { parseHTTPParams } from '../../utils/http';
import { put, get, remove, patch } from './base';

const USERS_ENDPOINT = 'users';
const CONTACTS_ENDPOINT = 'contacts';
const IS_FAVORITE_PROPERTY = 'isFavorite';

interface IDatabaseResponse {
  timestamp: number;
  success: boolean;
  message?: string;
}

interface IContactResponse extends IDatabaseResponse {
  data: { [key: string]: IContact };
}

export const crudAPI = {
  putUser: (user: IUser, token: string) =>
    put(`${USERS_ENDPOINT}/${user.id}.json?auth=${token}`, user),

  getUser: (userId: string, token: string) =>
    get<IUser>(`${USERS_ENDPOINT}/${userId}.json?auth=${token}`),

  postUserContact: (userId: string, contact: IContact) =>
    put(`${CONTACTS_ENDPOINT}/${userId}/${contact.id}.json`, contact),

  getUserContacts: (
    userId: string,
    limit?: number | TNoValue,
    startAt?: string | TNoValue,
    filterFavorites?: boolean | TNoValue,
  ) => {
    const params: IHTTPParams = {};
    if (limit) params.limit = limit;
    if (startAt) params.startAt = startAt;

    if (typeof filterFavorites === 'boolean') {
      params.orderBy = IS_FAVORITE_PROPERTY;
      params.startAt = filterFavorites.toString();
      params.endAt = filterFavorites.toString();
    }

    return get<IContactResponse>(
      `${CONTACTS_ENDPOINT}/${userId}.json${parseHTTPParams(params)}`,
    );
  },
  // getFavoriteUserContacts: (userId: string, limit?: number) => {
  //   const params: IHTTPParams = {};
  //   if (limit) params.limit = limit;
  //   params.orderBy = IS_FAVORITE_PROPERTY;
  //   params.startAt = 'true';
  //   return get<IContactResponse>(
  //     `${CONTACTS_ENDPOINT}/${userId}.json${parseHTTPParams(params)}`,
  //   );
  // },

  updateUserContact: (
    userId: string,
    contactId: string,
    property: string,
    value: string,
  ) =>
    patch(
      `${CONTACTS_ENDPOINT}/${userId}/${contactId}/${property}.json`,
      value,
    ),

  deleteUserContact: (userId: string, contactId: string) =>
    remove(`${CONTACTS_ENDPOINT}/${userId}/${contactId}.json`),
};
