import { simpleAction } from "utils";

export const RESET_LOGIN_ERRORS = "RESET_LOGIN_ERRORS";

const resetErrors = () => async dispatch => {
  await dispatch(simpleAction(RESET_LOGIN_ERRORS)());
};

export default resetErrors;
