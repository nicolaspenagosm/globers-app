import { AuthResponseData } from "../../store/auth-slice/auth-slice";
import { IAuth } from "../../types/shared";
import { handleErrorResponse } from "../../utils/erros";
import { post } from "./base";

const BASE_ENDPOINT = `accounts:`;

export const authAPI = {
  login: (params: IAuth) =>
    post<AuthResponseData>(`${BASE_ENDPOINT}signInWithPassword`, params).catch(
      (error) => handleErrorResponse(error)
    ),
  signUp: (params: IAuth) =>
    post<AuthResponseData>(`${BASE_ENDPOINT}signUp`, params).catch((error) =>
      handleErrorResponse(error)
    ),
};
