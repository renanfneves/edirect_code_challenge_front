import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  NotFound,
  Projects,
  Login,
  CreateUser,
  Dashboard,
  Tasks,
} from "scenes";

import { paths } from "enums";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={paths.HOME} component={Dashboard} />
    <Route exact path={paths.LOGIN} component={Login} />
    <Route exact path={paths.CREATE_USER} component={CreateUser} />
    <Route component={NotFound} />
    {/* <PrivateRoute exact path={paths.Projects} component={Projects} /> */}
    {/* <PrivateRoute exact path={paths.Tasks} component={Tasks} /> */}
  </Switch>
);

export default Routes;
