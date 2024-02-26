import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth } from '../../types/shared';
import { authAPI } from '../../services/auth-api';
import { authActions } from './auth-slice';
import { crudAPI } from '../../services/crud-api';
import { storageAPI } from '../../services/firebase-api/storage-api';
import { streamingAPI } from '../../services/streaming-sse';
import {
  calculateExpiresIn,
  fromSecondsToMiliseconds,
  isDateExpired,
} from '../../utils/date';
import store from '..';
import {
  authDataExists as authDataExistsInLocalStorage,
  clearAuthDataInLocalStorage,
  getAuthDataFromLocalStorage as getAuthDataFromLocalStorage,
  persistsAuthDataInLocalStorage,
} from '../../utils/localStorage';
import { handleErrorResponse } from '../../utils/erros';
import { AuthDataResponse, ErrorMsg, LoginParams, SignUpParams } from './types';

const NAMESPACE = 'auth';

export const signUp = createAsyncThunk<
  AuthDataResponse,
  SignUpParams,
  { rejectValue: ErrorMsg }
>(
  `${NAMESPACE}/signUp`,
  async (
    { authCredentials, user, userPhoto },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const { userId, tokenData } = await authUser(
        authCredentials,
        dispatch,
        true,
      );
      user.id = userId;
      if (userPhoto)
        user.photoUrl = await storageAPI.uploadFile(userId, userPhoto);
      await crudAPI.putUser(user, tokenData.token);
      return { tokenData, user };
    } catch (error) {
      const errorMsg = handleErrorResponse(error);
      return rejectWithValue({ errorMsg });
    }
  },
);

export const login = createAsyncThunk<
  AuthDataResponse,
  LoginParams,
  { rejectValue: ErrorMsg }
>(
  `${NAMESPACE}/login`,
  async ({ authCredentials }, { dispatch, rejectWithValue }) => {
    try {
      const { userId, tokenData } = await authUser(
        authCredentials,
        dispatch,
        false,
      );

      const user = (await crudAPI.getUser(userId, tokenData.token)).data;
      return { tokenData, user };
    } catch (error) {
      const errorMsg = handleErrorResponse(error);
      return rejectWithValue({ errorMsg });
    }
  },
);

export const autoLogin = createAsyncThunk<
  AuthDataResponse,
  void,
  { rejectValue: void }
>(`${NAMESPACE}/autoLogin`, async (_: void, { dispatch, rejectWithValue }) => {
  if (!authDataExistsInLocalStorage()) {
    return rejectWithValue();
  }
  const { tokenData, userId } = getAuthDataFromLocalStorage();

  const tokenExpirationDate = +tokenData!.tokenExpirationDate;
  const minutesThreshold = 5;
  if (isDateExpired(tokenExpirationDate, minutesThreshold)) {
    clearAuthDataInLocalStorage();
    return rejectWithValue();
  }

  handleAutologout(calculateExpiresIn(tokenExpirationDate), dispatch);

  const user = (await crudAPI.getUser(userId!, tokenData!.token)).data;
  return { tokenData, user };
});

export const logout = () => {
  return async (dispatch: Dispatch) => {
    revokeUserAuth(dispatch);
  };
};

const authUser = async (
  authCredentials: IAuth,
  dispatch: Dispatch,
  isNewUser: boolean,
) => {
  const {
    idToken,
    expiresIn,
    localId: userId,
  } = (
    isNewUser
      ? await authAPI.signUp(authCredentials)
      : await authAPI.login(authCredentials)
  ).data;

  const expiresInMiliseconds = fromSecondsToMiliseconds(+expiresIn);

  clearPreviousTokenExpirationTimeout();

  const tokenData = {
    token: idToken,
    tokenExpirationDate: Date.now() + expiresInMiliseconds,
    tokenExpirationTimerId: +handleAutologout(expiresInMiliseconds, dispatch),
  };
  persistsAuthDataInLocalStorage(tokenData, userId);
  return { tokenData, userId };
};

const revokeUserAuth = (dispatch: Dispatch) => {
  clearPreviousTokenExpirationTimeout();
  streamingAPI.closeConnections();
  clearAuthDataInLocalStorage();
  dispatch(authActions.logout());
};

const handleAutologout = (expiresIn: number, dispatch: Dispatch) => {
  return setTimeout(() => {
    revokeUserAuth(dispatch);
  }, expiresIn);
};

const clearPreviousTokenExpirationTimeout = () => {
  const prevTimeout = store.getState().auth.tokenData?.tokenExpirationTimerId;
  if (prevTimeout) clearTimeout(prevTimeout);
};
