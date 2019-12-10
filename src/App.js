import React from "react";
import { ConnectedRouter } from "connected-react-router";
import Routes from "routes";
import "./App.css";

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Routes />
  </ConnectedRouter>
);

export default App;
