import { ERROR_MSGS } from '../resources/errorCodeAndMessages';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleErrorResponse = (error: any): string => {
  let errorResponse;
  if (error.response && error.response.data) {
    if (error.response.data.error && error.response.data.error.message) {
      errorResponse = error.response.data.error.message;
    } else {
      errorResponse = error.response.data;
    }
  } else if (error.request) {
    errorResponse = error.request.message || error.request.statusText;
  } else {
    errorResponse = error.message;
  }
  return errorResponse;
};

const buildFirebaseErrorMapHOF = () => {
  const authFirebaseMap = new Map<string, string>();
  for (const [code, { msg }] of Object.entries(ERROR_MSGS.authFirebaseApi)) {
    authFirebaseMap.set(code, msg);
  }
  return (error: string) => {
    const msg = authFirebaseMap.get(error);
    if (msg) return msg;
    return error;
  };
};

export const mapFirebaseErrorMsg = buildFirebaseErrorMapHOF();
