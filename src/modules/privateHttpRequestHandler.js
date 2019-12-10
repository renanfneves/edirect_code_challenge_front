import axios from "axios";
import { logout } from "store/modules/session/actions";
import { removeEmptyValues } from "utils";
import { isObject, isEmpty } from "lodash";

import store from "store";

const baseHeaders = {
  responseType: "application/json",
};

const requester = axios.create({
  headers: baseHeaders,
});

const axiosUploadProgress = callback => {
  if (!callback) {
    return null;
  }

  return progressEvent => {
    const percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total,
    );
    callback(percentCompleted);
  };
};

export const addResponseInterceptor = dispatch => {
  requester.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 403 || error.response.status === 401) {
        dispatch(logout());
      }
      return Promise.reject(error);
    },
  );
};

const privateHttpRequestHandler = ({
  method,
  url,
  body = null,
  params = null,
  uploadProgress = null,
  headers = null,
}) => {
  try {
    addResponseInterceptor(store.dispatch);
    const { session } = store.getState();

    const authorization =
      isObject(session) && !isEmpty(session) ? session.token : "";

    const request = {
      method,
      url,
      data: body,
      headers: { ...headers, authorization },
      params: removeEmptyValues(params),
      onUploadProgress: axiosUploadProgress(uploadProgress),
    };

    return requester(request)
      .then(data => Promise.resolve(data))
      .catch(err => Promise.reject(err.response));
  } catch (error) {
    return Promise.reject(error.response);
  }
};

export default privateHttpRequestHandler;