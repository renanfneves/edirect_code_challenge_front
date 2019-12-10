import { requestStatus } from "enums";

import {
  CREATE_USER_START,
  CREATE_USER_COMPLETED,
  CREATE_USER_FAILED,
} from "../actions/createUser";


const INITIAL_STATE = {
  requestStatus: requestStatus.none,
  error: "",
};

export default function reducer(
  state = INITIAL_STATE,
  { type, payload, error } = {},
) {
  switch (type) {
    case CREATE_USER_START:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.loading,
      };
    case CREATE_USER_COMPLETED:
      return {
        ...payload,
        requestStatus: requestStatus.success,
        error: "",
      };
    case CREATE_USER_FAILED:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.error,
        error,
      };
    default:
      return state;
  }
}
