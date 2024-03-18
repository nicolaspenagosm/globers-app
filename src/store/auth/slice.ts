import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/shared';
import { login, signUp, autoLogin } from './actions';
import { HTTP_STATUS } from '../../resources/http';
import { AuthState, TokenData } from './types';

const initialState: AuthState = {
  loggedUser: undefined,
  tokenData: null,
  authRequestSatus: null,
  errorMsg: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.loggedUser = null;
      state.tokenData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.authRequestSatus = HTTP_STATUS.PENDING;
    });
    builder.addCase(login.pending, (state) => {
      state.authRequestSatus = HTTP_STATUS.PENDING;
    });

    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      handleAuthStateFullfilled(state, payload);
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      handleAuthStateFullfilled(state, payload);
    });
    builder.addCase(autoLogin.fulfilled, (state, { payload }) => {
      handleAuthStateFullfilled(state, payload);
    });

    builder.addCase(autoLogin.rejected, (state) => {
      handleAuthRejected(state);
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      handleAuthRejected(state, payload!.errorMsg);
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      handleAuthRejected(state, payload!.errorMsg);
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

const handleAuthStateFullfilled = (
  state: AuthState,
  payload: { tokenData: TokenData; user: IUser | null },
) => {
  state.authRequestSatus = HTTP_STATUS.FULFILLED;
  state.tokenData = payload.tokenData;
  state.loggedUser = payload.user;
  state.errorMsg = null;
};

const handleAuthRejected = (state: AuthState, errMsg?: string) => {
  state.tokenData = null;
  state.loggedUser = null;
  state.authRequestSatus = HTTP_STATUS.REJECTED;
  if (errMsg) state.errorMsg = errMsg;
};
