import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { createUser as createUserAction } from "store/modules/user/actions";
import { redirectTo as redirectToAction} from "store/modules/routes/actions";
import { paths } from "enums";
import { notification } from "antd";

import { Formik } from "formik";

import View from "./CreateUser";
import FormSchema from "./Form.schema";

class CreateUser extends Component {
  state = {
    initialValues: {
      name: "",
      username: "",
      password: "",
    },
  };

  handleSubmit = async values => {
    const { create, redirectTo } = this.props;

    const requestStatus = await create({ ...values });

    if (requestStatus === 201) {
      setTimeout(() => redirectTo(paths.LOGIN), 5000);

      notification.open({
        description: "Usuário cadastrado com sucesso",
      });
    }
  };



  render() {
    const { initialValues } = this.state;
    const { requestError } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={FormSchema}
      >
        {props => <View {...props} requestError={requestError} />}
      </Formik>
    );
  }
}

CreateUser.propTypes = {
  create: func.isRequired,
};

CreateUser.defaultProps = {};

const mapStateToProps = ({ createdUser })=> ({ 
  requestError: createdUser.error,
});

const mapDispatchToProps = {
  create: createUserAction,
  redirectTo: redirectToAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
