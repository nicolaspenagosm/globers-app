import { IHTTPParams } from '../types/shared';
import { isNumber } from './number';

export const parseHTTPParams = (params: IHTTPParams) => {
  let parsedParams = '?';
  for (const [key, value] of Object.entries(params)) {
    const val = isNumber(value) ? `${value}` : `"${value}"`;
    parsedParams += `${key}=${val}&`;
  }
  return parsedParams;
};
