import React, { Component } from "react";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import * as projectsActions from "store/modules/projects/actions";
import { logout as logoutAction } from "store/modules/session/actions";

import { Formik } from "formik";

import View from "./Dashboard";
import FormSchema from "./Form.schema";

class Dashboard extends Component {
  state = {
    initialValues: {
      name: "",
    },
  };

  componentDidMount() {
    const { getProjects } = this.props;

    getProjects();
  }

  handleSubmit = async ({ name }, { resetForm }) => {
    const { create } = this.props;

    await create({ name });

    resetForm();
  };

  render() {
    const { initialValues } = this.state;
    const { projects, loggedUser, logout } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={FormSchema}
      >
        {props => ( 
          <View 
            {...props}
            projects={projects} 
            loggedUser={loggedUser}
            logout={logout}
          />
        )}
      </Formik>
    );
  }
}

Dashboard.propTypes = {
  create: func.isRequired,
  loggedUser: string,
  getProjects: func.isRequired,
  logout: func.isRequired,
};

Dashboard.defaultProps = {
  loggedUser: "",
};

const mapStateToProps = ({ projects, session })=> ({ 
  projects: projects.payload,
  loggedUser: session.loggedUser,
});

const mapDispatchToProps = {
  create: projectsActions.create,
  getProjects: projectsActions.get,
  logout: logoutAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
