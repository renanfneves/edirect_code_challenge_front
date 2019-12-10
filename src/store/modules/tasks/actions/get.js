import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as tasksApi from "api/task";

export const GET_TASKS_START = "GET_TASKS_START";
export const GET_TASKS_COMPLETED = "GET_TASKS_COMPLETED";
export const GET_TASKS_FAILED = "GET_TASKS_FAILED";

const get = ({ projectId }) => async dispatch => {
  try {
    dispatch(simpleAction(GET_TASKS_START));

    const { data = [] } = await tasksApi.get({ projectId });

    await dispatch(simpleAction(GET_TASKS_COMPLETED)(data));

    return data;
  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(GET_TASKS_FAILED)(err.message));

    throw err.message;
  }
};

export default get;
