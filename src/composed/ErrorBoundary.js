import React, { Component } from "react";
import { node } from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      info: "",
      error: "",
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, info, error }, () => {
      console.log(`ErrorInfo: ${JSON.stringify(info)}`); // eslint-disable-line
      console.log(`Error: ${error}`); // eslint-disable-line
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <p>Something bad happened. :( </p> : children;
  }
}

ErrorBoundary.propTypes = {
  children: node.isRequired,
};

export default ErrorBoundary;
