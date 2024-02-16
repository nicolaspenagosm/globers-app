import { Dispatch } from "@reduxjs/toolkit";
import { IAuth, IUser } from "../../types/shared";
import { authAPI } from "../../services/auth-api";
import { authActions } from "./auth-slice";
import { crudAPI } from "../../services/crud-api";
import { storageAPI } from "../../services/firebase-api/storage-api";
import { streamingAPI } from "../../services/streaming-sse";
import {
  calculateExpiresIn,
  fromSecondsToMiliseconds,
  isDateExpired,
} from "../../utils/date";
import { IOnUpdateFn } from "../../services/streaming-sse/StreamingSSE/StreamingSSE";
import store from "..";
import {
  authDataExists,
  clearAuthDataInLocalStorage,
  getAuthDatFromLocalStorage as getAuthDataFromLocalStorage,
  persistsAuthDataInLocalStorage,
} from "../../utils/localStorage";

export const signUp = (
  authCredentials: IAuth,
  user: IUser,
  userPhoto: File | null
) => {
  return async (dispatch: Dispatch) => {
    const { userId } = await authUser(authCredentials, dispatch, true);
    user.id = userId;
    if (userPhoto)
      user.photoUrl = await storageAPI.uploadFile(userId, userPhoto);
    await crudAPI.putUser(user);
    dispatch(authActions.setLoggedUser(user));
  };
};

export const login = (
  authCredentials: IAuth,
  onUpdateCallback: IOnUpdateFn
) => {
  return async (dispatch: Dispatch) => {
    const { userId, token } = await authUser(authCredentials, dispatch, false);
    loadUser(userId, token, dispatch, onUpdateCallback);
  };
};

export const logout = () => {

  return async (dispatch: Dispatch) => {
    revokeUserAuth(dispatch);
  };
};

export const autoLogin = (onUpdateCallback: IOnUpdateFn) => {
  return async (dispatch: Dispatch) => {
    if (!authDataExists()) return;
    const { tokenData, userId } = getAuthDataFromLocalStorage();

    if (isDateExpired(+tokenData!.tokenExpirationDate)) {
      clearAuthDataInLocalStorage();
      return;
    }

    dispatch(authActions.setToken( tokenData ));

    handleAutologout(
      calculateExpiresIn(+tokenData!.tokenExpirationDate),
      dispatch
    );

    loadUser(userId!, tokenData!.token, dispatch, onUpdateCallback);
  };
};

const loadUser = async (
  userId: string,
  token: string,
  dispatch: Dispatch,
  onUpdateCallback: IOnUpdateFn
) => {
  const loggedUser = (await crudAPI.getUser(userId)).data;
  dispatch(authActions.setLoggedUser(loggedUser));

  if (loggedUser.chatsKeys) {
    streamingAPI.streamChatUpdates({ auth: token }, userId, onUpdateCallback);
  }
};

const authUser = async (
  authCredentials: IAuth,
  dispatch: Dispatch,
  isNewUser: boolean
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
  const tokenData = {
    token: idToken,
    tokenExpirationDate: Date.now() + +expiresIn,
    tokenExpirationTimerId: null,
  };

  dispatch(authActions.setToken(tokenData ));
  persistsAuthDataInLocalStorage(tokenData, userId);
  handleAutologout(fromSecondsToMiliseconds(+expiresIn), dispatch);
  return { token: idToken, userId: userId };
};

const revokeUserAuth = (dispatch: Dispatch) => {

  const tokenExpirationTimerId =
    store.getState().auth.tokenData?.tokenExpirationTimerId;
  if (tokenExpirationTimerId) clearTimeout(tokenExpirationTimerId);
  streamingAPI.closeConnections();
  clearAuthDataInLocalStorage();
  dispatch(authActions.logout());
};

const handleAutologout = (expiresIn: number, dispatch: Dispatch) => {
 
  const timerId = setTimeout(() => {

    revokeUserAuth(dispatch);
  }, expiresIn);
  dispatch(authActions.setAutoLogoutTimer({ timerId }));
};
