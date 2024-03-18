
import { IAuthResponseData } from '../../store/auth/types';
import { IAuth } from '../../types/shared';
import { post } from './base';

const BASE_ENDPOINT = `accounts:`;

export const authAPI = {
  login: (params: IAuth) =>
    post<IAuthResponseData>(`${BASE_ENDPOINT}signInWithPassword`, params),
  signUp: (params: IAuth) =>
    post<IAuthResponseData>(`${BASE_ENDPOINT}signUp`, params),
};
