import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as projectsApi from "api/project";
import get from "./get";

export const CREATE_PROJECT_START = "CREATE_PROJECT_START";
export const CREATE_PROJECT_COMPLETED = "CREATE_PROJECT_COMPLETED";
export const CREATE_PROJECT_FAILED = "CREATE_PROJECT_FAILED";

const create = ({ name }) => async dispatch => {
  try {
    dispatch(simpleAction(CREATE_PROJECT_START));

    const { status } = await projectsApi.create({ name });

    await dispatch(simpleAction(CREATE_PROJECT_COMPLETED)());
    dispatch(get());
    return status;
  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(CREATE_PROJECT_FAILED)(err.message));

    throw err.message;
  }
};

export default create;
