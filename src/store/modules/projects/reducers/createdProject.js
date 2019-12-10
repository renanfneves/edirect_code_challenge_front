import { requestStatus } from "enums";

import {
  CREATE_PROJECT_START,
  CREATE_PROJECT_COMPLETED,
  CREATE_PROJECT_FAILED,
} from "../actions/create";


const INITIAL_STATE = {
  requestStatus: requestStatus.none,
  error: "",
};

export default function reducer(
  state = INITIAL_STATE,
  { type, payload, error } = {},
) {
  switch (type) {
    case CREATE_PROJECT_START:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.loading,
      };
    case CREATE_PROJECT_COMPLETED:
      return {
        ...payload,
        requestStatus: requestStatus.success,
        error: "",
      };
    case CREATE_PROJECT_FAILED:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.error,
        error,
      };
    default:
      return state;
  }
}
