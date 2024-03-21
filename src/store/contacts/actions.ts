import { createAsyncThunk } from '@reduxjs/toolkit';
import { IContact } from '../../types/shared';
import { crudAPI } from '../../services/crud-api';
import { handleErrorResponse as getErrorMsg } from '../../utils/erros';

const NAMESPACE = 'contacts';

export const fetchOverviewData = createAsyncThunk<
  { favContactsOverview: IContact[]; contactsOverview: IContact[] },
  { userId: string },
  { rejectValue: string }
>(`${NAMESPACE}/fetchOverviewData`, async ({ userId }, { rejectWithValue }) => {
  try {
    const [favContactsObj, contatcsObj] = await Promise.all([
      (await crudAPI.getUserContacts(userId, 4, null, true)).data,
      (await crudAPI.getUserContacts(userId, 6, null, false)).data,
    ]);

    return {
      favContactsOverview: Object.values(favContactsObj),
      contactsOverview: Object.values(contatcsObj),
    };
  } catch (error) {
    return rejectWithValue(getErrorMsg(error));
  }
});

export const fetchContactsData = createAsyncThunk<
  { contacts: IContact[] },
  { userId: string },
  { rejectValue: string }
>(`${NAMESPACE}/fetchContactsData`, async ({ userId }, { rejectWithValue }) => {
  try {
    const contacts = (await crudAPI.getUserContacts(userId)).data;
    return { contacts: Object.values(contacts) };
  } catch (error) {
    return rejectWithValue(getErrorMsg(error));
  }
});

export const fetchFavoriteData = createAsyncThunk<
  { favContacts: IContact[] },
  { userId: string },
  { rejectValue: string }
>(`${NAMESPACE}/fetchFavoriteData`, async ({ userId }, { rejectWithValue }) => {
  try {
    const contacts = (await crudAPI.getUserContacts(userId, null, null, true))
      .data;
    return { favContacts: Object.values(contacts) };
  } catch (error) {
    return rejectWithValue(getErrorMsg(error));
  }
});


