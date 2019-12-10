import React from "react";
import { Row, Input, Col } from "antd";
import { Link } from "react-router-dom";
import { If, ErrorLabel } from "basic";
import { shape, func, string } from "prop-types";
import { paths } from "enums";
import "./Login.css";

const Login = ({  
  values,
  handleSubmit,
  loginError,
  touched,
  errors,
  handleChange,
}) => (
  <form className="login-container" onSubmit={handleSubmit}>
    <h1>TODO List - Login</h1>
    <Row type="flex" justify="center">
      <Col span={8}>
        <Input
          placeholder="Usuário"
          className="login-input"
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
          className="login-input"
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
    <If condition={loginError}>
      <ErrorLabel>{loginError}</ErrorLabel>
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
    <Row type="flex" justify="center" className="create-user-link">
      <Col span={8}>
        <Link to={paths.CREATE_USER} style={{ color: "#000" }}>
          criar usuário
        </Link>
      </Col>
    </Row>
    
  </form>
);

Login.propTypes = {
  values: shape({}).isRequired,
  handleSubmit: func.isRequired,
  loginError: string,
  touched: shape({}).isRequired,
  errors: shape({}).isRequired,
  handleChange: func.isRequired,
}


export default Login;
