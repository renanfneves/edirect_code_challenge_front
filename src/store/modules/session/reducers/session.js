import { requestStatus } from "enums";

import {
  LOGIN_START,
  LOGIN_COMPLETED,
  LOGIN_FAILED,
} from "../actions/login";

import { RESET_LOGIN_ERRORS } from "../actions/resetErrors";
import { LOGOUT } from "../actions/logout";

const INITIAL_STATE = {
  token: "",
  loggedUser: "",
  requestStatus: requestStatus.none,
  error: "",
};

export default function reducer(
  state = INITIAL_STATE,
  { type, payload, error } = {},
) {
  switch (type) {
    case LOGIN_START:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.loading,
      };
    case LOGIN_COMPLETED:
      return {
        ...payload,
        requestStatus: requestStatus.success,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.error,
        error,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case RESET_LOGIN_ERRORS: {
      return {
        ...state,
        error: "",
      };
    }
    default:
      return state;
  }
}
