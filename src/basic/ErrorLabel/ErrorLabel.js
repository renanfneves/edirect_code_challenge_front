import React from "react";
import { string } from "prop-types";
import { Row, Col, Alert } from "antd";

const ErrorLabel = ({ children }) => (
  <Row type="flex" justify="center" style={{ marginBottom: 20 }}>
    <Col span={8}>
      <Alert
        message="Error"
        description={children}
        type="error"
        showIcon
      />
    </Col>
  </Row>
);

ErrorLabel.propTypes = {
  children: string,
  className: string,
};

ErrorLabel.defaultProps = {
  children: "",
  className: "",
};

export default ErrorLabel;
