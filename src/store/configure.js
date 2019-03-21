import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import penderMiddleware from "redux-pender";
const configure = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const store = createStore(
    modules,
    composeEnhancers(applyMiddleware(penderMiddleware()))
  );

  return store;
};

export default configure;
