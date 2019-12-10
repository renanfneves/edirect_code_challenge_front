import { push } from "connected-react-router";
import { simpleAction } from "utils";
import { paths } from "enums";

export const LOGOUT = "LOGOUT";

const logout = () => async dispatch => {
  await dispatch(simpleAction(LOGOUT)());
  await dispatch(push(paths.LOGIN));
};

export default logout;
