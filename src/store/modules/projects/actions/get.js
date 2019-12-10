import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as projectsApi from "api/project";

export const GET_PROJECTS_START = "GET_PROJECTS_START";
export const GET_PROJECTS_COMPLETED = "GET_PROJECTS_COMPLETED";
export const GET_PROJECTS_FAILED = "GET_PROJECTS_FAILED";

const get = () => async dispatch => {
  try {
    dispatch(simpleAction(GET_PROJECTS_START));

    const { data } = await projectsApi.get();

    await dispatch(simpleAction(GET_PROJECTS_COMPLETED)(data || []));

  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(GET_PROJECTS_FAILED)(err.message));

    throw err.message;
  }
};

export default get;
