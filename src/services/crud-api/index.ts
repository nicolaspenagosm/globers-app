import { IUser } from "../../types/shared";
import { handleErrorResponse } from "../../utils/erros";
import { put, get } from "./base";

const USERS_ENDPOINT = "users";

export const crudAPI = {
  putUser: (user: IUser) =>
    put(`${USERS_ENDPOINT}/${user.id}.json`, user).catch((error) =>
      handleErrorResponse(error)
    ),
  getUser: (userId: string) =>
    get<IUser>(`${USERS_ENDPOINT}/${userId}.json`).catch((error) =>
      handleErrorResponse(error)
    ),
};
