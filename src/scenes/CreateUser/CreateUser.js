import React from "react";
import { Row, Input, Col } from "antd";
import { Link } from "react-router-dom";
import { If, ErrorLabel } from "basic";
import { shape, func, string } from "prop-types";
import { paths } from "enums";
import "./CreateUser.css";

const CreateUser = ({  
  values,
  handleSubmit,
  requestError,
  touched,
  errors,
  handleChange,
}) => (
  <form className="create-user-container" onSubmit={handleSubmit}>
    <h1>TODO List - Cadastro de Usuário</h1>
    <Row type="flex" justify="center">
      <Col span={8}>
        <Input
            placeholder="Nome"
            className="create-user-input"
            id="name"
            type="text"
            name="name"
            size="large"
            value={values.name}
            onChange={handleChange}
            />
          {touched.name && errors.name}
        </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span={8}>
        <Input
            placeholder="Usuário"
            className="create-user-input"
            id="username"
            type="email"
            name="username"
            size="large"
            value={values.username}
            onChange={handleChange}
            />
          {touched.username && errors.username}
        </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span={8}>
        <Input
            placeholder="Senha"
            className="create-user-input"
            id="password"
            type="password"
            name="password"
            size="large"
            value={values.password}
            onChange={handleChange}
            />
          {touched.password && errors.password}
      </Col>
    </Row>
    <If condition={requestError}>
      <ErrorLabel>{requestError}</ErrorLabel>
    </If>
    <Row type="flex" justify="center">
      <Col span={8}>
        <button 
          size="large"
          type="submit"
          className="submit-button"
        >
          enivar
        </button>
      </Col>
    </Row>
    <Row type="flex" justify="center" className="login-link">
      <Col span={8}>
        <Link to={paths.LOGIN} style={{ color: "#000" }}>
          já possui cadastro
        </Link>
      </Col>
    </Row>
    
  </form>
);

CreateUser.propTypes = {
  values: shape({}).isRequired,
  handleSubmit: func.isRequired,
  loginError: string,
  touched: shape({}).isRequired,
  errors: shape({}).isRequired,
  handleChange: func.isRequired,
}


export default CreateUser;
