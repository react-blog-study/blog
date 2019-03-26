import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Write, Policy, User, Saves, Settings, NotFound } from 'pages';
import { hot } from 'react-hot-loader';
import Core from 'containers/Base/Core';
import storage from 'lib/storage';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as userActions from 'store/modules/user';

class App extends Component {
  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo');
    if (!loggedInfo) return;

    const { UserActions } = this.props;
    UserActions.setLoggedInfo(loggedInfo);
    try {
      await UserActions.checkStatus();
    } catch (e) {
      storage.remove('loggedInfo');
      window.location.href = 'auth/login?expired';
    }
  };

  componentDidMount() {
    this.initializeUserInfo();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:mode(trending|recent|tags)" component={Home} />
          <Route path="/write" component={Write} />

          <Route exact path="/@:username/" component={User} />
          <Route exact path="/@:username/tags/:tag" component={User} />
          <Route exact path="/@:username/:tab(history|about|series)" component={User} />

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
  }
}
const enhance = compose(
  hot(module),
  connect(
    null,
    dispatch => ({
      UserActions: bindActionCreators(userActions, dispatch),
    }),
  ),
);
export default enhance(App);
