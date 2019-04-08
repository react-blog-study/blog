import React, { Component } from 'react';
import Tabs from 'components/user/Tab/Tabs';
import UserContentTemplate from 'components/user/UserContent/UserContentTemplate';
import UserPostsSubpage from 'pages/user/UserPostsSubpage';
import UserHistorySubpage from 'pages/user/UserHistorySubpage';
import UserAboutSubpage from 'pages/user/UserAboutSubpage';
import UserSeriesSubpage from 'pages/user/UserSeriesSubpage';
import UserContent from 'components/user/UserContent/UserContent';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as profileActions from 'store/modules/profile';

class UserContentContainer extends Component {
  initialize = async () => {
    const { ProfileActions } = this.props;
    const { userId } = this.props.match.params;
    if (!userId) return;

    try {
      await ProfileActions.getProfile(userId);
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.initialize();
    }
  }

  render() {
    const { match, side } = this.props;
    const userId = match.params.userId || '';
    const tab = match.params.tab || 'posts';

    return (
      <UserContentTemplate>
        <Tabs userId={userId} tab={tab} />
        <UserContent>
          <Route exact path="/@:userId" component={UserPostsSubpage} />
          <Route path="/@:userId/series" component={UserSeriesSubpage} />
          <Route path="/@:userId/history" component={UserHistorySubpage} />
          <Route path="/@:userId/tags/:tag" component={UserPostsSubpage} />
          <Route path="/@:userId/about" component={UserAboutSubpage} />
        </UserContent>
      </UserContentTemplate>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ profile, common }) => ({
      profile: profile.profile,
      size: profile.side,
    }),
    dispatch => ({
      ProfileActions: bindActionCreators(profileActions, dispatch),
    }),
  ),
);
export default enhance(UserContentContainer);
