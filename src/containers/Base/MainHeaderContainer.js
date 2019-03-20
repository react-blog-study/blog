import React, { Component } from "react";
import MainHeader from "components/Base/MainHeader/MainHeader";
import LoginButton from "components/Base/MainHeader/LoginButton";

class MainHeaderContainer extends Component {
  render() {
    return (
      <MainHeader>
        <LoginButton />
      </MainHeader>
    );
  }
}

export default MainHeaderContainer;
