import React, { Component } from 'react';
import Tabs from 'components/user/Tab/Tabs';
import UserContentTemplate from 'components/user/UserContent/UserContentTemplate';
import UserPostsSubpage from 'pages/user/UserPostsSubpage';
import UserHistorySubpage from 'pages/user/UserHistorySubpage';
import UserAboutSubpage from 'pages/user/UserAboutSubpage';
import UserSeriesSubpage from 'pages/user/UserSeriesSubpage';
import UserContent from 'components/user/UserContent/UserContent';
import { Route } from 'react-router-dom';

class UserContentContainer extends Component {
  render() {
    return (
      <UserContentTemplate>
        <Tabs />
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

export default UserContentContainer;
