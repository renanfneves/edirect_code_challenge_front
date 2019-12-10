import React from "react";
import { func, shape, string } from "prop-types";

import { Route, Redirect } from "react-router-dom";
import store from "store";

const isAuthenticated = () => {
  const {
    session: { token },
  } = store.getState();

  return !!token;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            redirectTo:
              props.location &&
              `${props.location.pathname}${props.location.search}`,
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired,
  location: shape({
    pathname: string,
  }),
};

PrivateRoute.defaultProps = {
  location: {
    pathname: "",
  },
};

export default PrivateRoute;
