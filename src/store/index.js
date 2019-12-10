import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import { createBrowserHistory } from "history";

import createRootReducer from "./modules";

export const history = createBrowserHistory();

const persistConfig = {
  key: "edirect",
  storage,
  whitelist: ["session" ],
};

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  connectRouter(history)(persistedReducer),
  composeEnhancers(...enhancers),
);

export const persistor = persistStore(store);

export default store;
