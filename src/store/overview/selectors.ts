import { RootState } from '../index';
export const selectFavContacts = (state: RootState) =>
  state.overview.firstFavoritesContacs;

export const selectContacts = (state: RootState) =>
  state.overview.firstContacts;
