import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "composed";

import store, { persistor, history } from "./store";

import "antd/dist/antd.css";
import App from "./App";
import { unregister } from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <App history={history} />
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
);

unregister();
