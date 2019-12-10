import React, { Component } from "react";
import { connect } from "react-redux";
import { func, string, shape } from "prop-types";
import * as sessionActions from "store/modules/session/actions";
import { paths } from "enums";

import { Formik } from "formik";

import View from "./Login";
import FormSchema from "./Form.schema";

class Login extends Component {
  state = {
    initialValues: {
      username: "",
      password: "",
    },
  };

  componentDidMount() {
    const { history, token, resetErrors } = this.props;

    if (token) history.push(paths.HOME);
    resetErrors();
  }

  handleSubmitLogin = async ({ username, password }) => {
    const {
      login,
      location: { redirectTo },
    } = this.props;

    await login({ username, password, redirectTo });
  };

  render() {
    const { initialValues } = this.state;
    const { loginError } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmitLogin}
        validationSchema={FormSchema}
      >
        {props => <View {...props} loginError={loginError} />}
      </Formik>
    );
  }
}

Login.propTypes = {
  login: func.isRequired,
  logout: func.isRequired,
  resetErrors: func.isRequired,
  loggedUser: shape({}),
  loginError: string,
  location: shape({ redirectTo: string }),
  history: shape({}).isRequired,
};

Login.defaultProps = {
  loggedUser: {},
  loginError: "",
  location: {},
};

const mapStateToProps = ({ session }) => ({
  token: session.token,
  loginError: session.error,
});

const mapDispatchToProps = {
  login: sessionActions.login,
  logout: sessionActions.logout,
  resetErrors: sessionActions.resetErrors,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
