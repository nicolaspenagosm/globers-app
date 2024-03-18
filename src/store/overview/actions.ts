import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorResponse } from '../../utils/erros';
import { IContact } from '../../types/shared';
import { ErrorMsg } from '../auth/types';
import { crudAPI } from '../../services/crud-api';

const NAMESPACE = 'overview';

export const fetchOverviewData = createAsyncThunk<
  { favContacts: IContact[]; contacts: IContact[] },
  { userId: string },
  { rejectValue: ErrorMsg }
>(`${NAMESPACE}/fetchOverviewData`, async ({ userId }, { rejectWithValue }) => {
  try {
    const [favContactsObj, contatcsObj] = await Promise.all([
      (await crudAPI.getUserContacts(userId, 4, null, true)).data,
      (await crudAPI.getUserContacts(userId, 6, null, false)).data,
    ]);

    console.log(favContactsObj);
    return {
      favContacts: Object.values(favContactsObj),
      contacts: Object.values(contatcsObj),
    };
  } catch (error) {
    const errorMsg = handleErrorResponse(error);
    return rejectWithValue({ errorMsg });
  }
});
