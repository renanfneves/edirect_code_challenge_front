import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as userApi from "api/user";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_COMPLETED = "CREATE_USER_COMPLETED";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

const create = ({ name, username, password, redirectTo }) => async dispatch => {
  try {
    dispatch(simpleAction(CREATE_USER_START));

    const { status } = await userApi.create({ name, username, password });

    await dispatch(simpleAction(CREATE_USER_COMPLETED)());

    return status;
  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(CREATE_USER_FAILED)(err.message));

    throw err.message;
  }
};

export default create;
