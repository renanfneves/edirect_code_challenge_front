import { requestStatus } from "enums";

import {
  LOGIN_START,
  LOGIN_COMPLETED,
  LOGIN_FAILED,
} from "store/modules/session/actions/login";

import { LOGOUT } from "store/modules/session/actions/logout";
import { RESET_LOGIN_ERRORS } from "store/modules/session/actions/resetErrors";

const INITIAL_STATE = {
  loggedUserId: null,
  name: "",
  cpf: "",
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
        ...state,
        ...INITIAL_STATE,
        requestStatus: requestStatus.loading,
      };
    case LOGIN_COMPLETED:
      return {
        ...state,
        ...payload,
        requestStatus: requestStatus.success,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        ...state,
        name: INITIAL_STATE.name,
        cpf: INITIAL_STATE.cpf,
        loggedUser: INITIAL_STATE.loggedUser,
        loggedUserId: INITIAL_STATE.loggedUserId,
        requestStatus: requestStatus.error,
        error,
      };
    case RESET_LOGIN_ERRORS:
      return {
        ...state,
        error: INITIAL_STATE.error,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}
