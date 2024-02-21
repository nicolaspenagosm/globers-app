import { IContact, IHTTPParams, IUser } from '../../types/shared';
import { handleErrorResponse } from '../../utils/erros';
import { parseHTTPParams } from '../../utils/http';
import { put, get, remove, patch } from './base';

const USERS_ENDPOINT = 'users';
const CONTACTS_ENDPOINT = 'contacts';

export const crudAPI = {
  putUser: (user: IUser) =>
    put(`${USERS_ENDPOINT}/${user.id}.json`, user).catch((error) =>
      handleErrorResponse(error),
    ),

  getUser: (userId: string) =>
    get<IUser>(`${USERS_ENDPOINT}/${userId}.json`).catch((error) =>
      handleErrorResponse(error),
    ),

  postUserContact: (userId: string, contact: IContact) =>
    put(`${CONTACTS_ENDPOINT}/${userId}/${contact.id}.json`, contact).catch(
      (error) => handleErrorResponse(error),
    ),

  getUserContacts: (userId: string, limit?: number, startAt?: string) => {
    const params: IHTTPParams = {};
    if (limit) params.limit = limit;
    if (startAt) params.startAt = startAt;
    return get<IContact>(
      `${CONTACTS_ENDPOINT}/${userId}.json${parseHTTPParams(params)}`,
    ).catch((error) => handleErrorResponse(error));
  },

  updateUserContact: (
    userId: string,
    contactId: string,
    property: string,
    value: String,
  ) =>
    patch(
      `${CONTACTS_ENDPOINT}/${userId}/${contactId}/${property}.json`,
      value,
    ).catch((error) => handleErrorResponse(error)),

  deleteUserContact: (userId: string, contactId: string) =>
    remove(`${CONTACTS_ENDPOINT}/${userId}/${contactId}.json`).catch((error) =>
      handleErrorResponse(error),
    ),
};
