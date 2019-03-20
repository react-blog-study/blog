import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoMdTrendingUp } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import "./LeftMenuList.scss";

class LeftMenuList extends Component {
  render() {
    return (
      <div className="LeftMenuList">
        <Link to="/trending">
          <div className="LeftMenuItem">
            <IoMdTrendingUp />
            <div className="text">트렌딩</div>
          </div>
        </Link>
        <Link to="/recent">
          <div className="LeftMenuItem">
            <FaRegClock />
            <div className="text">최신 포스트</div>
          </div>
        </Link>
        <Link to="/tags">
          <div className="LeftMenuItem">
            <FiTag />
            <div className="text">태그</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default LeftMenuList;
