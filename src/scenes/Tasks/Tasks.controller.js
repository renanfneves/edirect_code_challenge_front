import React, { Component } from "react";
import { connect } from "react-redux";

import View from "./Tasks";

class Tasks extends Component {
  render() {
    return <View />;
  }
}

export default connect()(Tasks);