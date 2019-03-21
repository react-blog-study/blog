import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Write,
  Policy,
  User,
  Saves,
  Settings,
  NotFound
} from "pages";
import { hot } from "react-hot-loader";
import Core from "containers/Base/Core";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:mode(trending|recent|tags)" component={Home} />
        <Route path="/write" component={Write} />

        <Route exact path="/@:username/" component={User} />
        <Route exact path="/@:username/tags/:tag" component={User} />
        <Route
          exact
          path="/@:username/:tab(history|about|series)"
          component={User}
        />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/policy/:mode(policy|terms)" component={Policy} />
        <Route path="/saves" component={Saves} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
      <Core />
    </>
  );
};

export default hot(module)(App);
