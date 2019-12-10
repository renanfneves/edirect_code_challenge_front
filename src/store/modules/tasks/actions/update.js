import { simpleAction, errorAction, requestErrorHandler } from "utils";
import * as tasksApi from "api/task";

export const UPDATE_TASK_START = "UPDATE_TASK_START";
export const UPDATE_TASK_COMPLETED = "UPDATE_TASK_COMPLETED";
export const UPDATE_TASK_FAILED = "UPDATE_TASK_FAILED";

const update = ({ projectId, taskId }) => async dispatch => {
  try {
    dispatch(simpleAction(UPDATE_TASK_START));

    const { status } = await tasksApi.update({ projectId, taskId });

    await dispatch(simpleAction(UPDATE_TASK_COMPLETED)());

    return status;
  } catch (error) {
    const err = requestErrorHandler(error);

    dispatch(errorAction(UPDATE_TASK_FAILED)(err.message));

    throw err.message;
  }
};

export default update;
