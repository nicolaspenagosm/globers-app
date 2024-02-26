import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/shared';

type TimerType = ReturnType<typeof setTimeout>;
export type TokenData = {
  tokenExpirationTimerId: TimerType | null;
  token: string;
  tokenExpirationDate: number;
} | null;

export type AuthState = {
  loggedUser: IUser | null | undefined;
  tokenData: TokenData;
};

export interface IAuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  displayedName?: string;
}

const initialState: AuthState = {
  loggedUser: undefined,
  tokenData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<TokenData>) {
      state.tokenData = payload;
    },
    setAutoLogoutTimer(
      state,
      { payload }: PayloadAction<{ timerId: TimerType }>,
    ) {
      state.tokenData!.tokenExpirationTimerId = payload.timerId;
    },
    logout(state) {
      state.loggedUser = null;
      state.tokenData = null;
    },
    setLoggedUser(state, { payload }: PayloadAction<IUser | null>) {
      state.loggedUser = payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
