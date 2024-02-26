import { IAuth, IUser } from '../../types/shared';

export type TokenData = {
  tokenExpirationTimerId: number | null;
  token: string;
  tokenExpirationDate: number;
} | null;

export interface AuthDataResponse {
  tokenData: TokenData;
  user: IUser;
}

export type AuthState = {
  loggedUser: IUser | null | undefined;
  tokenData: TokenData;
  authRequestSatus: string | null;
  errorMsg: string | null;
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

export interface LoginParams {
  authCredentials: IAuth;
}

export interface SignUpParams extends LoginParams {
  user: IUser;
  userPhoto: File | null;
}

export interface ErrorMsg {
  errorMsg: string;
}
