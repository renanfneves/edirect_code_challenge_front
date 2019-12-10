import { push } from "connected-react-router";
import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as sessionApi from "api/session";
import { fromApi } from "api/dtos/user.dto";
import { paths } from "enums";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_COMPLETED = "LOGIN_COMPLETED";
export const LOGIN_FAILED = "LOGIN_FAILED";

const login = ({ username, password, redirectTo }) => async dispatch => {
  try {
    dispatch(simpleAction(LOGIN_START));

    const { data = {} } = await sessionApi.login({
      username,
      password,
    });

    const loggedUser = fromApi(data);

    await dispatch(simpleAction(LOGIN_COMPLETED)(loggedUser));


    const path = redirectTo || paths.HOME;

    await dispatch(push(path));
  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(LOGIN_FAILED)(err.message));

    throw err.message;
  }
};

export default login;
