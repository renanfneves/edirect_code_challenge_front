import { requestStatus } from "enums";

import {
  GET_PROJECTS_START,
  GET_PROJECTS_COMPLETED,
  GET_PROJECTS_FAILED,
} from "../actions/get";

const INITIAL_STATE = {
  token: "",
  requestStatus: requestStatus.none,
  error: "",
  payload: [],
};

export default function reducer(
  state = INITIAL_STATE,
  { type, payload, error } = {},
) {
  switch (type) {
    case GET_PROJECTS_START:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.loading,
      };
    case GET_PROJECTS_COMPLETED:
      return {
        payload,
        requestStatus: requestStatus.success,
        error: "",
      };
    case GET_PROJECTS_FAILED:
      return {
        ...INITIAL_STATE,
        requestStatus: requestStatus.error,
        error,
      };
    default:
      return state;
  }
}
