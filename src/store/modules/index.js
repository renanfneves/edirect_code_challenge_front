import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import session from "./session/reducers/session";
import projects from "./projects/reducers/availableProjects";
import tasks from "./projects/reducers/availableProjects";
import createdUser from "./user/reducers/createdUser";
import createdProject from "./projects/reducers/createdProject";

export default history =>
  combineReducers({
    router: connectRouter(history),
    session,
    createdUser,
    projects,
    tasks,
    createdProject,
  });
