import { Dispatch } from "@reduxjs/toolkit";
import { IAuth, IUser } from "../../types/shared";
import { authAPI } from "../../services/auth-api";
import { authActions } from "./auth-slice";
import { crudAPI } from "../../services/crud-api";
import { storageAPI } from "../../services/firebase-api/storage-api";
import { streamingAPI } from "../../services/streaming-sse";
import { fromSecondsToMiliseconds } from "../../utils/date";
import { IOnUpdateFn } from "../../services/streaming-sse/StreamingSSE/StreamingSSE";
import store from "..";

const LOCAL_STORAGE_USER_KEY = "app-logged-user";
const LOCAL_STORAGE_AUTH_KEY = "app-auth";

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
    const loggedUser = (await crudAPI.getUser(userId)).data;
    dispatch(authActions.setLoggedUser(loggedUser));

    if (loggedUser.chatsKeys) {
      streamingAPI.streamChatUpdates({ auth: token }, userId, onUpdateCallback);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch) => {
    revokeUserAuth(dispatch);
  };
};

const authUser = async (
  authCredentials: IAuth,
  dispatch: Dispatch,
  isNewUser: boolean
) => {
  const { idToken, expiresIn, localId } = (
    isNewUser
      ? await authAPI.signUp(authCredentials)
      : await authAPI.login(authCredentials)
  ).data;
  const tokenData = {
    token: idToken,
    tokenExpirationDate: Date.now() + +expiresIn,
    tokenExpirationTimerId: null,
  };
  dispatch(authActions.setToken({ tokenData }));
  handleAutologout(fromSecondsToMiliseconds(+expiresIn), dispatch);
  return { token: idToken, userId: localId };
};

const revokeUserAuth = (dispatch: Dispatch) => {
  const tokenExpirationTimerId =
    store.getState().auth.tokenData?.tokenExpirationTimerId;
  if (tokenExpirationTimerId) clearTimeout(tokenExpirationTimerId);
  streamingAPI.closeConnections();
  dispatch(authActions.logout());
};

const handleAutologout = (expiresIn: number, dispatch: Dispatch) => {
  const timerId = setTimeout(() => {
    revokeUserAuth(dispatch);
  }, expiresIn);
  dispatch(authActions.setAutoLogoutTimer({ timerId }));
};
