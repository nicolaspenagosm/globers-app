import { createSlice } from '@reduxjs/toolkit';
import { ContactsState } from './types';
import {
  fetchContactsData,
  fetchFavoriteData,
  fetchOverviewData,
} from './actions';
import { HTTP_STATUS } from '../../resources/http';

const initialState: ContactsState = {
  favContactsOverview: [],
  contactsOverview: [],
  favContacts: [],
  contacts: [],
  requestErrorMsg: null,
  requestStatus: null,
  favoritesPageIndex: 0,
  contactsPageIndex: 0,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOverviewData.pending, (state) => handlePending(state));
    builder.addCase(fetchOverviewData.fulfilled, (state, { payload }) => {
      state.favContactsOverview = payload.favContactsOverview;
      state.contactsOverview = payload.contactsOverview;
      state.requestStatus = HTTP_STATUS.FULFILLED;
    });
    builder.addCase(fetchOverviewData.rejected, (state, { payload }) =>
      handleError(state, payload!),
    );

    builder.addCase(fetchContactsData.pending, (state) => handlePending(state));
    builder.addCase(fetchContactsData.fulfilled, (state, { payload }) => {
      state.contacts = payload.contacts;
      state.requestStatus = HTTP_STATUS.FULFILLED;
    });
    builder.addCase(fetchContactsData.rejected, (state, { payload }) =>
      handleError(state, payload!),
    );

    builder.addCase(fetchFavoriteData.pending, (state) => handlePending(state));
    builder.addCase(fetchFavoriteData.fulfilled, (state, { payload }) => {
      state.favContacts = payload.favContacts;
      state.requestStatus = HTTP_STATUS.FULFILLED;
    });
    builder.addCase(fetchFavoriteData.rejected, (state, { payload }) =>
      handleError(state, payload!),
    );
  },
});

function handlePending(state: ContactsState) {
  state.requestStatus = HTTP_STATUS.PENDING;
}

function handleError(state: ContactsState, payload: string) {
  state.requestErrorMsg = payload;
  state.requestStatus = HTTP_STATUS.REJECTED;
}

export const contactsAction = contactsSlice.actions;
export default contactsSlice.reducer;
