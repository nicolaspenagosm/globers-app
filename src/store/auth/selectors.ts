import { RootState } from '../index';

export const selectAuthRequestStatus = (state: RootState) =>
  state.auth.authRequestSatus;

export const selectAuthErrorMsg = (state: RootState) => state.auth.errorMsg;

export const selectLoggedUser = (state: RootState) => state.auth.loggedUser;
