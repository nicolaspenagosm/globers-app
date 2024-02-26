import { IContact, IHTTPParams, IUser } from '../../types/shared';
import { parseHTTPParams } from '../../utils/http';
import { put, get, remove, patch } from './base';

const USERS_ENDPOINT = 'users';
const CONTACTS_ENDPOINT = 'contacts';

export const crudAPI = {
  putUser: (user: IUser, token: string) =>
    put(`${USERS_ENDPOINT}/${user.id}.json?auth=${token}`, user),

  getUser: (userId: string, token: string) =>
    get<IUser>(`${USERS_ENDPOINT}/${userId}.json?auth=${token}`),

  postUserContact: (userId: string, contact: IContact) =>
    put(`${CONTACTS_ENDPOINT}/${userId}/${contact.id}.json`, contact),

  getUserContacts: (userId: string, limit?: number, startAt?: string) => {
    const params: IHTTPParams = {};
    if (limit) params.limit = limit;
    if (startAt) params.startAt = startAt;
    return get<IContact>(
      `${CONTACTS_ENDPOINT}/${userId}.json${parseHTTPParams(params)}`,
    );
  },

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
