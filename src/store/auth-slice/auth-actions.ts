import { Dispatch } from '@reduxjs/toolkit';
import { IAuth, IUser } from '../../types/shared';
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
import { IOnUpdateFn } from '../../services/streaming-sse/StreamingSSE/StreamingSSE';
import store from '..';
import {
  authDataExists as authDataExistsInLocalStorage,
  clearAuthDataInLocalStorage,
  getAuthDataFromLocalStorage as getAuthDataFromLocalStorage,
  persistsAuthDataInLocalStorage,
} from '../../utils/localStorage';
import { uiActions } from '../ui-slice/ui-slice';

export const signUp = (
  authCredentials: IAuth,
  user: IUser,
  userPhoto: File | null,
) => {
  return async (dispatch: Dispatch) => {
    dispatch(uiActions.setAppIsFetching(true));
    const { userId } = await authUser(authCredentials, dispatch, true);
    user.id = userId;
    if (userPhoto)
      user.photoUrl = await storageAPI.uploadFile(userId, userPhoto);
    await crudAPI.putUser(user);
    dispatch(authActions.setLoggedUser(user));
    dispatch(uiActions.setAppIsFetching(false));
  };
};

export const login = (
  authCredentials: IAuth,
  onUpdateCallback: IOnUpdateFn,
) => {
  return async (dispatch: Dispatch) => {
    dispatch(uiActions.setAppIsFetching(true));
    const { userId, token } = await authUser(authCredentials, dispatch, false);
    await loadUser(userId, token, dispatch, onUpdateCallback);
    dispatch(uiActions.setAppIsFetching(false));
  };
};

export const logout = () => {
  return async (dispatch: Dispatch) => {
    revokeUserAuth(dispatch);
  };
};

export const autoLogin = (onUpdateCallback: IOnUpdateFn) => {
  return async (dispatch: Dispatch) => {
    if (!authDataExistsInLocalStorage()) {
      dispatch(authActions.setLoggedUser(null));
      return;
    }
    const { tokenData, userId } = getAuthDataFromLocalStorage();

    const tokenExpirationDate = +tokenData!.tokenExpirationDate;
    const minutesThreshold = 5;
    if (isDateExpired(tokenExpirationDate, minutesThreshold)) {
      clearAuthDataInLocalStorage();
      return;
    }

    //clearPreviousTokenExpirationTimeout();
    dispatch(authActions.setToken(tokenData));
    handleAutologout(calculateExpiresIn(tokenExpirationDate), dispatch);

    loadUser(userId!, tokenData!.token, dispatch, onUpdateCallback);
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

  const tokenData = {
    token: idToken,
    tokenExpirationDate: Date.now() + expiresInMiliseconds,
    tokenExpirationTimerId: null,
  };
  clearPreviousTokenExpirationTimeout();
  dispatch(authActions.setToken(tokenData));
  persistsAuthDataInLocalStorage(tokenData, userId);
  handleAutologout(expiresInMiliseconds, dispatch);
  return { token: idToken, userId: userId };
};

const loadUser = async (
  userId: string,
  token: string,
  dispatch: Dispatch,
  onUpdateCallback: IOnUpdateFn,
) => {
  const loggedUser = (await crudAPI.getUser(userId)).data;
  dispatch(authActions.setLoggedUser(loggedUser));

  // TODO: Handle this
  if (loggedUser.email === 'never') {
    streamingAPI.streamChatUpdates({ auth: token }, userId, onUpdateCallback);
  }
};

const revokeUserAuth = (dispatch: Dispatch) => {
  clearPreviousTokenExpirationTimeout();
  streamingAPI.closeConnections();
  clearAuthDataInLocalStorage();
  dispatch(authActions.logout());
};

const handleAutologout = (expiresIn: number, dispatch: Dispatch) => {
  // clearPreviousTokenExpirationTimeout();
  const timerId = setTimeout(() => {
    revokeUserAuth(dispatch);
  }, expiresIn);
  dispatch(authActions.setAutoLogoutTimer({ timerId }));
};

const clearPreviousTokenExpirationTimeout = () => {
  const prevTimeout = store.getState().auth.tokenData?.tokenExpirationTimerId;
  if (prevTimeout) clearTimeout(prevTimeout);
};
