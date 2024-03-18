import { TokenData } from "../store/auth/types";


const LOCAL_STORAGE_USER_KEY_ID = 'app-logged-user-id';
const LOCAL_STORAGE_AUTH_KEY = 'app-auth-data';

export const persistsAuthDataInLocalStorage = (
  tokenData: TokenData,
  userId: string,
) => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY_ID, userId);
  localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(tokenData));
};

export const clearAuthDataInLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY_ID);
  localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
};

export const authDataExists = () => {
  return (
    localStorage.getItem(LOCAL_STORAGE_USER_KEY_ID) !== null &&
    localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) !== null
  );
};

export const getAuthDataFromLocalStorage = () => {
  const tokenData: TokenData = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)!,
  );
  const userId = localStorage.getItem(LOCAL_STORAGE_USER_KEY_ID);
  return { tokenData, userId };
};
