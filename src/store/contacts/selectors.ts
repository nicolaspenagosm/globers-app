import { RootState } from '../index';

export const selectFavContactsOverview = (state: RootState) =>
  state.contacts.favContactsOverview;

export const selectContactsOverview = (state: RootState) =>
  state.contacts.contactsOverview;

export const selectFavContacts = (state: RootState) =>
  state.contacts.favContacts;

export const selectContacts = (state: RootState) => state.contacts.contacts;

export const selectRequestErrorMsg = (state: RootState) =>
  state.contacts.requestErrorMsg;

export const selectRequestStatus = (state: RootState) =>
  state.contacts.requestStatus;

export const selectFavoritesPageIndex = (state: RootState) =>
  state.contacts.favoritesPageIndex;

export const selectContactsPageIndex = (state: RootState) =>
  state.contacts.contactsPageIndex;


