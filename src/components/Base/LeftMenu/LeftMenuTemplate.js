import React, { Component } from "react";
import "./LeftMenuTemplate.scss";
import LeftMenuList from "./LeftMenuList";

class LeftMenuTemplate extends Component {
  render() {
    return (
      <div className="LeftMenuTemplate">
        <div className="Logo">velog</div>
        <div className="MainSearchBox">
          <input />
        </div>

        <div className="">
          <LeftMenuList />
        </div>

        <div className="place" />
        <div className="footer">서비스 정책</div>
      </div>
    );
  }
}

export default LeftMenuTemplate;
