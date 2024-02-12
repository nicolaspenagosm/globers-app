import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/shared";

export type AuthState = {
  loggedUser: User | null;
  tokenExpirationTimer: ReturnType<typeof setTimeout> | null;
  token: string | null;
};

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

const initialState: AuthState = {
  loggedUser: null,
  tokenExpirationTimer: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<AuthResponseData>) {
      state.token = payload.idToken;
    },
    logout(state) {
      state.loggedUser = null;
      state.tokenExpirationTimer = null;
      state.loggedUser;
    },
  },
});



export const authActions = authSlice.actions;
export default authSlice.reducer;
