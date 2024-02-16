import { IHTTPParams } from "../types/shared";

export const parseHTTPParams = (params: IHTTPParams) => {
  let parsedParams = "";
  for (const [key, value] of Object.entries(params)) {
    parsedParams += `?${key}=${value}`;
  }
  return parsedParams;
};
