import React, { Component } from "react";
import { connect } from "react-redux";

import View from "./Projects";

class Projects extends Component {
  render() {
    return <View />;
  }
}

export default connect()(Projects);