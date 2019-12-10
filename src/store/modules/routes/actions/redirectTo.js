import { push } from "connected-react-router";

const redirectTo = path => async dispatch => {
  await dispatch(push(path));
};

export default redirectTo;
