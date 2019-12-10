import React from "react";
import { connect } from "react-redux";
import { string, arrayOf, shape, func } from "prop-types";
import { Card, Icon, Row, Col, Checkbox, Input } from "antd";

import "./ProjectCard.css";

const ProjectCard = ({ 
    terminateTask,
    name,
    tasks,
    values,
    handleSubmit,
    handleChange,
  }) => (
  <Card 
    title={name}
    extra={
      <Row gutter={8} type="flex">
        <Col><Icon type="edit" theme="twoTone" className="action-button" /></Col>
        <Col><Icon type="delete" theme="twoTone" className="action-button" /></Col>
      </Row>
    }
    className="card-container"
  >
    <Row>
      <p className="task-type">To Do</p>
      {tasks.filter(task => task.terminated === false).map((task, index) => (
      <Row key={`task_${index}`}>
        <Checkbox
          className="task"
          onChange={terminateTask(task.id)}
        >
          {task.name}
        </Checkbox>
      </Row>
    ))}
    </Row>
    <Row>
      <p className="task-type">Done</p>
      {tasks.filter(task => task.terminated === true).map((task, index) => (
      <Row key={`done_task_${index}`}>
        <Checkbox checked className="task">
          {task.name}
        </Checkbox>
      </Row>
    ))}
    </Row>
   
    <Row gutter={8}>
      <form onSubmit={handleSubmit}>
        <Col span={16}>
          <Input 
            placeholder="Task"
            type="text"
            name="name"
            size="large"
            value={values.name}
            onChange={handleChange}
          />
        </Col>
        <Col span={8}>
          <button type="submit" className="task-submit-button">Add</button>
        </Col>
      </form>
    </Row>
  </Card>
);

ProjectCard.propTypes = {
  name: string.isRequired,
  tasks: arrayOf(shape({})),
  values: shape({}).isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  terminateTask: func.isRequired,
};

ProjectCard.defaultProps = {
  tasks: [],
};

export default connect(null)(ProjectCard);