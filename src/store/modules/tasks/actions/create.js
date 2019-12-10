import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as tasksApi from "api/task";

export const CREATE_TASK_START = "CREATE_TASK_START";
export const CREATE_TASK_COMPLETED = "CREATE_TASK_COMPLETED";
export const CREATE_TASK_FAILED = "CREATE_TASK_FAILED";

const create = ({ projectId, name }) => async dispatch => {
  try {
    dispatch(simpleAction(CREATE_TASK_START));

    const { status } = await tasksApi.create({ projectId, name });

    await dispatch(simpleAction(CREATE_TASK_COMPLETED)());

    return status;
  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(CREATE_TASK_FAILED)(err.message));

    throw err.message;
  }
};

export default create;
