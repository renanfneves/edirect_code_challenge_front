import React, { Component } from "react";
import { connect } from "react-redux";
import { string, number, shape, func } from "prop-types";

import { Formik } from "formik";

import { get, create, update } from "store/modules/tasks/actions";

import FormSchema from "./Form.schema";
import View from "./ProjectCard";

class ProjectCard extends Component {
  state = {
    tasks: [],
    initialValues: {
      name: "",
    }
  }

  async componentDidMount() {
   this.fetchData();
  }

  fetchData = async () => {
    const { getTasks, project: { id: projectId } } = this.props;

    const tasks = await getTasks({ projectId }) || [];
    
    this.setState({ tasks });
  }

  handleSubmit = async ({ name }, { resetForm }) => {
    const { 
      createTask,
      project: { id: projectId } 
    } = this.props;
  
    const status = await createTask({ projectId, name });

    resetForm();
    if(status === 201) {
      this.fetchData();
    }
  }

  terminateTask = taskId => async () => {
    const { 
      updateTask,
      project: { id: projectId } 
    } = this.props;

    const status = await updateTask({ projectId, taskId });

    if(status === 200) {
      this.fetchData();
    }
  }

  render() {
    const { project: { name } } = this.props;
    const { tasks, initialValues } = this.state;

    return (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      validationSchema={FormSchema}
    >
    {props => ( 
      <View 
        {...props}
        name={name}
        tasks={tasks}
        terminateTask={this.terminateTask}
      />
    )}
    </Formik>
    )
  }
}

ProjectCard.propTypes = {
  project: shape({
    id: number.isRequired,
    name: string.isRequired,
  }).isRequired,
  getTasks: func.isRequired,
  createTask: func.isRequired,
  updateTask: func.isRequired,
};

const mapDispatchToProps = {
  getTasks: get,
  createTask: create,
  updateTask: update,
};

export default connect(null, mapDispatchToProps)(ProjectCard);
