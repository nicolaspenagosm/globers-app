export const handleErrorResponse = (error: any) => {
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
  throw new Error(errorResponse);
};
