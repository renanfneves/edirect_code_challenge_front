import React from "react";
import { func, shape, arrayOf, string } from "prop-types";
import { 
  Row,
  Col,
  Input,
  Card,
  Menu,
  Dropdown,
  Icon 
} from "antd";

import ProjectCard from "./ProjectCard";

import "./Dashboard.css";

const Dashboard = ({ 
  values,
  handleSubmit,
  touched,
  errors,
  handleChange,
  projects,
  loggedUser,
  logout,
 }) => {
   const menu = (
    <Menu>
      <Menu.Item key="0">
        <span onClick={logout}>logout</span>
      </Menu.Item>
    </Menu>
  );
   return (
    <>
      <Row style={{ backgroundColor: "#d3d3d3", position: "relative" }}>
        <Col span={16}><h1>EDirectInsure TODO List</h1></Col>
        <Col span={8} className="drop-down">
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="user-menu">
                {loggedUser}{" "}<Icon type="down" />
              </span>
            </Dropdown>
          
        </Col>
      </Row>
      <Row className="dashboard-content">
        <Col span={16}>
          <Row type="flex" justify="space-around">
            {projects.map((project, index) => (
              <Col span={10} key={`project_card_${index}`}>
                <ProjectCard project={project} />
              </Col>
              )
            )}        
          </Row>
        </Col>
        <Col span={8}>
        <Card className="new-project-card">
        <form onSubmit={handleSubmit}>
          <h2>Create a new project</h2>
          <Input
              placeholder="Project name"
              className="login-input"
              id="name"
              type="text"
              name="name"
              size="large"
              value={values.name}
              onChange={handleChange}
            />
            {touched.name && errors.name}
            <button type="submit" className="project-submit-button">Create project</button>
          </form>
        </Card>
        </Col>
      </Row>
    </>)
 };
  
Dashboard.propTypes = {
  values: shape({}).isRequired,
  handleSubmit: func.isRequired,
  touched: shape({}).isRequired,
  errors: shape({}).isRequired,
  handleChange: func.isRequired,
  projects: arrayOf(shape({})),
  loggedUser: string,
  logout: func.isRequired,
}

Dashboard.defaultProps = {
  projects: [],
  loggedUser: "",
}

export default Dashboard;